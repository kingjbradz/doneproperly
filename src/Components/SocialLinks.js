import React from "react"
import { Icon } from "@iconify/react"
import { IconButton, Box, useTheme } from "@mui/material"

const SocialLinks = () => {
    const theme = useTheme()
    return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton onClick={() => window.open("https://www.instagram.com/doneproperlyberlin/", "_blank")}><Icon icon="mdi:instagram" color={theme.palette.brand.primary} /></IconButton>
        <IconButton onClick={() => window.open("https://soundcloud.com/doneproperlyberlin", "_blank")}><Icon icon="mdi:soundcloud" color={theme.palette.brand.primary} /></IconButton>
    </Box>
    )
}

export default SocialLinks