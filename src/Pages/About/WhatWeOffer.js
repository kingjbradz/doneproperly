import React from "react";
import { Typography } from "@mui/material";
import { LineBox, RowBox } from "../../Components/Elements";



const WhatWeOffer = ({ themeMode }) => {
  // const theme = useTheme()
  // const is1000 = useMediaQuery("( min-width: 1000px )");
  return (
    <>
      <LineBox sx={{ alignItems: "center" }}>
        <RowBox>
          <Typography
            sx={{
              color: themeMode ? "brand.secondary" : "brand.primary":,
              fontSize: "14px",
              maxWidth: "730px !important"
            }}
          >
            <u>DJ Workshops</u>
            <br/>
            We host accessible vinyl and digital workshops on club standard equipment. Multiple teachers share their personal tips and tricks and also leave room for hands-on practising. 
            <br/><br/>
            <u>Club Events</u>
            <br/>
            To diversify the local club scene we throw parties of a variety of genres and book DJs regardless of their social media following. We also give some of our mentees a chance to play in a real club environment.
            <br/><br/>
            <u>Hosting Mixes</u>
            <br/>
            The rule is simple: anyone can send in a mix. We give a platform to any DJ and offer our growing listening fan base new artists to discover on a weekly basis
            <br/><br/>
            <u>Access to Equipment & Private DJ Lessons</u>
            <br/>
            Equipment and DJ lessons are expensive - but not with us. It’s important for us to make these things accessible and even have discounts for mentees. 
            <br/><br/>
            <u>Community</u>
            <br/>
            We’re an LGBTQIA+, BIPOC and FLINTA* friendly space. We’ll always prioritise those who are less privileged but everyone who respects our values is welcome: DJ newbies, DJs with skills to share, graphic designers, videographers, photographers, etc. Shoot us a message to find out how you can get involved or click <a href="https://docs.google.com/forms/d/e/1FAIpQLScTPJWT7WLkgy26xdZnbTxcE8lOrRBWziPr8LY9zrWFiRxhYg/viewform?pli=1">here</a>. We’re trying to build a community where you belong: the loner, the castaway, the nerd, the underdog. We’re bringing something that is made for you. Come by and check out one of our events where we’d love for you to stick around, connect with others, and become a real part of our community. After all, it ain‘t done properly without you.
          </Typography>
        </RowBox>
      </LineBox>
    </>
  );
};

export default WhatWeOffer;
