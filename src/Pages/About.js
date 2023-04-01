import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Container } from "../Components/Elements";

const AboutUs = () => {
  const is300 = useMediaQuery("( min-width: 300px )");
  const is750 = useMediaQuery("( min-width: 750px )");
  return (
    <Container
      sx={{
        padding: is750 ? "0 5em" : 2,
        flexDirection: is750 ? "row" : "column",
        justifyContent: "space-evenly",
      }}
    >
      <Box sx={{ display: "flex", margin: is750 ? "0 8px 0 0" : "0 0 8px 0", justifyContent: "center" }}>
        <img src="https://d1g9ggdtg3kjm9.cloudfront.net/brandimages/unnamed.jpeg" style={{ width: "100%" }} />
      </Box>
      <Box sx={{ maxWidth: "300px", textAlign: "center", justifyContent: "center" }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          We're Doing Things Properly
        </Typography>
        <Typography>
          this is text this is text this is text this is text this is text this
          is text this is text this is text this is text this is text this is
          text this is text this is text this is text this is text this is text
          this is text this is text
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
