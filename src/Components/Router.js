import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"
import About from "../Pages/About";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Impressum from "../Pages/Impressum";
import App404 from "../Pages/App404";
import Team from "../Pages/Team";

const Router = ({ themeMode }) => {
  return (
    <Box sx={{ paddingTop: "64px" }}>
      <Routes>
        <Route path="/" element={<Home themeMode={themeMode} />}  />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/*" element={<App404 />} />
      </Routes>
    </Box>
  );
};

export default Router;
