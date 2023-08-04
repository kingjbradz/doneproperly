import React from "react"
import { Box } from "@mui/material"

const Events = () => {
    return (
        <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <h2 style={{ marginTop: 0 }}>Upcoming Events</h2>
            <Box sx={{maxWidth: "50%"}}>
                <a href="https://ra.co/events/1743769" target="_blank" rel="noreferrer"><img alt="event flyer" style={{maxWidth: "390px"}} src="https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vNzI5MTE1NzBlNDc3NzJkNWZjZTYyMzBiZWMyZjdmMTZiMDYxYWNlOC5qcGc=" /></a>
            </Box>
        </Box>
    )
}

export default Events