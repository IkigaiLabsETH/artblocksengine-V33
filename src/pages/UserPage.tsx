import { useParams } from "react-router-dom"
import Page from "components/AbEngine/Page"
import OwnedProjects from "components/AbEngine/OwnedProjects"

const UserPage = () => {
  const { walletAddress } = useParams()
  return (
    <Page>
      {
        walletAddress && <OwnedProjects walletAddress={walletAddress.toLowerCase()}/>
      }
    </Page>
  )
}

export default UserPage
