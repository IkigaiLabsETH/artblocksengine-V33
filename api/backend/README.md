# Art Blocks Engine

Art Blocks Engine allows the generative NFT minting technology used by artists at Art Blocks to be integrated with Ikigai Labs XYZ. Engine allows to release generative outputs using AB smart contracts and rendering infrastructure resulting in Ikigai Labs XYZ generative projects. We will own our smart contracts and can use them to release new gen art series. We will do a collab with https://journal.artfora.com/ so that we can offer plotter prints. Time to reach out to info@artblocks.io Ikigai Labs XYZ may soon launch a Dutch auction format. The sale will inaugurate the launch of an auction house’s Gen Art Program powered by Art Blocks’ Art Blocks Engine — the company’s generative art solutions platform that provides technical infrastructure support for brands looking to expand their generative minting capabilities. The sale will be conducted entirely on-chain via Ikigai Labs. It will feature an exclusive series of 99 unique artworks that build LTL's early forays into algorithmic art. The integration of the Art Blocks Engine is a new avenue for generative artists to bring primary market works to sale. The Gen Art Program will highlight artists. Ikigai Labs will explore Dutch auctions. This method, which has been used by Art Blocks since its inception in 2021, starts at a fixed initial price and decreases at set increments until the first bid is placed. The ceiling price is set at x ETH. The format is perfect for price discovery. Several Web3 platforms have experimented with the Dutch auction format. Most recently, the NFT marketplace Foundation announced a dynamic pricing feature for NFTs that utilizes the method to better reflect market sentiment and remove the guesswork when it comes to an artist pricing their pieces.

The repo assumes your core contracts are either `GenArt721CoreV2` or `GenArt721CoreV3`, and supports the following minters:
`GenArt721Minter`, `MinterSetPriceV4`, `MinterSetPriceERC20V4`, `MinterMerkleV5`, and `MinterHolderV4`.

## Warning

**THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.**

# Quick Start

Run `npm install` or `yarn` to install dependencies.

To run the project locally you will need to create a `.env` configuration file. You can get started by copying
`sample.env` and renaming it as `.env`.

Run `npm start` or `yarn start` to run the project locally.

After making any changes to the `.env` file, you will need to restart the app.

The default values specified in the provided `sample.env` file are reflected in the demo hosting found at:
https://artblocks-engine-react.vercel.app/

**Important note:** if you are planning to run/host this template via Vercel, you will populate these environment
variables in the Vercel "Environment Variables" settings rather than defining them in your local `.env` file.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FArtBlocks%2Fartblocks-engine-react&env=REACT_APP_EXPECTED_CHAIN_ID,REACT_APP_GRAPHQL_URL,REACT_APP_INFURA_KEY&envDescription=Required%20environment%20variables%20for%20deployment&envLink=https%3A%2F%2Fgithub.com%2FArtBlocks%2Fartblocks-engine-react%2Fblob%2Fmain%2Fsample.env)

## Customizing your configuration

In order to customize your specific implementation, you will need to edit the default configuration provided on the
`sample.env` file.

You must specify an API key from [Infura](https://www.infura.io/) as well as a chain id in your environment file. Use
`1` for mainnet or `5` for goerli. Alternative providers can be used by modifying the `src/components/Providers.tsx`
file. Use multiple `.env` fields to set up `development` or `staging` environments on `testnet` if you wish to do so.

You must also obtain and supply a projectId from [WalletConnect Cloud](https://cloud.walletconnect.com/). This is free 
and only takes a few minutes.

Additionally, you will need to edit the default configuration in the `src/contractConfig.ts` file -
here you will find arrays for your mainnet and testnet contracts. Further configuration values like the number of
projects per page, tokens per page, etc. can be found in `src/config.ts`.

**Important note:** if you intend to support either of the `MinterMerkleV5` or `MinterHolderV4` minters there are a few
extra necessary requirements and configurations.

Support for the `MinterMerkleV5` minter requires a custom API endpoint that is responsible for calculating the merkle
root for a given wallet address - the url for this endpoint must be configured in the `.env` file with the
`REACT_APP_MERKLE_PROOF_API_URL` key. It is assumed that this endpoint takes the following url parameters:
`?contractAddress={}&projectId={}&walletAddress={}` - this can be customized in the
`src/components/MinterInterfaces/MinterMerkleV5Interface.tsx` file. For an example of this endpoint please see
[here](https://github.com/plottables/media/blob/main/pages/api/getMerkleProof.tsx).

Support for the `MinterHolderV4` minter requires a custom API endpoint that is responsible for determining the holder
proof for a given wallet address - the url for this endpoint must be configured in the `.env` file with the
`REACT_APP_HOLDER_PROOF_API_URL` key. It is assumed that this endpoint takes the following url parameters:
`?contractAddress={}&projectId={}&walletAddress={}&isMainnet={}` - this can be customized in the
`src/components/MinterInterfaces/MinterHolderV4Interface.tsx` file. For an example of this endpoint please see
[here](https://github.com/plottables/media/blob/main/pages/api/getHolderProof.tsx).

# Sections and Features

This project includes wallet connection with [RainbowKit](https://www.rainbowkit.com/) and
[wagmi.js](https://wagmi.sh/).

## Lander
- An empty landing page

## Projects
- Header/subheader
- Title/artist name/description blurb
- Grid of recent projects

## Project
- Breadcrumb nav
- Status
- Cover image
- Link to token shown as cover
- Title/artist
- Number of invocations
- Mint button
- Description
- License/library
- Token grid
- Sort (by date)
- Pagination

## Token
- Breadcrumb nav
- Date minted
- Token cover img with links to live/static views
- Owned by address or ens
- Title/artist name
- Features table
- Etherscan and OpenSea links

## Project list
- Grid of projects
- Cover images
- Link to token shown as cover
- Title/artist name
- Description blurb
- Pagination

## Owned Tokens
- List of projects with tokens owned by wallet
- Title/artist name with link to project page
- Images/Links to owned tokens with pagination
- Pagination

## V20 Test Project

Goal is to use the V20 code to actually deploy a test on OP
We are bullish on the OP stack as documented on LTL
This AB template with P5JS code will unlock our ability
to actually start testing the entire setup of AB Engine
Before we start allocating time to refactor the frontend
so that it matches with the Ikigai Labs XYZ brand DNA

## Notes on the V20

A generative art script that uses the p5.js library to create abstract images. It uses a seed to generate random values, which are then used to determine various properties of the image, such as color, complexity, and organization. The image is then drawn on a canvas using these properties.

The code also includes a function to generate a color palette based on the chosen category (Warm, Cool, or Mixed). The palette is then used to color the image. The colors in the palette are chosen based on a color scheme (monochromatic, analogous, complementary, splitComplementary, triadic, square, or tetradic), and the hues are adjusted based on the category.

The `getArt` function is where the image is actually drawn. It uses the properties determined earlier to draw a series of lines on the canvas. The position, rotation, and length of the lines are determined by the seed, creating a unique image each time the function is called.

The `generatePalette` function creates a color palette based on a given category. It generates a series of hues based on the color scheme, then adjusts the hues based on the category. It also adjusts the weights of the colors based on the category, ensuring that the colors used in the image match the chosen category.

The `weightedRandom` function is used to select a color from the palette. It selects a color based on its weight, with colors that have a higher weight being more likely to be selected.

The `getHueTemperature` function determines whether a given hue is warm or cool. It's used in the `generatePalette` function to adjust the weights of the colors based on the category.

The `roundToNearest` function rounds a value to the nearest interval. It's used in the `getArt` function to adjust the position of the lines when the organization is "Ordered".

The `rnd`, `range`, and `rangeFloor` functions are helper functions used to generate random numbers. The `rnd` function generates a random number between 0 and 1 based on the seed, while the `range` and `rangeFloor` functions generate a random number within a given range. The `rangeFloor` function rounds the result to the nearest whole number.

The `randomHash` function at the top of the script is used to generate a random seed for testing purposes. It generates a random string of hexadecimal characters, which is then converted to a number and used as the seed. This function is not used in the final image generation, but can be useful for testing and debugging.
