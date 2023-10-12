import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import About from "./About/About";
import Team from "./About/Team";
import OurMission from "./About/OurMission";
import WhatWeOffer from "./About/WhatWeOffer";

const AboutContainer = ({ themeMode }) => {
  return (
    <Box>
      <About themeMode={themeMode} />
      <Accordion elevation={0} disableGutters={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "brand.primary" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ color: "brand.primary", bgcolor: "brand.secondary", display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Box sx={{  }}>
          <Typography>OUR MISSION</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
         <OurMission themeMode={themeMode} />
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} disableGutters={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "brand.primary" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ color: "brand.primary", bgcolor: "brand.secondary" }}
        >
          <Typography>WHAT WE OFFER</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <WhatWeOffer themeMode={themeMode} />
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} disableGutters={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "brand.primary" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ color: "brand.primary", bgcolor: "brand.secondary" }}
        >
          <Typography>THE TEAM</Typography>
        </AccordionSummary>
        <AccordionDetails>      
          <Team themeMode={themeMode} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AboutContainer;
