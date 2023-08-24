import React from "react"
import { useLocation } from "react-router-dom"
import { Box, useMediaQuery } from "@mui/material"

const DonePropImg = ({ themeMode, noShow }) => {
    const isFullScreen = useMediaQuery(" (min-width: 950px) ")
    const location = useLocation()
    return (
        location.pathname !== "/" &&
        <Box sx={{ marginTop: 8 }}>
            <img 
            style={{ borderRadius: "50%", maxHeight: isFullScreen ? "75px" : "35px", maxWidth: isFullScreen ? "75px" : "35px", margin: isFullScreen ?  "32px 0" : "12px 0", pointerEvents: "none", display: noShow && "none" }}
            src={ themeMode ? "https://d1g9ggdtg3kjm9.cloudfront.net/brandimages/1zu1+website+corner+logo_2.jpeg" : "https://d1g9ggdtg3kjm9.cloudfront.net/brandimages/1zu1+website+corner+logo_.jpeg" } alt="logo"/>
        </Box>
    )
}

export default DonePropImg