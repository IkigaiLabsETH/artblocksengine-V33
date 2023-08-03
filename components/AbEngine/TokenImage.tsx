import { getContractConfigByAddress } from "src/utils/contractInfoHelper";

interface Props {
  contractAddress: string
  tokenId: string
  width: number
  height: number
}

const TokenImage = ({contractAddress, tokenId, width, height}: Props) => {
  const contractConfig = getContractConfigByAddress(contractAddress)

  return (
    <img
      src={`${contractConfig?.MEDIA_URL}/${tokenId}.png`}
      alt={tokenId}
      width={width}
      height={height}
    />
  )
}

export default TokenImage
