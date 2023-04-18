import React from "react";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const Footer = () => {
  const marginSpan = <span style={{marginRight:"40px"}}></span>
  return (
    <Box sx={{ width: "100%", bgcolor: "brand.secondary", height: "40px", paddingTop: 0.5 }}>
      <Marquee gradient={false} speed={75} pauseOnHover={true}>
        <Typography 
            variant="h4" sx={{ color: "brand.primary", paddingLeft: 2, cursor: "pointer" }} onClick={() => window.location.href = "https://forms.gle/Ejmfsd2Zr68om7sR8" }>
            WORKSHOP #2 COMING UP SOON!{marginSpan}
            WORKSHOP #2 COMING UP SOON!{marginSpan}
            WORKSHOP #2 COMING UP SOON!{marginSpan}
            WORKSHOP #2 COMING UP SOON!{marginSpan}
            WORKSHOP #2 COMING UP SOON!{marginSpan}
            WORKSHOP #2 COMING UP SOON!{marginSpan}
            WORKSHOP #2 COMING UP SOON!{marginSpan}
            WORKSHOP #2 COMING UP SOON!{marginSpan}
            WORKSHOP #2 COMING UP SOON!{marginSpan}
            WORKSHOP #2 COMING UP SOON!{marginSpan}
            WORKSHOP #2 COMING UP SOON!{marginSpan}
        </Typography>
      </Marquee>
    </Box>
  );
};

export default Footer;
