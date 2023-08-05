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

function draw() {
  background(180);
  
  let attractorCount = floor(random(42, 69));
  
  for (let i = 0; i < attractorCount; i++) {
    let cx = random(width);
    let cy = random(height);
    let sizeL = random(5, 200); 
    let col = color(random(255), random(255), random(255)); 
    drawLorenzAttractor(cx, cy, sizeL, col);
  }

  applyGrain()
  image(grainBuffer, 0, 0)
}

function drawLorenzAttractor(cx, cy, size, col) {
  let rho = 28.0;
  let sigma = 10.0;
  let beta = 8.0 / 3.0;
  let dt = 0.01;
  
  let x = 1, y = 1, z = 1;
  
  stroke(col);
  beginShape();
  for (let i = 0; i < 4200; i++) {
    let dx = sigma * (y - x) * dt;
    let dy = x * (rho - z) - y;
    dy *= dt;
    let dz = x * y - beta * z;
    dz *= dt;

    x += dx;
    y += dy;
    z += dz;

    let vertexX = x * size + cx;
    let vertexY = y * size + cy;

    let noiseVal = noise(vertexX * 0.01, vertexY * 0.01);
    vertexX += noiseVal * 10;
    vertexY += noiseVal * 10;

    // Add noise based line thickness
    let lineThickness = map(noiseVal, 0, 1, 1, 3);
    strokeWeight(lineThickness);

    vertex(vertexX, vertexY);
  }
  endShape(CLOSE);
}
