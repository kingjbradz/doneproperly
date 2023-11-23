import React from "react"
import { useMediaQuery } from "@mui/material"
import LoopingAnimationBlack from "./LoopingAnimationBlack"
import LoopingGifBlack from "./LoopingGifBlack"

const LoopingAnimationBlackCont = () => {
    const is740 = useMediaQuery(" ( min-width: 740px ) ")
    return (
        is740 ? <LoopingAnimationBlack /> : <LoopingGifBlack />
    )
}

export default LoopingAnimationBlackCont