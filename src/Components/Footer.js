import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system"
import Marquee from "react-fast-marquee";

const A = styled("a")( ({ theme }) => ({
  color: theme.palette.brand.primary
}))

const Footer = () => {
  const marginSpan = <span style={{marginRight:"40px"}}></span>
  return (
    <Box sx={{ width: "100%", height: "100%", bgcolor: "brand.secondary", paddingTop: 1, maxHeight: "40px"  }}>
      <Marquee gradient={false} speed={75} pauseOnHover={true}>
        <Typography 
            variant="h4" sx={{ color: "brand.primary", bgcolor: "brand.secondary", paddingLeft: 2, cursor: "pointer" }} onClick={() => window.location.href = "https://forms.gle/Ejmfsd2Zr68om7sR8" }>
            NEXT EVENT COMING UP SOON - STAY UP TO DATE ON <A href="https://instagram.com/doneproperlyberlin">INSTAGRAM</A>! {marginSpan}
            NEXT EVENT COMING UP SOON - STAY UP TO DATE ON <A href="https://instagram.com/doneproperlyberlin">INSTAGRAM</A>! {marginSpan}
            NEXT EVENT COMING UP SOON - STAY UP TO DATE ON <A href="https://instagram.com/doneproperlyberlin">INSTAGRAM</A>! {marginSpan}
            NEXT EVENT COMING UP SOON - STAY UP TO DATE ON <A href="https://instagram.com/doneproperlyberlin">INSTAGRAM</A>! {marginSpan}
            NEXT EVENT COMING UP SOON - STAY UP TO DATE ON <A href="https://instagram.com/doneproperlyberlin">INSTAGRAM</A>! {marginSpan}
            NEXT EVENT COMING UP SOON - STAY UP TO DATE ON <A href="https://instagram.com/doneproperlyberlin">INSTAGRAM</A>! {marginSpan}
            NEXT EVENT COMING UP SOON - STAY UP TO DATE ON <A href="https://instagram.com/doneproperlyberlin">INSTAGRAM</A>! {marginSpan}
            NEXT EVENT COMING UP SOON - STAY UP TO DATE ON <A href="https://instagram.com/doneproperlyberlin">INSTAGRAM</A>! {marginSpan}
            NEXT EVENT COMING UP SOON - STAY UP TO DATE ON <A href="https://instagram.com/doneproperlyberlin">INSTAGRAM</A>! {marginSpan}
            NEXT EVENT COMING UP SOON - STAY UP TO DATE ON <A href="https://instagram.com/doneproperlyberlin">INSTAGRAM</A>! {marginSpan}
            NEXT EVENT COMING UP SOON - STAY UP TO DATE ON <A href="https://instagram.com/doneproperlyberlin">INSTAGRAM</A>! {marginSpan}
        </Typography>
      </Marquee>
    </Box>
  );
};

export default Footer;
