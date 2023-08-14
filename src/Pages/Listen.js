import React, { useState } from 'react'
import { Box, useMediaQuery, Button } from "@mui/material"

const Listen = ({noShow, setNoShow}) => {
  const is780 = useMediaQuery("(min-width:780px)")
  const [color, setColor] = useState({
    color: "orange",
    number: "1664518415"
  })

  setNoShow(true)
  
  const playlists = [
    {color: "orange", number: "1664518415"},
    {color: "teal", number: "1654220950"}
  ]
    
    return (
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", flexDirection: "column", justifyContent: "space-between", alignItems: "center"  }}>
        {playlists.map((pl) => {
          return (
            <Button key={pl.number} onClick={() => setColor({ color: pl.color, number: pl.number  })}>{pl.color}</Button>
            )
        })}
        <Box sx={{ width: is780 ? "90%" : "50%", }}>
          <iframe 
            title="player" 
            width="100%" 
            height={is780 ? 300 : 500} 
            scrolling="no" 
            frameborder="no" 
            allow= "autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${color.number}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
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
          <a href={`https://soundcloud.com/doneproperlyberlin/sets/{color.color}`} title={color.color.toUpperCase()} target="_blank" rel="noreferrer" style={{color: "#cccccc", textDecoration: "none"}}>{color.color.toUpperCase()}</a>
          </div>
        </Box>
        <Box></Box>
      </Box>
    )
}

{/*<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1654220950&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/doneproperlyberlin" title="doneproperlyberlin" target="_blank" style="color: #cccccc; text-decoration: none;">doneproperlyberlin</a> · <a href="https://soundcloud.com/doneproperlyberlin/sets/teal" title="TEAL" target="_blank" style="color: #cccccc; text-decoration: none;">TEAL</a></div>*/}

export default Listen