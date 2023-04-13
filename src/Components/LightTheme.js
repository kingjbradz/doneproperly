import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        brand: {
            primary: "#FFFEFE",
            secondary: "#000001",
            blorange: "#AB4F46",
            neopink: "#E274E7",
            neoyellow: "#DCF45C",
            lineblue: "#3C67D1",
            outline: "#3C67D1",
        },
        outline: {
            main: "#3C67D1"
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                
            }
        },
    },
    typography: {
       
    }
})