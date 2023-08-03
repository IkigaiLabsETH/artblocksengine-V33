import { 
  Box, 
  Typography 
} from "@mui/material"
import Page from "components/AbEngine/Page"

const LandingPage = () => {
  return (
    <Page>
      <Box marginTop={10}>
        <Typography variant="h1" fontSize={64}>Ikigai Labs XYZ</Typography>
        <Typography variant="h6" fontSize={48} fontStyle="italic">Powered by Art Blocks Engine</Typography>
      </Box>
    </Page>
  )
}

export default LandingPage
 
