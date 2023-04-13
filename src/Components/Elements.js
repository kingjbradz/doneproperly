import React from "react"
import { Box, IconButton, Avatar, useTheme } from "@mui/material"
import { styled } from "@mui/system"

export const Container = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

export const ThemeModeButton = ({ themeMode, handleMode }) => {
    const theme = useTheme()
    return (
        <IconButton onClick={handleMode}>
          <Avatar 
            src="https://d1g9ggdtg3kjm9.cloudfront.net/DP_logo_mail-removebg-preview.png" 
            sx={{ 
              bgcolor: !themeMode ? "brand.primary" : "brand.secondary",
              outline: themeMode && `1px solid ${theme.palette.brand.primary}`
              }} 
            />
        </IconButton>
    )
}