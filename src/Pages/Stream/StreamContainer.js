import React from "react";
import { Box, Grid } from "@mui/material";
import StreamComponent from "./StreamComponent";
import { StreamInstances } from "./StreamInstances";

const StreamContainer = () => {
  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 4,
    }}>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "75%"
        }}
      >
        {StreamInstances.map(({ name, dateVenue, embed, link }) => {
          return (
            <StreamComponent
              name={name}
              dateVenue={dateVenue}
              embed={embed}
              link={link}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default StreamContainer;
