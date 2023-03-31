import React from "react";
import { useNavigate } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  useMediaQuery,
  Avatar
} from "@mui/material";

const navItems = [
    {text: "About", path: "/about"},
    {text: "Contact", path: "/contact"},
    {text: "Impressum", path: "/impressum"}
]
const Navbar = () => {
  const navigate = useNavigate()
  const isMD = useMediaQuery(" (min-width: 900px) ")
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ bgcolor: "black", boxShadow: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
        { isMD ? 
            <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
                <Brightness4Icon sx={{ color: "white" }} />
            </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" }, marginLeft: 1 }}>
            {navItems.map(({ text, path }, index) => (
                <Button onClick={() => navigate(path)} sx={{  }}>
                {text}
              </Button>
            ))}
          </Box>
            </Box>
        : 
        <IconButton>
            <MenuIcon />
        </IconButton>  
        }
        <Avatar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
