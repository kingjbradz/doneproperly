import React from "react"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import { Container } from "../Components/Elements"

const Home = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Box onClick={() => navigate("/about")} sx={{ cursor: "pointer" }}>
                <img src="https://d1g9ggdtg3kjm9.cloudfront.net/brandimages/unnamed.jpeg" />
            </Box>
        </Container>
    )
}

export default Home