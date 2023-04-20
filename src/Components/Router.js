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
    <Box>
      <Routes>
        <Route path="/" element={<Home themeMode={themeMode} />}  />
        <Route path="/about" element={<About themeMode={themeMode} />} />
        <Route path="/team" element={<Team themeMode={themeMode} />} />
        <Route path="/contact" element={<Contact themeMode={themeMode} />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/*" element={<App404 />} />
      </Routes>
    </Box>
  );
};

export default Router;
