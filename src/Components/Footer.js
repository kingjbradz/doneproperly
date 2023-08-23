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
    <Box sx={{ width: "100%", height: "100%", bgcolor: "brand.secondary", paddingTop: 1, maxHeight: "40px", flexShrink: "0"  }}>
      <Marquee gradient={false} speed={75} pauseOnHover={true}>
        <Typography 
            variant="h4" sx={{ color: "brand.primary", bgcolor: "brand.secondary", paddingLeft: 2, cursor: "pointer" }}>
            {/* COME TO OUR NEXT EVENT ON <A target="_blank" href="https://ra.co/events/1743769">AUGUST 18</A>! {marginSpan} */}
            SIGN UP FOR OUR <A target="_blank" href="/newsletter">NEWSLETTER</A>! {marginSpan}
            {/* COME TO OUR NEXT EVENT ON <A target="_blank" href="https://ra.co/events/1743769">AUGUST 18</A>! {marginSpan} */}
            SIGN UP FOR OUR <A target="_blank" href="/newsletter">NEWSLETTER</A>! {marginSpan}
            {/* COME TO OUR NEXT EVENT ON <A target="_blank" href="https://ra.co/events/1743769">AUGUST 18</A>! {marginSpan} */}
            SIGN UP FOR OUR <A target="_blank" href="/newsletter">NEWSLETTER</A>! {marginSpan}
            {/* COME TO OUR NEXT EVENT ON <A target="_blank" href="https://ra.co/events/1743769">AUGUST 18</A>! {marginSpan} */}
            SIGN UP FOR OUR <A target="_blank" href="/newsletter">NEWSLETTER</A>! {marginSpan}
            {/* COME TO OUR NEXT EVENT ON <A target="_blank" href="https://ra.co/events/1743769">AUGUST 18</A>! {marginSpan} */}
            SIGN UP FOR OUR <A target="_blank" href="/newsletter">NEWSLETTER</A>! {marginSpan}
            {/* COME TO OUR NEXT EVENT ON <A target="_blank" href="https://ra.co/events/1743769">AUGUST 18</A>! {marginSpan} */}
            SIGN UP FOR OUR <A target="_blank" href="/newsletter">NEWSLETTER</A>! {marginSpan}
            SIGN UP FOR OUR <A target="_blank" href="/newsletter">NEWSLETTER</A>! {marginSpan}
            SIGN UP FOR OUR <A target="_blank" href="/newsletter">NEWSLETTER</A>! {marginSpan}
            SIGN UP FOR OUR <A target="_blank" href="/newsletter">NEWSLETTER</A>! {marginSpan}
            SIGN UP FOR OUR <A target="_blank" href="/newsletter">NEWSLETTER</A>! {marginSpan}
        </Typography>
      </Marquee>
    </Box>
  );
};

export default Footer;
