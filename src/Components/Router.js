import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material"
import About from "../Pages/About";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Impressum from "../Pages/Impressum";
import App404 from "../Pages/App404";
import Team from "../Pages/Team";
// import Events from "../Pages/Events"
import NewsletterSignup from "../Pages/NewsletterSignup";
import Listen from "../Pages/Listen";


const Router = ({ themeMode, noShow, setNoShow }) => {
  const location = useLocation()
  return (
    <Box sx={{ 
      height: location.pathname === "/" ? "100%" : location.pathname === "/listen" ? "100%" : "auto", 
      paddingTop: location.pathname === "/" && "64px",
      flexGrow: "1",
      overflow: "auto",
      "-ms-overflow-style": "none", /* Hide scrollbars - IE and Edge */
      "scrollbar-width": "none",  /* Hide scrollbars - Firefox */
      "::-webkit-scrollbar": {
        width: "8px",
        marginLeft: "0.5rem",
      },
      "::-webkit-scrollbar-track": {
        boxShadow: "none",
        background: "none",
        border: "none"
      },
      "::-webkit-scrollbar-thumb": {
       background: (theme) =>  theme.palette.brand.secondary,
       borderRadius: "8px",
       backgroundClip: "padding-box",
       borderRight: "0.75px white solid",
      }
      }}>
      <Routes>
        <Route path="/" element={<Home noShow={setNoShow(false)} themeMode={themeMode} />}  />
        <Route path="/about" element={<About noShow={setNoShow(false)} themeMode={themeMode} />} />
        <Route path="/team" element={<Team noShow={setNoShow(false)} themeMode={themeMode} />} />
        {/* <Route path="/events" element={<Events noShow={setNoShow(false)} themeMode={themeMode} />} /> */}
        <Route path="/contact" element={<Contact noShow={setNoShow(false)} themeMode={themeMode} />} />
        <Route path="/impressum" element={<Impressum noShow={setNoShow(false)} themeMode={themeMode} />} />
        <Route path="/newsletter" element={<NewsletterSignup noShow={setNoShow(false)} themeMode={themeMode} />} />
        <Route path="/listen" element={<Listen noShow={noShow} setNoShow={setNoShow} themeMode={themeMode} />} />
        <Route path="/*" element={<App404 noShow={setNoShow(false)} themeMode={themeMode} />} />
      </Routes>
    </Box>
  );
};

export default Router;
