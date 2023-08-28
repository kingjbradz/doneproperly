import React from "react"
import { Box, useMediaQuery, Typography, Dialog } from "@mui/material"
import { EventObjects } from "./EventObjects"

const PastEvents = ({ themeMode }) => {
    const is520 = useMediaQuery(" ( min-width: 520px ) ")
    const [openIndex, setOpenIndex] = React.useState(-1);

    const handleClickOpen = (index) => {
        setOpenIndex(index);
    };
  
    const handleClose = () => {
        setOpenIndex(-1);
    };

    return (
      <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      {EventObjects.map((e, index) => (
        <>
      <Box sx={{ maxWidth: !is520 ? "90%" : "500px", marginBottom: 2  }}>
        <img src={e.img} alt={e.name} style={{ width: "100%", borderRadius: "16px", cursor: "pointer" }} onClick={() => handleClickOpen(index)}  />
       </Box>
        <Dialog open={openIndex === index} onClose={handleClose}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 2 }}> 
          <Typography sx={{ marginBottom: 1.5 }}>
           {e.name}
          </Typography>
          <Typography sx={{ marginBottom: 1.5 }}>
            {e.date}
          </Typography>
          <Typography sx={{ marginBottom: 1.5 }}>
            {e.info}
          </Typography>
          </Box>
        </Dialog>
          </>
      ))}
    </Box>
    )
}

export default PastEvents