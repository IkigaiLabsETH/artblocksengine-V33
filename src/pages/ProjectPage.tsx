import { useParams } from "react-router-dom"
import Page from "components/AbEngine/Page"
import ProjectDetails from "components/AbEngine/ProjectDetails"

const ProjectPage = () => {
  const { contractAddress, projectId } = useParams()
  return (
    <Page>
      {
        contractAddress && projectId && <ProjectDetails contractAddress={contractAddress} id={projectId}/>
      }
    </Page>
  )
}

export default ProjectPage
