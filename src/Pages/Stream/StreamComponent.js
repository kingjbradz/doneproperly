import React from "react"
import { Box, Typography } from "@mui/material"

const StreamComponent = ({ name, dateVenue, embed, link }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: "350px" }}>
      <Box sx={{ maxWidth: "350px" }}>{embed}</Box>
      <Box
        onClick={() => window.open(link, "_blank")}
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          "&:hover": {
            color: "#9d9b9b",
            cursor: "pointer",
          },
        }}
      >
        <Typography sx={{ marginBottom: 1, fontSize: "1.25rem" }}>{name}</Typography>
        <Typography sx={{ fontSize: ".75rem" }}>{dateVenue}</Typography>
      </Box>
    </Box>
  );
}

export default StreamComponent