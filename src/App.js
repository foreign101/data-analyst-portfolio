import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import TheTabs from "./components/TheTabs"
import Socials from "./components/Socials"

function App() {
  return (
        <div className="App">
        <TheTabs/>
         <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="About" element={<About/>}/>
              <Route exact path="Portfolio" element={<Portfolio/>}/>
              <Route exact path="Socials" element={<Socials/>}/>
         </Routes>
        </div>
  );
}

export default App;