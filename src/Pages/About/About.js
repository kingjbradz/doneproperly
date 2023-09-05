import React from "react";
import { Typography, useMediaQuery, Stack, Link } from "@mui/material";
import { LineBox, RowBox } from "../../Components/Elements";

const AboutUs = ({ themeMode }) => {
  const is750 = useMediaQuery("( min-width: 750px )");
  const is1000 = useMediaQuery("( mind-width: 1000px )");
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <LineBox sx={{ flexDirection: !is1000 && "column-reverse" }}>
          <RowBox>
            <Typography sx={{color:"brand.secondary",fontSize:"14px", maxWidth: "730px !important" }}>
              We believe music belongs to everyone and everyone belongs to
              music. We want to bring opportunities, skill and knowledge to
              anyone who might struggle to find resources and a community to
              learn how to DJ across all genres, practice and show off their
              skill. You wish you could do music, you’re struggling to learn -
              don’t worry, we’ve got you!
              <br />
              <br /> We’re starting out with skill sharing, workshops, and with
              it, access to proper equipment. We’re working towards a physical
              space, building a community and hosting club nights for everyone
              involved in DONE PROPERLY.
            </Typography>
          </RowBox>
          <RowBox>
            <Typography
              variant="h4"
              sx={{
                color: "brand.secondary",
                width: is750 ? 750 : "auto",
                marginBottom: !is1000 && 2,
              }}
            >
              BRINGING MUSIC BACK TO THE PEOPLE
            </Typography>
          </RowBox>
        </LineBox>
        <LineBox sx={{ flexDirection: !is1000 && "column-reverse" }}>
          <RowBox>
            <Typography sx={{ color:"brand.secondary",fontSize:"14px", maxWidth: "730px !important" }}>

            We’re an LGBTQIA+, BIPOC and FLINTA* friendly space. We’ll always
            prioritize those who are less privileged but everyone who respects
            our values is welcome: DJ newbies, DJs with skills to share, graphic
            designers, videographers, photographers who want to be part of a
            community, etc. Shoot us a message to find out how you can get
            involved  or click <Link href="https://docs.google.com/forms/d/e/1FAIpQLScTPJWT7WLkgy26xdZnbTxcE8lOrRBWziPr8LY9zrWFiRxhYg/viewform?pli=1" target="_blank"><u>here</u></Link>.
            <br />
            <br />
            We’re trying to build a community where you belong: the loner, the
            castaway, the nerd, the underdog. We’re bringing something that is
            made for you. Together we make sure it’s done properly.
            <br />
            <br /> Come by and check out one of our events where we’d love for
            you to stick around, connect with others, and become a real part of
            our community.
            <br />
            <br />
            After all, it ain‘t done properly without you.
            </Typography>
          </RowBox>
          <RowBox>
            <Typography
              variant="h4"
              sx={{
                color: "brand.secondary",
                width: is750 ? 750 : "auto",
                marginBottom: !is1000 && 2,
              }}
            >
              BUILDING A COMMUNITY
            </Typography>
          </RowBox>
        </LineBox>
      </Stack>
    </>
  );
};

export default AboutUs;
