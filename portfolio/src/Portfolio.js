import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import JJBAWikiSpot from './images/JJBAWikiSpotLarge.jpg';
import WestPalmBeach from './images/WestPalmBeachLarge.jpg';
import TheCryptogropher from './images/TheCryptogropher.PNG';
 
function Portfolio(props) {
  return (
    <div>
      <h1>Portfolio</h1>
      <Carousel>
        <div>
          <a href="https://wcet3.waketech.edu/dpablo/WEB250mos/wordpress/" target="_blank">
            <div>
              <img src={TheCryptogropher} />
            </div>
          </a>
            <p className="legend">A cryptocurrency website that was created for a class mid-term.</p>
        </div>
        <div>
          <a href="https://wcet3.waketech.edu/dpablo/Web125/GrandFinale/index.html" target="_blank">
            <div>
              <img src={JJBAWikiSpot} />
            </div>
          </a>
            <p className="legend">This was a Jojo's Bizarre Adventure fanmade website that I created for a class final. 
        This was designed to be for mobile devices.</p>
        </div>
        <div>
          <a href="https://wcet3.waketech.edu/dpablo/WEB250eos/wordpress/news/" target="_blank">
            <div>
              <img src={WestPalmBeach} />
            </div>
          </a>
            <p className="legend">As a class final, I created a tourist website for West Palm Beach, Florida.</p>
        </div>
      </Carousel>
    </div>
  )
}
 
export default Portfolio;