import React from "react"
import { useMediaQuery } from "@mui/material"
import LoopingAnimationWhite from "./LoopingAnimationWhite"
import LoopingGifWhite from "./LoopingGifWhite"

const LoopingAnimationWhiteCont = () => {
    const is740 = useMediaQuery(" ( min-width: 740px ) ")
    return (
        is740 ? <LoopingAnimationWhite /> : <LoopingGifWhite />
    )
}

export default LoopingAnimationWhiteCont