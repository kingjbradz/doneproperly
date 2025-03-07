import React from "react";
import { Box, Typography, Stack, IconButton, useTheme } from "@mui/material";
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

const AboutUs = ({ themeMode }) => {
  const theme = useTheme()
  // const is1000 = useMediaQuery("( min-width: 1000px )");
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <LineBox>
          <RowBox sx={{ margin: 2, marginTop: 2, maxWidth: "230px" }}>
            <img src="https://d1g9ggdtg3kjm9.cloudfront.net/teamphotos/noir_dpbphoto.png" alt="noir" style={{  width: "100%" }} />
          </RowBox>
          <RowBox>
            <Typography sx={{color: themeMode ? "brand.primary" : "brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
            Creating DONE PROPERLY has been a passion project of mine for a while. I‘ve learnt to love music but most importantly the scene and I finally get a chance to do my part for the community.
            <br/>
            </Typography>
            <LeftSpan color={themeMode ? "brand.primary" : "brand.secondary"}>
            <br/>
            <b>NOIR</b> she/her
            <br/>
            Founder & DJ
            <br />
            <IconButton onClick={() => window.open("https://www.instagram.com/noirleona/", "_blank")} style={{ padding: 0, width: 16, marginRight: 5 }}><Icon icon="mdi:instagram" color={themeMode ? theme.palette.brand.primary : theme.palette.brand.secondary} /></IconButton>
            <IconButton onClick={() => window.open("https://soundcloud.com/leona-clayton", "_blank")} style={{ padding: 0, width: 16 }}><Icon icon="mdi:soundcloud" color={themeMode ? theme.palette.brand.primary : theme.palette.brand.secondary} /></IconButton>
            </LeftSpan>
          </RowBox>
        </LineBox>

        <LineBox>
          <RowBox sx={{ margin: 2, maxWidth: "230px" }}>
          <img src="https://d1g9ggdtg3kjm9.cloudfront.net/teamphotos/jordan_dpbphoto.png" alt="jordan" style={{  width: "100%" }}  />
          </RowBox>
          <RowBox>
            <Typography sx={{color: themeMode ? "brand.primary" : "brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
            I‘m a DJ from Australia, living in between NYC and Berlin after living in Tapei, Tokyo, and Vancouver. Lover of disco, techno, breaks, havin‘ a good ol yarn and bringing my years of experience to you.
            <br/>
            </Typography>
            <LeftSpan color={themeMode ? "brand.primary" : "brand.secondary"}>
            <br/>
            <b>JORDAN</b> he/him
            <br/>
            Co-Founder, DJ & Tech Dude
            <br />
            <IconButton onClick={() => window.open("https://www.instagram.com/kingjbradz/", "_blank")} style={{ padding: 0, width: 16, marginRight: 5 }}><Icon icon="mdi:instagram" color={themeMode ? theme.palette.brand.primary : theme.palette.brand.secondary} /></IconButton>
            <IconButton onClick={() => window.open("https://soundcloud.com/jbradztyo", "_blank")} style={{ padding: 0, width: 16, marginRight: 5 }}><Icon icon="mdi:soundcloud" color={themeMode ? theme.palette.brand.primary : theme.palette.brand.secondary} /></IconButton>
            <IconButton onClick={() => window.open("https://www.mixcloud.com/jbradz/", "_blank")} style={{ padding: 0, width: 16 }}><Icon icon="mdi:mixcloud" color={themeMode ? theme.palette.brand.primary : theme.palette.brand.secondary} /></IconButton>
            </LeftSpan>
          </RowBox>
        </LineBox>

        <LineBox>
          <RowBox sx={{ margin: 2, maxWidth: "230px" }}>
          <img src="https://d1g9ggdtg3kjm9.cloudfront.net/teamphotos/rebecca_dpbphoto.png" alt="rebecca" style={{  width: "100%" }}  />
          </RowBox>
          <RowBox>
            <Typography sx={{color: themeMode ? "brand.primary" : "brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
            Unlike the two others I‘m not a DJ but I have a passion for music and community. And this is where I come into play: everyone has a place at DONE PROPERLY, there‘s so many ways for you to get involved.
            <br/>
            </Typography>
            <LeftSpan color={themeMode ? "brand.primary" : "brand.secondary"}>
            <br/>
            <b>REBECCA</b> she/they
            <br/>
            Co-Founder, Not a DJ & Creative Manager
            <br/>
            <IconButton onClick={() => window.open("https://www.instagram.com/miirjaa/", "_blank")} style={{ padding: 0, width: 16 }}><Icon icon="mdi:instagram" color={themeMode ? theme.palette.brand.primary : theme.palette.brand.secondary} /></IconButton>
            </LeftSpan>
          </RowBox>
        </LineBox>

        <LineBox>
          <RowBox sx={{ margin: 2, maxWidth: "230px" }}>
          <img src="https://d1g9ggdtg3kjm9.cloudfront.net/teamphotos/anna_dbpphoto.png" alt="anna" style={{  width: "100%" }}  />
          </RowBox>
          <RowBox>
            <Typography sx={{color: themeMode ? "brand.primary" : "brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
            I’m an interdisciplinary art director and 3D artist based in Berlin. Working in the field of visual communication with a strong focus on CGI and motion design, I‘m very happy to support DONE PROPERLY with my knowledge.
            <br/>
            </Typography>
            <LeftSpan color={themeMode ? "brand.primary" : "brand.secondary"}>
            <br/>
            <b>ANNA</b> she/her
            <br/>
            Not a DJ & Graphic Designer
            <br/>
            <IconButton onClick={() => window.open("https://www.instagram.com/annamialuisa/", "_blank")} style={{ padding: 0, width: 16 }}><Icon icon="mdi:instagram" color={themeMode ? theme.palette.brand.primary : theme.palette.brand.secondary} /></IconButton>
            </LeftSpan>
          </RowBox>
        </LineBox>

        <LineBox>
          <RowBox sx={{ margin: 2, maxWidth: "230px" }}>
          <img src="https://d1g9ggdtg3kjm9.cloudfront.net/teamphotos/pep_dpbphoto.png" alt="pepijn" style={{  width: "100%" }}  />
          </RowBox>
          <RowBox>
            <Typography sx={{color: themeMode ? "brand.primary" : "brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
            Creative toolkit based in Rotterdam, including: Bright colors, flashy shapes, rose-tinted glasses and hint of glitter. Here to help people connect with the mixture of music and other forms of art.
            <br/>
            </Typography>
            <LeftSpan color={themeMode ? "brand.primary" : "brand.secondary"}>
            <br/>
            <b>PEPIJN</b> he/they
            <br/>
            Not a DJ & Graphic Designer
            <br/>
            <IconButton onClick={() => window.open("https://www.instagram.com/pepijnbram", "_blank")} style={{ padding: 0, width: 16 }}><Icon icon="mdi:instagram" color={themeMode ? theme.palette.brand.primary : theme.palette.brand.secondary} /></IconButton>
            </LeftSpan>
          </RowBox>
        </LineBox>

        <LineBox>
          <RowBox sx={{ margin: 2, maxWidth: "230px" }}>
          <img src="https://d1g9ggdtg3kjm9.cloudfront.net/teamphotos/sia_dpbphoto.png" alt="sia" style={{  width: "100%" }}  />
          </RowBox>
          <RowBox>
            <Typography sx={{color: themeMode ? "brand.primary" : "brand.secondary",fontSize:"14px", maxWidth: "500px"}}>
              Accessibility to opportunities has been a pivotal theme in my life and practice. While the creative scene can feel and act hostile to newcomers, who in fact need support the most, I believe it can and should be different.
              <br/>
              I find it beautiful when people learn and grow together through intuitive experimentation and exchange of experience.
            <br/>
            </Typography>
            <LeftSpan color={themeMode ? "brand.primary" : "brand.secondary"}>
            <br/>
            <b>SIA</b> she/her
            <br/>
            Not a DJ & Graphic Designer
            <br/>
            <IconButton onClick={() => window.open("https://www.instagram.com/d.e.sia", "_blank")} style={{ padding: 0, width: 16 }}><Icon icon="mdi:instagram" color={themeMode ? theme.palette.brand.primary : theme.palette.brand.secondary} /></IconButton>
            </LeftSpan>
          </RowBox>
        </LineBox>

      </Stack>
    </>
  );
};

export default AboutUs;
