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
  "@media screen and (min-width: 1000px)": {
    flexDirection: "row",
  },
});

const RowBox = styled(Box)({
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
});

const LeftSpan = styled(Typography)({
  textAlign: "left",
  fontSize: "14px",
  marginLeft: "8px",
})

const AboutUs = ({ themeMode }) => {
  const is1000 = useMediaQuery("( mind-width: 1000px )");
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          overflow: "scroll",
        }}
      >
        <LineBox>
          <RowBox sx={{ margin: 2, marginTop: 0 }}>
            <img src="https://d1g9ggdtg3kjm9.cloudfront.net/2.png" alt="noir" style={{ borderRadius: "10px" }} />
          </RowBox>
          <RowBox>
            <Typography sx={{color:"brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
            Creating DONE PROPERLY has been a passion project of mine for a while. I‘ve learnt to love music but most importantly the scene and I finally get a chance to do my part for the community.
            <br/>
            </Typography>
            <LeftSpan color="brand.secondary">
            <br/>
            <b>NOIR</b> she/her
            <br/>
            DJ & sales queen
            </LeftSpan>
          </RowBox>
        </LineBox>

        <LineBox sx={{ flexDirection: !is1000 && "column-reverse" }}>
          <RowBox>
            <Typography sx={{color:"brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
            I‘m a DJ from Australia, recently arrived in Berlin after living in Tapei, Tokyo, and Vancouver. Lover of disco, techno, breaks, havin‘ a good ol yarn and bringing my years of experience to you.
            <br/>
            </Typography>
            <LeftSpan color="brand.secondary">
            <br/>
            <b>JORDAN</b> he/him
            <br/>
            DJ & web developer
            </LeftSpan>
          </RowBox>
          <RowBox sx={{ margin: 2}}>
          <img src="https://d1g9ggdtg3kjm9.cloudfront.net/1.png" alt="jordan" style={{ borderRadius: "10px" }}  />
          </RowBox>
        </LineBox>

        <LineBox>
          <RowBox sx={{ margin: 2 }}>
          <img src="https://d1g9ggdtg3kjm9.cloudfront.net/3.png" alt="rebecca" style={{ borderRadius: "10px" }}  />
          </RowBox>
          <RowBox>
            <Typography sx={{color:"brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
            Unlike the two others I‘m not a DJ but I have a passion for music and community. And this is where I come into play: everyone has a place at DONE PROPERLY, there‘s so many ways for you to get involved.
            <br/>
            </Typography>
            <LeftSpan color="brand.secondary">
            <br/>
            <b>REBECCA</b> she/they
            <br/>
            not a DJ & creative director
            </LeftSpan>
          </RowBox>
        </LineBox>
      </Stack>
    </>
  );
};

export default AboutUs;
