import React from 'react';
import AboutMe from '../assets/AboutMe.png'

const imageProfile = {
    position: "relative",
    left:10,
    width:300,
    height:300,
    top:-610,
    margin:-90
}

//greeen box
const aboutMeContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    width: 1200,
    height: 800,
    backgroundColor: "#5f7954",
    marginLeft:"auto",
    marginRight: "auto",
    textSize: 20,
    marginBottom:20,
    marginTop:20
}
  
const paragraphStyle = {
    textIndent: "50px",
    textAlign: "center",
    letterSpacing: "3px",
    paddingTop:400,
    paddingLeft:100,
    paddingRight:100,
    fontSize:"20px",
    lineHeight:"1.9",
}

const header = {
    position: "relative",
    fontSize:"45px",
    top: 430,
}

function About() {
    return (
        <div style={aboutMeContainer}>
          <h1 style={header}>About Me</h1>
          <p style={paragraphStyle}>My name is Tobi Ekwempu and I am an aspiring data analyst.
          I love asking questions and finding answers using tools such as Python, Pandas, and MatPlotLib.
          I have some background in web and app development. Outside of this, I am a photographer/videographer.
          With my expertise in photo and video editing, I understand visualization,
          color theory, composition, storytelling, etc. I believe the combination of my photography and videography skills +
          analytical skills + software development makes for a great data analyst.</p>
          <img src={AboutMe} style={imageProfile} alt="image of a human being"></img>
      </div>
    )
}

export default About;