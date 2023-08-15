import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Sidebar from "./Sidebar";
import { ThemeModeButton } from "./Elements";
import SocialLinks from "./SocialLinks";
import DonePropImg from "./DonePropImg";

const navItems = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Team", path: "/team" },
  { text: "Events", path: "/events" },
  { text: "Contact", path: "/contact" },
  { text: "Join", path: "https://docs.google.com/forms/d/e/1FAIpQLScTPJWT7WLkgy26xdZnbTxcE8lOrRBWziPr8LY9zrWFiRxhYg/viewform?pli=1" },
  { text: "Listen", path: "/listen" },
  { text: "Impressum", path: "/impressum" },
];

const Navbar = ({ themeMode, setThemeMode, noShow, setNoShow }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMD = useMediaQuery(" (min-width: 950px) ");
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleMode = () => {
    setThemeMode((current) => !current);
  };

  const handleSidebar = () => {
    setSidebarOpen((current) => !current);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CssBaseline />
      <AppBar sx={{ bgcolor: "brand.secondary", boxShadow: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMD ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "inherit",
              }}
            >
              <ThemeModeButton themeMode={themeMode} handleMode={handleMode} />
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
                        onClick={() => 
                          path.includes("https") ? 
                          window.open(path, "_blank")
                          : 
                          navigate(path)
                          }
                        sx={{
                          color:
                            path === location.pathname
                              ? "brand.logogrey"
                              : "brand.primary",
                          borderBottom:
                            path === location.pathname
                              ? (theme) =>
                                  `5px solid ${theme.palette.brand.logogrey}`
                              : "",
                          borderRadius: 0,
                          marginLeft: 2,
                          fontWeight: 700
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
            <Box>
              <IconButton
                sx={{
                  color: "brand.primary",
                  maxWidth: "40px",
                  display: "flex",
                  justifyContent: "unset",
                }}
                onClick={handleSidebar}
              >
                <MenuIcon />
              </IconButton>
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                handleSidebar={handleSidebar}
                navItems={navItems}
                theme={theme}
                location={location}
                navigate={navigate}
                setThemeMode={setThemeMode}
                themeMode={themeMode}
              />
            </Box>
          )}
          {isMD && <SocialLinks /> }
        </Toolbar>
      </AppBar>
      <DonePropImg themeMode={themeMode} noShow={noShow} />
    </Box>
  );
};

export default Navbar;
