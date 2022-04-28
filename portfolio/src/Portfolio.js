import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import JJBAWikiSpot from './images/JJBAWikiSpot1280.jpg';
import Ixora from './images/IxoraCompressed.jpg';
import TheCryptogropher from './images/TheCryptogropher1280.jpg';
 
const legendStyle = {
  'font-size': '15px',
  opacity:1
};

function Portfolio(props) {
  return (
    <div>
      <h1 class="HeaderOne">My Portfolio</h1>
      <Carousel autoPlay='true' infiniteLoop='true' interval='5000' >
      <div>
          <a href="https://wcet.waketech.edu/dpablo/WEB225_Final/Final/index.php" target="_blank">
            <div>
              <img src={Ixora} id="carousel" alt="music database vinyl record"/>
            </div>
          </a>
            <p className="legend" style={legendStyle}>As a class final, I created a fictional music database in Joomla 4.</p>
        </div>

        <div>
          <a href="https://wcet3.waketech.edu/dpablo/Web125/GrandFinale/index.html" target="_blank">
            <div>
              <img src={JJBAWikiSpot} id="carousel" alt="jojo bizarre adventure wiki"/>
            </div>
          </a>
            <p className="legend" style={legendStyle}>This was a Jojo's Bizarre Adventure fanmade website that I created for a class final. 
        This was designed to be for mobile devices.</p>
        </div>

        <div>
          <a href="https://wcet3.waketech.edu/dpablo/WEB250mos/wordpress/" target="_blank">
            <div>
              <img src={TheCryptogropher} id="carousel" alt="cryptocurrency blog phone"/>
            </div>
          </a>
            <p className="legend" style={legendStyle}>A cryptocurrency website that was created for a class mid-term.</p>
        </div>

      </Carousel>
    </div>
  )
}
 
export default Portfolio;