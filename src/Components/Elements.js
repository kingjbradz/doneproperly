import React from "react"
import { Box, IconButton } from "@mui/material"
import { styled } from "@mui/system"
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const Container = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

export const ThemeModeButton = ({ themeMode, handleMode }) => {

    return (
        <IconButton onClick={handleMode}>
                {!themeMode ? (
                  <Brightness4Icon sx={{ color: "brand.primary" }} />
                ) : (
                  <Brightness7Icon sx={{ color: "brand.primary" }} />
                )}
        </IconButton>
    )
}