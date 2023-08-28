import React from "react"
import { Box, useMediaQuery, Typography } from "@mui/material"

const PastEvents = ({ themeMode }) => {
    const is430 = useMediaQuery(" ( min-width: 430px ) ")
    const [eventsTab, setEventsTab] = React.useState(1)
    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          Past Events
        </Box>
    )
}

export default PastEvents