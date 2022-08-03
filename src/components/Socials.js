import React from "react"
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';

const youtubeButton = {
    position: "relative",
    top:"-100px" 
}
  
const youtubeColor = {
    color:"red",
    fontSize:60
}

const socialsContainer = {
    position: "relative",
    left:1000,
    top:30,
    width: 500,
    height: 500,
    backgroundColor: "#5f7954",
    marginBottom:20,
    marginTop:20, 
}

const nameHeader = { 
    position: "absolute",
    left:"-960px",
    bottom:"-270px",
    fontSize:130,
    color:"#5f7954"
}

const header= { 
    position: "absolute",
    left:"-960px",
    bottom:"-170px",
    fontSize:130,
    color:"#5f7954"
}
 
const headerText= { 
    position: "absolute",
    left:"-960px",
    bottom:"-70px",
    fontSize:130,
    color:"#5f7954"
}

const paraOutline= {
    position: "relative",
    top:"200px",
    alignItems:"center",
    borderStyle: "solid",
    borderRadius: "12px",
    borderColor: "white",
    marginLeft: "auto",
    marginRight:"auto",
    width: 350,
    height: 200,
    padding:"11px"
}

export default function Socials() {
    return (
        <div style={socialsContainer}>
          <div style={{margin:10 }}>
              <h1 style={nameHeader}>Socials</h1>
              <h1 style={header}>Socials</h1>
              <h1 style={headerText}>Socials</h1>
          </div>
          <div style={paraOutline}>
              <p style={{fontSize:30, fontFamily:"verdana"}}>Like, comment, subscribe, and share the video</p>
          </div>
          <IconButton  color="secondary" style={youtubeButton} href="https://www.youtube.com/channel/UC-n2qnHIMEZc_cp79sdw3Tg">
              <YouTubeIcon style={youtubeColor}/>
          </IconButton>
       </div>   
    )
}