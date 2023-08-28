import React from "react";
import { Box, Typography, useMediaQuery, Stack, IconButton, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { Icon } from "@iconify/react"

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
  textAlign: "left",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "8px"
});

const LeftSpan = styled(Typography)({
  textAlign: "left",
  fontSize: "14px",
})

const RightSpan = styled(LeftSpan)({
  "@media screen and (min-width: 1000px)": {
    textAlign: "right",
    fontSize: "14px",
    marginLeft: 0
  }
})

const AboutUs = ({ themeMode }) => {
  const theme = useTheme()
  const is1000 = useMediaQuery("( min-width: 1000px )");
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <LineBox>
          <RowBox sx={{ margin: 2, marginTop: 0 }}>
            <img src="https://d1g9ggdtg3kjm9.cloudfront.net/2.png" alt="noir" style={{ borderRadius: "10pX", width: "100%" }} />
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
            founder & DJ
            <br />
            <IconButton onClick={() => window.open("https://www.instagram.com/noirleona/", "_blank")} style={{ padding: 0, width: 16, marginRight: 5 }}><Icon icon="mdi:instagram" color={theme.palette.brand.secondary} /></IconButton>
            <IconButton onClick={() => window.open("https://soundcloud.com/leona-clayton", "_blank")} style={{ padding: 0, width: 16 }}><Icon icon="mdi:soundcloud" color={theme.palette.brand.secondary} /></IconButton>
            </LeftSpan>
          </RowBox>
        </LineBox>

        <LineBox sx={{ flexDirection: !is1000 && "column-reverse" }}>
          <RowBox sx={{ textAlign: is1000 && "right", marginRight: is1000 && 1 }}>
            <Typography sx={{color:"brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
            I‘m a DJ from Australia, recently arrived in Berlin after living in Tapei, Tokyo, and Vancouver. Lover of disco, techno, breaks, havin‘ a good ol yarn and bringing my years of experience to you.
            <br/>
            </Typography>
            <RightSpan color="brand.secondary">
            <br/>
            <b>JORDAN</b> he/him
            <br/>
            co-founder, DJ & tech dude
            <br />
            <IconButton onClick={() => window.open("https://www.instagram.com/kingjbradz/", "_blank")} style={{ padding: 0, width: 16, marginRight: 5 }}><Icon icon="mdi:instagram" color={theme.palette.brand.secondary} /></IconButton>
            <IconButton onClick={() => window.open("https://soundcloud.com/jbradztyo", "_blank")} style={{ padding: 0, width: 16, marginRight: 5 }}><Icon icon="mdi:soundcloud" color={theme.palette.brand.secondary} /></IconButton>
            <IconButton onClick={() => window.open("https://www.mixcloud.com/jbradz/", "_blank")} style={{ padding: 0, width: 16 }}><Icon icon="mdi:mixcloud" color={theme.palette.brand.secondary} /></IconButton>
            </RightSpan>
          </RowBox>
          <RowBox sx={{ margin: 2}}>
          <img src="https://d1g9ggdtg3kjm9.cloudfront.net/1.png" alt="jordan" style={{ borderRadius: "10pX", width: "100%" }}  />
          </RowBox>
        </LineBox>

        <LineBox>
          <RowBox sx={{ margin: 2 }}>
          <img src="https://d1g9ggdtg3kjm9.cloudfront.net/3.png" alt="rebecca" style={{ borderRadius: "10pX", width: "100%" }}  />
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
            co-founder, not a DJ & creative manager
            <br/>
            <IconButton onClick={() => window.open("https://www.instagram.com/miirjaa/", "_blank")} style={{ padding: 0, width: 16 }}><Icon icon="mdi:instagram" color={theme.palette.brand.secondary} /></IconButton>
            </LeftSpan>
          </RowBox>
        </LineBox>

        <LineBox sx={{ flexDirection: !is1000 && "column-reverse" }}>
          <RowBox sx={{ textAlign: is1000 && "right", marginRight: is1000 && 1 }}>
            <Typography sx={{color:"brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
            I’m an interdisciplinary art director and 3D artist based in Berlin. Working in the field of visual communication with a strong focus on CGI and motion design, I‘m very happy to support DONE PROPERLY with my knowledge.
            <br/>
            </Typography>
            <RightSpan color="brand.secondary">
            <br/>
            <b>ANNA</b> she/her
            <br/>
            not a DJ & visual communication
            <br/>
            <IconButton onClick={() => window.open("https://www.instagram.com/annamialuisa/", "_blank")} style={{ padding: 0, width: 16 }}><Icon icon="mdi:instagram" color={theme.palette.brand.secondary} /></IconButton>
            </RightSpan>
          </RowBox>
          <RowBox sx={{ margin: 2 }}>
          <img src="https://d1g9ggdtg3kjm9.cloudfront.net/anna_dbpphoto.png" alt="rebecca" style={{ borderRadius: "10pX", width: "100%" }}  />
          </RowBox>
        </LineBox>

        <LineBox>
          <RowBox sx={{ margin: 2 }}>
          <img src="https://d1g9ggdtg3kjm9.cloudfront.net/jimmy_dpbphoto.png" alt="rebecca" style={{ borderRadius: "10pX", width: "100%" }}  />
          </RowBox>
          <RowBox>
            <Typography sx={{color:"brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
            Escaping the mediocrity of the corporate US EDM hellscape, I came to Berlin to find fellowship amongst likeminded people. This is exactly why I joined DP to not just integrate within the community but make a difference within the music scene locally and globally.
            <br/>
            </Typography>
            <LeftSpan color="brand.secondary">
            <br/>
            <b>JIMMY</b> he/they
            <br/>
            DJ & team member
            <br/>
            <IconButton onClick={() => window.open("https://www.instagram.com/general_whatever", "_blank")} style={{ padding: 0, width: 16 }}><Icon icon="mdi:instagram" color={theme.palette.brand.secondary} /></IconButton>
            </LeftSpan>
          </RowBox>
        </LineBox>
      </Stack>
    </>
  );
};

export default AboutUs;
