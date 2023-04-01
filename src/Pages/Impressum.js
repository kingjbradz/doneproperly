import React from "react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { styled } from "@mui/system"
import { Container } from "../Components/Elements"

const SpaceBetweenBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "16px",
    "@media screen and (max-width: 599px)": {
        flexDirection: "column",
        textAlign: "center"
    }
})

const Impressum = () => {
    const is600 = useMediaQuery("( min-width: 600px )")
    return (
       <Container sx={{ flexDirection: "column" }}>
        <Typography variant="h4" >Impressum</Typography>
        <Box sx={{ width: is600 ? "50%" : "auto", marginTop: 3 }}>
        <SpaceBetweenBox>
            <Typography>Company Name</Typography>
            <Typography>Done Properly</Typography>
        </SpaceBetweenBox>
        <SpaceBetweenBox>
            <Typography>Address</Typography>
            <Typography>This Address</Typography>
        </SpaceBetweenBox>
        <SpaceBetweenBox>
            <Typography>Email</Typography>
            <Typography>This Email</Typography>
        </SpaceBetweenBox>
            </Box> 
       </Container>
    )
}

export default Impressum