import React from "react";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "brand.secondary", height: "40px" }}>
      <Marquee gradient={false} speed={75} pauseOnHover={true}>
        <Typography 
            variant="h4" sx={{ color: "brand.primary", paddingLeft: 2, cursor: "pointer" }} onClick={() => window.location.href = "https://forms.gle/aBRU2rigJj767scZA" }>
            SIGN UP FOR OUR FREE WORKSHOP ON APRIL 15TH! SIGN UP FOR OUR FREE WORKSHOP ON APRIL 15TH!
        </Typography>
      </Marquee>
    </Box>
  );
};

export default Footer;
