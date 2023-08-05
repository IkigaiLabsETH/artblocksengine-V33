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


// note In your ProjectPage component, you can get the necessary data from the ProjectDetails component (presumably this component is connected to your ArtBlocks ABI and can fetch the necessary data), and then pass it to the Details component. This will require you to refactor the ProjectDetails component to handle the fetching of data and pass it to the Details component.
// The process will involve using React's state and effect hooks to fetch data and update the state when the data is received. You will also need to handle loading and error states.
// Please replace the hard-coded data with actual data from your backend or from the ProjectDetails component.
