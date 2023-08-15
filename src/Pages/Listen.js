import React, { useState } from 'react'
import { Box } from "@mui/material"
import { PlaylistButton } from '../Components/Elements'

const Listen = ({ noShow, setNoShow }) => {
  const [state, setState] = useState({
    color: "brown",
    number: "1641758563",
  })

  setNoShow(true)
  
  const playlists = [
    {color: "orange", number: "1664518415"},
    {color: "teal", number: "1654220950"},
    {color: "green", number: "1649647273"},
    {color: "brown", number: "1641758563"},
    {color: "red", number: "1636042186"},
    {color: "purple", number: "1634278516"},
    {color: "violet", number: "1615329022"}
  ]
    
    return (
      <Box sx={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: "100%"  }}>
        <Box sx={{ textAlign: "center", margin: "8px 0" }}>
        {playlists.map((pl) => {
          return (
              <PlaylistButton color={pl.color} numberSet={() => setState({ color: pl.color, number: pl.number})} shadow={state.color === pl.color && true} />
            )
          })}
{          console.log("color", state)}
          </Box>
        <Box sx={{ width: "90%", height: "85%" }}>
          <iframe 
            title="player" 
            width="100%" 
            height="100%" 
            scrolling="no" 
            frameborder="no" 
            allow= "autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${state.number}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
            style={{ borderRadius: "8px", }}
            >
          </iframe>
        </Box>
        <Box></Box>
      </Box>
    )
}

export default Listen