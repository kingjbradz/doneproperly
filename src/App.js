import { useState } from "react"
import { ThemeProvider, Box } from "@mui/material";
import { lightTheme } from "./Components/LightTheme";
import { lightTheme as darkTheme } from "./Components/DarkTheme";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Router from "./Components/Router";

function App() {
  const [themeMode, setThemeMode] = useState(false)
  return ( 
    <ThemeProvider theme={!themeMode ? lightTheme : darkTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Navbar themeMode={themeMode} setThemeMode={setThemeMode} />
        <Router themeMode={themeMode} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
