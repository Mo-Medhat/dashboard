import { Box } from "@mui/material";
import Header from "../../Components/Header/Header";
import PieChart from './PieChart';

function Pie() {
  return <>
        <Box m="20px">
        <Header title="PIE CHART" subtitle="Simple Pie Chart"/>
        <Box height="75vh">
            <PieChart/>
        </Box>
    </Box>
  </>
}

export default Pie