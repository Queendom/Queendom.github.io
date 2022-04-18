import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import TheCryptogropherLarge  from './images/TheCryptogropherLarge.jpg';
import TheCryptogropherMedium from './images/TheCryptogropherMedium.jpg';
import TheCryptogropherSmall from './images/TheCryptogropherSmall.jpg';
import JJBAWikiSpot from './images/JJBAWikiSpotLarge.jpg';
import WestPalmBeach from './images/WestPalmBeachLarge.jpg';
 
function Portfolio(props) {
  return (
    <div>
      <h1>Portfolio</h1>
      <Thumbnail 
        link="https://wcet3.waketech.edu/dpablo/WEB250mos/wordpress/"
        image_small={TheCryptogropherSmall}
        image_medium={TheCryptogropherMedium}
        image_large={TheCryptogropherLarge}
        title="The Cryptogropher"
        category=""
      />
    <p class="CryptoTagline">A cryptocurrency website that was created for a class mid-term.</p>

      <Thumbnail
        link="https://wcet3.waketech.edu/dpablo/Web125/GrandFinale/index.html"
        image={JJBAWikiSpot}
        title="JJBA WikiSpot"
        category=""
      />

      <p>This was a Jojo's Bizarre Adventure fanmade website that I created for a class final. 
        This was designed to be for mobile devices.</p>

        <Thumbnail
        link="https://wcet3.waketech.edu/dpablo/WEB250eos/wordpress/news/"
        image={WestPalmBeach}
        title="West Palm Beach"
        category=""
      />

      <p>As a class final, I created a tourist website for West Palm Beach, Florida.</p>
    </div>
  )
}
 
export default Portfolio;