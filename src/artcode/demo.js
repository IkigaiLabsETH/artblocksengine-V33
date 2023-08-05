let mainCanvas
let grainBuffer
let grainShader

const vert = `
  precision highp float;
  attribute vec3 aPosition;
  attribute vec2 aTexCoord;

  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  varying vec2 vVertTexCoord;

  void main(void) {
    vec4 positionVec4 = vec4(aPosition, 1.0);
    gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
    vVertTexCoord = aTexCoord;
  }
`

const frag = `
  precision highp float;
  varying vec2 vVertTexCoord;

  uniform sampler2D source;
  uniform float noiseSeed;
  uniform float noiseAmount;

  float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  void main() {
    vec4 inColor = texture2D(source, vVertTexCoord);
    gl_FragColor = clamp(inColor + vec4(
      mix(-noiseAmount, noiseAmount, fract(noiseSeed + rand(vVertTexCoord * 1234.5678))),
      mix(-noiseAmount, noiseAmount, fract(noiseSeed + rand(vVertTexCoord * 876.54321))),
      mix(-noiseAmount, noiseAmount, fract(noiseSeed + rand(vVertTexCoord * 3214.5678))),
      0.
    ), 0., 1.);
  }
`

function setup() {
  mainCanvas = createCanvas(1000, 1000);
  frameRate(2);
  noLoop();

  grainBuffer = createGraphics(width, height, WEBGL);
  grainShader = grainBuffer.createShader(vert, frag)
}

function applyGrain() {
  grainBuffer.shader(grainShader)
  grainShader.setUniform('noiseSeed', random()) 
  grainShader.setUniform('source', mainCanvas)
  grainShader.setUniform('noiseAmount', 0.1)
  grainBuffer.rectMode(CENTER)
  grainBuffer.noStroke()
  grainBuffer.rect(0, 0, width, height)
}

function drawPolygon(n, cx, cy, r, angle, col) {
  fill(col);
  beginShape();
  for (let i = 0; i < n; i++) {
    let curr_angle = i * TWO_PI / n - HALF_PI + angle;
    let x = cx + r * cos(curr_angle);
    let y = cy + r * sin(curr_angle);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function draw() {
  background(180);
  noStroke();
  
  let polygonCount = floor(random(5, 30));
  
  for (let i = 0; i < polygonCount; i++) {
    let sides = floor(random(3, 8)); // number of sides
    let cx = random(width);
    let cy = random(height);
    let radius = random(50, 200); 
    let rotation = random(TWO_PI); 
    let col = color(random(255), random(255), random(255), random(100, 200));
    
    // Layering: draw multiple polygons with different sizes and opacities
    let layers = floor(random(2, 5)); // number of layers
    for (let j = 0; j < layers; j++) {
      let layerRadius = radius * (layers - j) / layers;
      let layerCol = color(red(col), green(col), blue(col), 255 * (j+1) / layers);
      drawPolygon(sides, cx, cy, layerRadius, rotation, layerCol);
    }
  }

  applyGrain()
  image(grainBuffer, 0, 0)
}
