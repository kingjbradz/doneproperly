import React from "react"
import { Icon } from "@iconify/react"
import { IconButton, Box, useTheme } from "@mui/material"

const SocialLinks = () => {
    const theme = useTheme()
    return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton onClick={() => window.location.href = "https://www.instagram.com/doneproperlyberlin/"}><Icon icon="mdi:instagram" color={theme.palette.brand.primary} /></IconButton>
        <IconButton onClick={() => window.location.href = "https://www.tiktok.com/@done_properly"}><Icon icon="ic:baseline-tiktok" color={theme.palette.brand.primary} /></IconButton>
        <IconButton onClick={() => window.location.href = "https://soundcloud.com/doneproperlyberlin"}><Icon icon="mdi:soundcloud" color={theme.palette.brand.primary} /></IconButton>
    </Box>
    )
}

export default SocialLinks