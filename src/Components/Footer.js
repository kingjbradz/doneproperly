import React from "react";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "brand.secondary", height: "40px", paddingTop: 0.5 }}>
      <Marquee gradient={false} speed={75} pauseOnHover={true}>
        <Typography 
            variant="h4" sx={{ color: "brand.primary", paddingLeft: 2, cursor: "pointer" }} onClick={() => window.location.href = "https://forms.gle/aBRU2rigJj767scZA" }>
            WORKSHOP #2 COMING UP SOON! WORKSHOP #2 COMING UP SOON! WORKSHOP #2 COMING UP SOON!
        </Typography>
      </Marquee>
    </Box>
  );
};

export default Footer;
