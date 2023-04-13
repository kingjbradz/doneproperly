import React from "react"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import { Container } from "../Components/Elements"

const Home = ({ themeMode }) => {
    const navigate = useNavigate()
    return (
        <Container>
            <Box onClick={() => navigate("/about")} sx={{ cursor: "pointer" }}>
               {
                !themeMode ? 
                <img src="https://d1g9ggdtg3kjm9.cloudfront.net/DP+logo_mail.png" style={{ width: "268px" }} alt="img" />
                :
                <img src="https://d1g9ggdtg3kjm9.cloudfront.net/brandimages/unnamed.jpeg" alt="img" />
               } 
            </Box>
        </Container>
    )
}

export default Home