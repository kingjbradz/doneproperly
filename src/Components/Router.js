import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"
import About from "../Pages/About";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Impressum from "../Pages/Impressum";

const Router = () => {
  return (
    <Box sx={{ paddingTop: "64px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Box>
  );
};

export default Router;
