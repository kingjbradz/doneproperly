import { ThemeProvider, Box } from '@mui/material';
import { materialTheme } from './Components/Theme';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Router from './Components/Router';

function App() {
  return (
    <ThemeProvider theme={materialTheme}>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Navbar />
      <Router />
      <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
