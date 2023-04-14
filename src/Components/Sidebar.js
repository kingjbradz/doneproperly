import React from "react";
import { Drawer, Button, Box, IconButton } from "@mui/material";
import { ThemeModeButton } from "./Elements";
import CloseIcon from '@mui/icons-material/Close';
import SocialLinks from "./SocialLinks";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  handleSidebar,
  themeMode,
  navItems,
  theme,
  location,
  navigate,
  setThemeMode
}) => {
  const drawerWidth = "240px";

  const handleMode = () => {
    setThemeMode((current) => !current);
  };

  const handleMobileRoute = (v) => {
    navigate(v)
    setSidebarOpen(false)
  }
  return (
    <Drawer
      variant="temporary"
      open={sidebarOpen}
      onClose={handleSidebar}
      PaperProps={{
        sx: {
          border: "none",
          width: drawerWidth,
          overflowX: "hidden",
          bgcolor: "brand.secondary",
        },
      }}
      sx={{ width: drawerWidth, flexShrink: 0, marginRight: "5px" }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <IconButton onClick={() => setSidebarOpen(false)} sx={{ color: "brand.primary", marginRight: 1 }}>
          <CloseIcon />
        </IconButton>
        <ThemeModeButton themeMode={themeMode} handleMode={handleMode} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: 5 }}>
        {navItems.map(({ text, path }, index) => {
          return (
            <React.Fragment key={text}>
              <Button
                onClick={() => handleMobileRoute(path)}
                sx={{
                  color:
                    path === location.pathname
                      ? "brand.logogrey"
                      : "brand.primary",
                  borderBottom:
                    path === location.pathname
                      ? (theme) => `5px solid ${theme.palette.brand.logogrey}`
                      : `1px solid ${theme.palette.brand.primary}`,
                  borderRadius: 0,
                  fontWeight: 700
                }}
              >
                {text}
              </Button>
            </React.Fragment>
          );
        })}
        <SocialLinks />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
