import React from 'react';

const descHeader= {
  fontFamily: "Courier New",
  textAlign: "left",
  paddingTop:-10,
  fontSize:40,
  lineHeight:0.1,
  textIndent: "30px",
  letterSpacing: "3px",
  marginLeft: "auto",
  marginRight: "auto",
  color: "white"
}

const nameHeader= { 
  textAlign: "left",
  paddingTop:500,
  fontSize:130,
  marginLeft: "auto",
  marginRight:"auto",
  color: "white"
}

export default function Home() {
    return (
          <div style={{backgroundColor: "#5f7954", backgroundSize:"cover", width:"100%", height:"900px", marginTop:-190}}>
            <h1 style={nameHeader}>Tobi Ekwempu</h1>
            <p style={descHeader}>Data Analyst | Web developer</p>    
          </div>
    );  
}