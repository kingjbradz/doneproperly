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

export const PlaylistButton = ({ color, numberSet, shadow, themeMode  }) => {
  return (
    <IconButton 
      key={color} 
      onClick={numberSet} 
      sx={{ 
        marginRight: 0.5,
        bgcolor: themeMode ?  "brand.secondary" : "brand.primary", 
        boxShadow: shadow && "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" 
        }}>
          <Avatar 
            src={`https://d1g9ggdtg3kjm9.cloudfront.net/sc-website-imgs/${color}.png`} 
            />
        </IconButton>
  )
}