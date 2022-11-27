import { Box } from "@mui/material";
import Header from "../../Components/Header/Header";
import BarChart from './../Bar/BarChart';

function Bar() {    
  return <>
    <Box m="20px">
        <Header title="BAR CHART" subtitle="Simple Bar Chart"/>
        <Box height="75vh">
            <BarChart/>
        </Box>
    </Box>
  </>
}

export default Bar