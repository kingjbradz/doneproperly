import React from "react"
import { useLocation } from "react-router-dom"
import { Box } from "@mui/material"

const DonePropImg = ({ themeMode, noShow }) => {
    const location = useLocation()
    return (
        location.pathname !== "/" &&
        <Box sx={{ marginTop: 8 }}>
            <img 
            style={{ borderRadius: "50%", maxHeight: "75px", maxWidth: "75px", margin: "32px 0", pointerEvents: "none", display: noShow && "none" }}
            src={ themeMode ? "https://d1g9ggdtg3kjm9.cloudfront.net/brandimages/1zu1+website+corner+logo_2.jpeg" : "https://d1g9ggdtg3kjm9.cloudfront.net/brandimages/1zu1+website+corner+logo_.jpeg" } alt="logo"/>
        </Box>
    )
}

export default DonePropImg