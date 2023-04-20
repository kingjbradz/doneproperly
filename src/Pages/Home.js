import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, useMediaQuery } from "@mui/material"
import { Container } from "../Components/Elements"
import LoopingAnimationWhiteCont from "../Components/LoopingAnimationWhiteCont"
import LoopingAnimationBlackCont from "../Components/LoopingAnimationBlackCont"

const Home = ({ themeMode }) => {
    const navigate = useNavigate()
    const is740 = useMediaQuery("( min-width: 740px )")
    return (
        <Container>
            <Box onClick={() => navigate("/about")} sx={{ cursor: "pointer", maxWidth: is740 ? "initial" : "80%" }}>
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