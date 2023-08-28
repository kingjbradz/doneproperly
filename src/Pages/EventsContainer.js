import React from "react"
import { Box, useMediaQuery, Typography, Button } from "@mui/material"
import PastEvents from "./Events/PastEvents"
import UpcomingEvents from "./Events/UpcomingEvents"

const EventsContainer = ({ setNoShow, themeMode }) => {
    const is430 = useMediaQuery(" ( min-width: 430px ) ")
    const [eventsTab, setEventsTab] = React.useState(1)
    setNoShow(true)
    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Button onClick={() => setEventsTab(1)}>Upcoming</Button>
            <Button onClick={() => setEventsTab(2)}>Past</Button>
          </Box>
            { eventsTab === 1 ? <UpcomingEvents themeMode={themeMode} /> : <PastEvents themeMode={themeMode} /> }
            {/* <Typography variant="h4" sx={{ marginTop: 0, marginBottom: 2, color: "brand.secondary" }}>Upcoming Events</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
                <img
                    alt="event flyer" 
                    style={{ maxWidth: !is430 ? "90%" : "390px", cursor: "pointer" }} 
                    src="https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vNzI5MTE1NzBlNDc3NzJkNWZjZTYyMzBiZWMyZjdmMTZiMDYxYWNlOC5qcGc=" 
                    onClick={() => window.open("https://ra.co/events/1743769", "_blank")}
                />
            </Box> */}
        </Box>
    )
}

export default EventsContainer