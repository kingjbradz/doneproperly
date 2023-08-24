import React from "react";
import { Box } from "@mui/material";
import About from "./About/About";
import Team from "./About/Team";

const AboutContainer = ({ themeMode }) => {
  return (
  <Box>
    <About themeMode={themeMode} />
    <Team themeMode={themeMode} />
  </Box>
  );
};

export default AboutContainer;