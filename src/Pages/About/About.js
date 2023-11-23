import React from "react";
import { Typography, useMediaQuery, Stack } from "@mui/material";
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
              <b>DONE PROPERLY</b> IS A QUEER-OWNED MUSIC COLLECTIVE OPERATING IN BERLIN WITH THE OBJECTIVE OF MAKING MUSIC EASILY ACCESSIBLE TO ALL, THROUGH SKILL-SHARING, CREATING DIVERSE PLATFORMS AND EASY ACCESS TO EQUIPMENT.
            </Typography>
          </RowBox>
        </LineBox>
      </Stack>
    </>
  );
};

export default AboutUs;
