import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close'
import Button  from '@mui/material/Button'
import AverageTimeEachMonth from '../assets/AverageTimeEachMonth.jpeg'
import AverageTimeFebNov from '../assets/AverageTimeFebNov.jpeg'
import Day1highestdemandelectricity from '../assets/Day1highestdemandelectricity.png'
import ElectricityDemandJan from '../assets/ElectricityDemandJan.png'
import ElectricityDemandMonths from '../assets/ElectricityDemandMonths.png'

const textStyle= {
    color:"black"
}

const textBoxStyle ={
    width: 900,
    height: 700,
    top:"50%",
    left:"50%",
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    padding:4, 
    overflowY:"scroll",
    overflowX:"hidden", 
}
  
const closeButton = {
    position: "relative",
    left: 850
}

//centers green containers
const divContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems:"center",
  marginTop: 85,
}

const projectContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems:"center",
  justifyContent: "center",
  backgroundColor: "#5f7954",
  color:"white",
  fontFamily:"Courier New",
  fontSize:20,
  marginTop: 125,
  marginBottom:-150,
  width: 400,
  height: 500,
  margin: 20, 
}

const modalDiv = {
    backgroundColor:"white",
    width: 900,
    height: 650,
}

const paraOutline = {
  alignItems:"center",
  borderStyle: "solid",
  borderRadius: "12px",
  borderColor: "white",
  width: 350,
  height: 200,
  padding:"7px"
}
 
const header = {
  fontSize:20
}

const button = {
  marginLeft:20
}

const projectHeader = { 
  position: "absolute",
  top:"60px",
  left:"200px",
  fontSize:70,
  color:"hsl(129, 21%, 15%, 1)",
  zIndex:-1
}

function Portfolio() {
  const [clicked, setClicked]= useState("")
  const [processclicked, setprocessClicked]= useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const overflow = processclicked? "visible":"hidden"
  const height = processclicked? 1430: 200

    return (
        <div style={divContainer}>
            <h1 style={projectHeader}>Projects</h1>
            <div style={projectContainer}>
              <Button onClick={() => {setClicked("Open Project 1"); handleOpen();}} size="large" variant="outlined" color="inherit">Open Project #1</Button>
                <div style={{margin:20}}>Data Analysis Project #1 | Average Time Users spent at home in Jakarta(2020)</div>
                <div style ={paraOutline}>
                  <p>This project analyzed the percentage of people who stayed home in Jakarta in year 2020.</p>
                </div>
            </div>
            <div style={projectContainer}>
              <Button onClick={() => {setClicked("Open Project 2"); handleOpen();}} size="large" variant="outlined" color="inherit">Open Project #2</Button>
                <div style={{margin:20}}>Data Analysis Project #2 | Electricity Peak in Ghana in 2010</div>
                <div style ={paraOutline}>
                  <p>In this project, I analyzed the daily peak demand for electricity in Ghana(2010)</p>
                </div>
            </div>
            <div style={projectContainer}>
              <Button onClick={() => {setClicked("Open Project 3"); handleOpen();}} size="large" variant="outlined" color="inherit">Open Project #3</Button>
                <div style={{margin:20}}>Data Analysis Project #3 | Loading...</div>
                <div style ={paraOutline}>
                  <p>Loading...</p>
                </div>
            </div>
            <Modal open={open}>
             <Box sx={textBoxStyle}>
               <IconButton  color="secondary" style={closeButton} onClick={ () => {setprocessClicked(false); handleClose();}}>
                  <CloseIcon/>
               </IconButton>
               {clicked==="Open Project 1" &&
                  <div>
                    <div style={modalDiv}>
                      <div>
                        <h1>Overview:</h1>
                          <p style={textStyle}>I was curious to know the percentage of people who stayed home as a result of the pandemic.
                          I found a dataset from World Bank which showed the time users spent at home
                          in Jakarta from Febuary to November of 2020. Given that 2020 was the year of a global pandemic, 
                          my theory was that more users would stay home later in the year compared to the beginning. 
                          Another theory I wanted to analyze was if there would be a difference between wealth class(High, Low, Medium) 
                          and time users spent at home?
                          </p>
                     </div>
                     <div style={{backgroundColor: "#5f7954", marginLeft:"auto", marginRight:"auto", height: height, width: 900, overflow:overflow}}>
                          <h1 style={{paddingLeft:7}}>Process:</h1>
                          {processclicked? 
                            <Button onClick={() => {setprocessClicked(false)}} variant="outlined" color="inherit" style={button}>Close</Button>
                            : <Button onClick={() => {setprocessClicked(true)}} variant="outlined" color="inherit" style={button}>Show</Button>}
                            <div style= {{paddingLeft:20, paddingRight:20}}>
                                <h1 style={header}># Read data and parse date to convert from string to object.</h1>
                                <p>1. timeUsersSpendAtHome = pd.read_csv("timeUsersSpendAtHome.csv", parse_dates=["date"])</p>
                                <h1 style={header}># to print summary of the data/dataframe which also includes data types</h1>
                                <p>2. print(timeUsersSpendAtHome.info())</p>
                                <h1 style={header}># check to make sure there are no duplicates rows</h1>
                                <p>3. duplicates = timeUsersSpendAtHome.duplicated()</p>
                                <h1 style={header}> # Add new column containing only the month</h1>
                                <p>4. timeUsersSpendAtHome["month"] = timeUsersSpendAtHome["date"].dt.month</p>
                                <h1 style={header}> # For each month, what was average mean based on wealth class?</h1> 
                                <p>5. dataTable = timeUsersSpendAtHome.pivot_table(values="mean", index="month", columns="wealth_label_home", aggfunc="mean")</p>
                                <h1 style={header}># Comparing time users spent at home in Feb vs Nov</h1>
                                <p>6. febNov = timeUsersSpendAtHome[(timeUsersSpendAtHome["month"] == 2) | (timeUsersSpendAtHome["month"] == 11) ]</p>
                                <p>febNovTable = febNov.pivot_table(values="mean", index="month", columns="wealth_label_home", aggfunc="mean" )</p>  
                             </div>  
                            <div>
                                <h1 style={{paddingLeft:7}}>#Plot 1</h1>
                                <ul>
                                  <li>dataTable.plot(kind="bar")</li>
                                  <li>plt.xlabel("Month")</li>
                                  <li>plt.ylabel("Mean/average")</li>
                                  <li>plt.title("Average Time users spent at home each month based on wealth class")</li>
                                  <li>plt.tight_layout()</li>
                                  <li>plt.show()</li>
                                </ul>
                            </div>
                            <div>
                                <h1 style={{paddingLeft:7}}>#Plot 2</h1>
                                <ul>
                                    <li>febNovTable.plot(kind="bar")</li>
                                    <li>plt.xlabel("Month of Feb and Nov")</li>
                                    <li>plt.ylabel("Mean/average")</li>
                                    <li>plt.title("Average Time users spent at home for the month of Feb and Nov")</li>
                                    <li>plt.tight_layout()</li>
                                    <li>plt.show()</li>
                                </ul>
                            </div>
                      </div>
                      <div>
                          <h1>Findings:</h1>
                          <p style={textStyle}>Using Python, Pandas, and MatplotLib, my hypothesis was correct. More users in Jakarta
                          stayed home as a result of the pandemic. What I found interesting was that there was not a noticeable 
                          difference between wealth class and time users spent at home.
                          </p>
                      </div>
                      <div>
                          <h1>Visualization:</h1>
                          <img src={AverageTimeEachMonth} width= "600" height="600" objectFit="contain" alt=" average time users spend at home graph"></img>
                          <img src={AverageTimeFebNov} width="600" height="500" objectFit="contain" alt="average time users spent in Feb and Nov graph"></img>
                      </div>
                    </div>
                  </div>
                }
                {clicked === "Open Project 2" &&
                  <div>
                    <div style={modalDiv}>
                      <div>
                        <h1>Overview:</h1>
                        <p style={textStyle}>
                        I found a dataset from World Bank which showed the daily peak demand for electricity in Ghana(2010). 
                        I noticed this dataset included values for all months except December. Also I figured there would be some Nan values given
                        that not all months have the same number of days. Keeping this in mind, I went ahead and analyzed which
                        days and months had the highest peaks.
                        </p>
                      </div>
                      <div style={{backgroundColor: "#5f7954", marginLeft:"auto", marginRight:"auto", height: height, width: 900, overflow:overflow}}>
                        <h1 style={{paddingLeft:7}}>Process:</h1>
                        {processclicked? <Button onClick={() => {setprocessClicked(false)}} variant="outlined" color="inherit" style={button}>Close</Button>
                        : <Button onClick={() => {setprocessClicked(true)}} variant="outlined" color="inherit" style={button}>Show</Button>}
                        <div style= {{paddingLeft:20, paddingRight:20}}>
                            <h1 style={header}># Read data</h1>
                            <p>1. electricity = pd.read_csv("2010-daily-peak-demand-electricity-gridco-mw.csv")</p>
                            <h1 style={header}># to print summary of the data/dataframe which includes data types</h1>
                            <p>2. print(electricity.info())</p>
                            <h1 style={header}># check that there are no duplicate rows</h1>
                            <p>3. print(df.duplicated())</p>
                            <h1 style={header}># Check to see if/which values are Nan</h1>
                            <p>4. print(electricity.isna())</p>
                            <h1 style={header}># filled nan values with 0</h1>
                            <p>5. elec = electricity.fillna(0)</p>
                            <h1 style={header}># which day in the month of Jan had highest demand?</h1>
                            <p>6. electricity.iloc[0:31, 0:1].max()</p>
                            <h1 style={header}># which month had highest demand for electricity?</h1>
                            <p>7. month= elec.iloc[:, 1:13].mean()</p>
                            <h1 style={header}> # in day 1, which month had highest demand for electricity</h1>
                            <p>8. elec.iloc[0, 1:13] </p>
                        </div>
                      <div>
                        <h1 style={{paddingLeft:7}}>#Plot 1</h1>
                            <ul>
                                <li>elec.iloc[0, 1:13].plot(kind="bar")</li>
                                <li>plt.xlabel("Day 1 in each month")</li>
                                <li>plt.ylabel("electricity demand")</li>
                                <li>plt.title("Day 1 highest demand for electricity")</li>
                                <li>plt.tight_layout()</li>
                                <li>plt.show()</li>
                            </ul>
                      </div>
                      <div>
                        <h1 style={{paddingLeft:7}}>#Plot 2</h1>
                            <ul>
                                <li>electricity[["January"]].plot()</li>
                                <li>plt.xlabel("Days")</li>
                                <li>plt.ylabel("Highest demand")</li>
                                <li>plt.title("Electricity Demand in January")</li>
                                <li>plt.tight_layout()</li>
                                <li>plt.show()</li>
                            </ul>
                      </div>
                      <div>
                        <h1 style={{paddingLeft:7}}>#Plot 3</h1>
                            <ul>
                                <li>elec.iloc[:, 1:14].mean().plot(kind="bar")</li>
                                <li>plt.xlabel("Months")</li>
                                <li>plt.ylabel("Demand")</li>
                                <li>plt.title("Electricity Demand in year 2010")</li>
                                <li>plt.tight_layout()</li>
                                <li>plt.show()</li>
                            </ul>
                      </div>
                   </div>
                   <div>
                      <h1>Findings:</h1>
                      <p style={textStyle}>Using Python, Pandas, and MatplotLib, I discovered the month of May had the highest 
                      electricity peak in Ghana for year 2010. Something I want to further explore is why certain months had higher 
                      peaks than others. That is what variables influenced this.
                      </p>
                  </div>
                  <div>
                      <h1>Visualization:</h1>
                      <img src={Day1highestdemandelectricity} width= "600" height="600" objectFit="contain" alt="day 1 highest elec demand graph"></img>
                      <img src={ElectricityDemandJan} width="600" height="500" objectFit="contain" alt="elec demand in Jan graph"></img>
                      <img src={ElectricityDemandMonths} width="600" height="500" objectFit="contain" alt="elec demand in 2010 graph"></img>
                  </div>  
                  </div>
                 </div>
                }
                {clicked==="Open Project 3" &&
                  <h1>Loading...</h1>
                }
             </Box>
            </Modal> 
        </div>
  )
}

export default Portfolio;