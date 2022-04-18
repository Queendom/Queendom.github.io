import React from 'react';
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from './Home.js';  
import About from './About.js';  
import Portfolio from './Portfolio.js'; 
import Resume from './Resume.js'; 
import Contact from './Contact.js'; 
import DigitalArtwork from './DigitalArtwork.js'; 
import background from './images/TornPaper.png';
import Navigation from './Nav.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./fonts/CinzelDecorative-Black.ttf";
import"./fonts/CinzelDecorative-Bold.ttf";
import"./fonts/CinzelDecorative-Regular.ttf";
import"./fonts/Milonga-Regular.ttf";
import"./fonts/Nosifer-Regular.ttf";


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

 
function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: `url(${background})` }}>

      <div className="navigation">
          <div className="navigation-sub">
            <Navigation/>
           
  
          </div>
        </div>
        
  
        <Routes>
        <Route exact path="/" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/digitalartwork" element={<DigitalArtwork/>} />
      
        </Routes>
  
  
      </div>
    </BrowserRouter>
  );
}
 
export default App;
