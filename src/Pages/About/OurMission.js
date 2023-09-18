import React from "react";
import { Typography } from "@mui/material";
import { LineBox, RowBox } from "../../Components/Elements";



const OurMission = ({ themeMode }) => {
  // const is1000 = useMediaQuery("( min-width: 1000px )");
  return (
    <>
      <LineBox sx={{ alignItems: "center" }}>
        <RowBox>
          <Typography
            sx={{
              color: "brand.secondary",
              fontSize: "14px",
              maxWidth: "730px !important"
            }}
          >
            The music scene, done properly. We believe music belongs to everyone and everyone belongs to music. We bring opportunities, skill, and knowledge to anyone who might struggle to find resources to learn how to DJ. Our collective also gives a platform and a community to DJs across all genres, no matter who you are, and therefore creating more spaces for people within the music industry to thrive and belong.
            <br /><br />
            Besides that, we believe accessibility and equal pay are necessary to make sure that the music industry is able to bloom. The point is not to change the way we experience the music scene, but to make sure it is fair and stabilised.
          </Typography>
        </RowBox>
      </LineBox>
    </>
  );
};

export default OurMission;
