import { Box } from "@mui/material";
import Header from "../../Components/Header/Header";
import LineChart from './LineChart';

function Line() {
  return <>
        <Box m="20px">
        <Header title="LINE CHART" subtitle="Simple Line Chart"/>
        <Box height="75vh">
            <LineChart/>
        </Box>
    </Box>
  </>
}

export default Line