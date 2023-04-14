import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, } from "@mui/material"
import { Container } from "../Components/Elements"
import LoopingAnimationWhiteCont from "../Components/LoopingAnimationWhiteCont"
import LoopingAnimationBlackCont from "../Components/LoopingAnimationBlackCont"

const Home = ({ themeMode }) => {
    const navigate = useNavigate()
    return (
        <Container>
            <Box onClick={() => navigate("/about")} sx={{ cursor: "pointer" }}>
               {
                !themeMode ? 
                <LoopingAnimationWhiteCont />
                :
                <LoopingAnimationBlackCont />
               } 
            </Box>
        </Container>
    )
}

export default Home