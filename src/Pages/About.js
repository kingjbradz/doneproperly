import React from "react";
import { Box, Typography, useMediaQuery, Stack } from "@mui/material";
import { styled } from "@mui/system";

const LineBox = styled(Box)({
  justifyContent: "space-evenly",
  color: "brand.secondary",
  padding: "16px",
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  marginBottom: "24px",
  "@media screen and (min-width: 750px)": {
    padding: "0 3em",
  },
});

const RowBox = styled(Box)({
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
});

const AboutUs = ({ themeMode }) => {
  const is750 = useMediaQuery("( min-width: 750px )");
  const is1000 = useMediaQuery("( mind-width: 1000px )");
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          // maxHeight: `calc(${window.innerHeight}px - 100px)`,
          // overflow: "scroll",
        }}
      >
        <LineBox>
          <RowBox>
            <Typography
              variant="h4"
              sx={{
                color: "brand.secondary",
                marginRight: 2,
                width: is750 ? 500 : "auto",
                marginBottom: !is1000 && 2,
              }}
            >
              BRINGING MUSIC BACK TO THE PEOPLE
            </Typography>
          </RowBox>
          <RowBox>
            <Typography sx={{color:"brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
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
        </LineBox>

        <LineBox sx={{ flexDirection: !is1000 && "column-reverse" }}>
          <RowBox>
            <Typography sx={{color:"brand.secondary",fontSize:"14px", maxWidth: "500px"}}>

            We’re an LGBTQIA+, BIPOC and FLINTA* friendly space. We’ll always
            prioritize those who are less privileged but everyone who respects
            our values is welcome: DJ newbies, DJs with skills to share, graphic
            designers, videographers, photographers who want to be part of a
            community, etc.Shoot us a message to find out how you can get
            involved.
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
                marginLeft: 2,
                width: is750 ? 500 : "auto",
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
