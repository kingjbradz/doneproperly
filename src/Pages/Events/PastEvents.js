import React from "react"
import { Box, Grid, useMediaQuery, Typography } from "@mui/material"
import { EventObjects } from "./EventObjects"

const PastEvents = ({ themeMode }) => {
    const is520 = useMediaQuery(" ( min-width: 520px ) ")
    const is1020 = useMediaQuery(" ( min-width: 1020px ) ")

    return (
      <Grid container sx={{ display: "flex", justifyContent: "center", flexDirection: is520 ? "row" : "column", alignItems: "center", marginTop: "1em" }}>
      {EventObjects.map((e, index) => (
        <>
      <Box sx={{ maxWidth: !is520 ? "90%" : "500px", marginBottom: 2, marginRight: is1020 && 2  }}>
        <img src={e.img} alt={e.name} style={{ width: "100%", cursor: "pointer", marginBottom: "8px" }} onClick={() => window.open(e.insta, "_blank")}  />
        <Typography sx={{ color: themeMode ? "brand.primary" : "brand.secondary" }}>{e.name}</Typography>
        <Typography sx={{ color: themeMode ? "brand.primary" : "brand.secondary" }}>{e.date}</Typography>
       </Box>
          </>
      ))}
    </Grid>
    )
}

export default PastEvents
