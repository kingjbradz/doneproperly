import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useMediaQuery,
  Avatar,
  useTheme,
} from "@mui/material";

const navItems = [
  { text: "About", path: "/about" },
  { text: "Contact", path: "/contact" },
  { text: "Impressum", path: "/impressum" },
];

function ToggleColorMode() {
  const [mode, setMode] = (React.useState < "light") | ("dark" > "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
}

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMD = useMediaQuery(" (min-width: 900px) ");
  const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ bgcolor: "black", boxShadow: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMD ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "inherit",
              }}
            >
              <IconButton onClick={colorMode.toggleColorMode}>
                <Brightness4Icon sx={{ color: "white" }} />
              </IconButton>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  marginLeft: 1,
                  minHeight: "inherit",
                }}
              >
                {navItems.map(({ text, path }, index) => {
                  return (
                    <React.Fragment key={text}>
                      <Button
                        onClick={() => navigate(path)}
                        sx={{
                          color:
                            path === location.pathname
                              ? "brand.blorange"
                              : "brand.primary",
                          borderBottom:
                            path === location.pathname
                              ? (theme) =>
                                  `5px solid ${theme.palette.brand.blorange}`
                              : "",
                          borderRadius: 0,
                          marginLeft: 2,
                        }}
                      >
                        {text}
                      </Button>
                    </React.Fragment>
                  );
                })}
              </Box>
            </Box>
          ) : (
            <IconButton sx={{ color: "brand.primary" }}>
              <MenuIcon />
            </IconButton>
          )}
          <Avatar
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            src="https://d1g9ggdtg3kjm9.cloudfront.net/brandimages/unnamed.jpeg"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
