import React from "react"
import { Box } from "@mui/material"
import StreamComponent from "./StreamComponent"
import { StreamInstances } from "./StreamInstances"


const StreamContainer = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 4 }}>
      {StreamInstances.map(({name, dateVenue, embed, link}) => {
        return (
          <StreamComponent name={name} dateVenue={dateVenue} embed={embed} link={link} />
        )
      })}
    </Box>
  )
}

export default StreamContainer