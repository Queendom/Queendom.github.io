import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import JJBAWikiSpot from './images/JJBAWikiSpot1280.jpg';
import Ixora from './images/IxoraReduced.PNG';
import TheCryptogropher from './images/TheCryptogropher1280.jpg';
 
function Portfolio(props) {
  return (
    <div>
      <h1>Portfolio</h1>
      <Carousel autoPlay='true' infiniteLoop='true' interval='3000' >
      <div>
          <a href="https://wcet.waketech.edu/dpablo/WEB225_Final/Final/index.php" target="_blank">
            <div>
              <img src={Ixora} id="carousel"/>
            </div>
          </a>
            <p className="legend">As a class final, I created a fictional music database in Joomla 4.</p>
        </div>

        <div>
          <a href="https://wcet3.waketech.edu/dpablo/Web125/GrandFinale/index.html" target="_blank">
            <div>
              <img src={JJBAWikiSpot} id="carousel"/>
            </div>
          </a>
            <p className="legend">This was a Jojo's Bizarre Adventure fanmade website that I created for a class final. 
        This was designed to be for mobile devices.</p>
        </div>

        <div>
          <a href="https://wcet3.waketech.edu/dpablo/WEB250mos/wordpress/" target="_blank">
            <div>
              <img src={TheCryptogropher} id="carousel"/>
            </div>
          </a>
            <p className="legend">A cryptocurrency website that was created for a class mid-term.</p>
        </div>

      </Carousel>
    </div>
  )
}
 
export default Portfolio;