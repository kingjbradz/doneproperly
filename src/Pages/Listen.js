import React, { useState } from 'react'
import { Box, useMediaQuery } from "@mui/material"

const Listen = () => {
  const [color, setColor] = React.useState({
    color: "orange"
  })

  
  const is780 = useMediaQuery("(max-width:779px)")
    return (
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%",  }}>
        <Box sx={{ width: is780 ? "90%" : "50%", }}>
          <iframe 
            title="player" 
            width="100%" 
            height={is780 ? 300 : 500} 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1664518415&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            style={{ borderRadius: "8px", }}
            >
          </iframe>
          <div style={{
            
            fontSize: "10px", 
            color: "#cccccc",
            lineBreak:" anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis", 
            fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
            fontWeight: "100"
          }}>
          <a href="https://soundcloud.com/doneproperlyberlin" title="doneproperlyberlin" target="_blank" rel="noreferrer" style={{color: "#cccccc", textDecoration: "none"}}>doneproperlyberlin
          </a> · 
          <a href="https://soundcloud.com/doneproperlyberlin/sets/orange" title="ORANGE" target="_blank" rel="noreferrer" style={{color: "#cccccc", textDecoration: "none"}}>ORANGE</a>
          </div>
        </Box>
      </Box>
    )
}

export default Listen