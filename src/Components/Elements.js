import React from "react"
import { Box, IconButton, Avatar } from "@mui/material"
import { styled } from "@mui/system"

export const Container = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

export const ThemeModeButton = ({ themeMode, handleMode }) => {
    return (
        <IconButton onClick={handleMode}>
          <Avatar 
            src={ !themeMode ? "https://d1g9ggdtg3kjm9.cloudfront.net/brandimages/1zu1+website+corner+logo_2.jpeg" : "https://d1g9ggdtg3kjm9.cloudfront.net/brandimages/1zu1+website+corner+logo_.jpeg" } 
            sx={{ 
              bgcolor: !themeMode ? "brand.primary" : "brand.secondary",
              }} 
            />
        </IconButton>
    )
}