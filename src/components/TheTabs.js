import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const headerStyle ={
  position: "relative",
  left: 11,
  size: 10,
  color:"hsl(129, 21%, 25%)"
}

const TabStyle ={
  position: "relative",
  right: -880,
  color:"hsl(129, 21%, 25%)"
}

export default function TheTabs() {
    const [value, setValue] = React.useState("1")
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    
     return (
       <div>
               <Tabs value={value}  onChange={handleChange} indicatorColor="secondary">
                   <Button href="/">
                     <h1 style={headerStyle}>Tobis Portfolio</h1>
                   </Button>
                   <Tab label="Home" value={1} to="/" component={Link} style={TabStyle}/>
                   <Tab label="About" value={2} to="/About" component={Link} style={TabStyle}/>
                   <Tab label="Portfolio" value={3} to="/Portfolio" component={Link} style={TabStyle}/>  
                   <Tab label="Socials" value={4} to="/Socials" component={Link} style={TabStyle}/>  
               </Tabs>
       </div>
     );
}
   