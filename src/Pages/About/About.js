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
            <Typography
              variant="h4"
              sx={{
                color: "brand.secondary",
                width: is750 ? 750 : "auto",
                marginBottom: !is1000 && 2,
              }}
            >
              WE ARE A QUEER OWNED BERLIN-BASED DJ COLLECTIVE BRINGING MUSIC BACK TO THE PEOPLE THROUGH SKILL SHARING, PROPER EQUIPMENT, AND COMMUNITY.
            </Typography>
          </RowBox>
        </LineBox>
      </Stack>
    </>
  );
};

export default AboutUs;
