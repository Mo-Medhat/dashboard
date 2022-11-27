import { Box, Typography, useTheme } from "@mui/material"
import Header from "./../../Components/Header/Header";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from './../../theme';
import { useState } from 'react';

function FAQ() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return <>
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae ab corporis eveniet corrupti earum minima culpa ex,
                        magnam molestias rem libero natus unde ipsam
                        reiciendis delectus quam sunt necessitatibus quidem.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, explicabo.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae ab corporis eveniet corrupti earum minima culpa ex,
                        magnam molestias rem libero natus unde ipsam
                        reiciendis delectus quam sunt necessitatibus quidem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi ea odit eaque aspernatur explicabo.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Your Favorite Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae ab corporis eveniet corrupti earum minima culpa ex,
                        magnam molestias rem libero natus unde ipsam
                        reiciendis delectus quam sunt necessitatibus quidem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, asperiores.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Some Randome Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae ab corporis eveniet corrupti earum minima culpa ex,
                        magnam molestias rem libero natus unde ipsam
                        reiciendis delectus quam sunt necessitatibus quidem.
                        Lorem ipsum dolor sit amet.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        The Finel Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae ab corporis eveniet corrupti earum minima culpa ex,
                        magnam molestias rem libero natus unde ipsam
                        reiciendis delectus quam sunt necessitatibus quidem.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    </>
  
}

export default FAQ