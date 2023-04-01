import React from "react"
import { Box, IconButton, useTheme} from "@mui/material"
import { Icon } from '@iconify/react'


const Footer = () => {
    const theme = useTheme()
    return (
       <Box sx={{ width: "100%", bgcolor: "black", height: "40px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton onClick={() => window.location.href = "https://www.instagram.com/doneproperlyberlin/"}><Icon icon="mdi:instagram" color={theme.palette.brand.primary} /></IconButton>
            <IconButton onClick={() => window.location.href = "https://www.tiktok.com/@done_properly"}><Icon icon="ic:baseline-tiktok" color={theme.palette.brand.primary} /></IconButton>
            <IconButton onClick={() => window.location.href = "https://soundcloud.com/doneproperlyberlin"}><Icon icon="mdi:soundcloud" color={theme.palette.brand.primary} /></IconButton>
        </Box>
       </Box>
    )
}

export default Footer