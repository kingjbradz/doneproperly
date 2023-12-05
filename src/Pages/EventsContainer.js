import React from "react";
import 
{ 
  Box, 
  // useMediaQuery, 
  // Typography, 
  // Button 
} 
  from "@mui/material";
import PastEvents from "./Events/PastEvents";
import UpcomingEvents from "./Events/UpcomingEvents";

const EventsContainer = ({ setNoShow, themeMode }) => {
  const [eventsTab, setEventsTab] = React.useState(2);
  setNoShow(true);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}
      >
        {/* <Button sx={{ color: "brand.logogrey", fontSize: "24px" }} onClick={() => setEventsTab(1)}>Upcoming</Button>
        <Button sx={{ color: "brand.logogrey", fontSize: "24px" }} onClick={() => setEventsTab(2)}>Past</Button> */}
      </Box>
      {eventsTab === 1 ? (
        <UpcomingEvents themeMode={themeMode} />
      ) : (
        <PastEvents themeMode={themeMode} />
      )}
      <Box></Box>
    </Box>
  );
};

export default EventsContainer;
