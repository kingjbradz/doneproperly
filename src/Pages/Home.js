import React from "react"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import { Container } from "../Components/Elements"
import LoopingAnimationWhite from "../Components/LoopingAnimationWhite"
import LoopingAnimationBlack from "../Components/LoopingAnimationBlack"

const Home = ({ themeMode }) => {
    const navigate = useNavigate()
    return (
        <Container>
            <Box onClick={() => navigate("/about")} sx={{ cursor: "pointer" }}>
               {
                !themeMode ? 
                <LoopingAnimationWhite />
                :
                <LoopingAnimationBlack />
               } 
            </Box>
        </Container>
    )
}

export default Home

// https://dpbimg.s3.eu-central-1.amazonaws.com/moving_logo/1_mbps/done_properly_230413-b_1.mp4
// https://dpbimg.s3.eu-central-1.amazonaws.com/moving_logo/1_mbps/done_properly_230413-w_1.mp4