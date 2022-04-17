import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import TheCryptogropher from './images/TheCryptogropher.PNG';
import JJBAWikiSpot from './images/JJBAWikiSpot.PNG';
import WestPalmBeach from './images/WestPalmBeach.PNG';
 
function Portfolio(props) {
  return (
    <div>
      <h1>Portfolio</h1>
      <Thumbnail 
        link="https://wcet3.waketech.edu/dpablo/WEB250mos/wordpress/"
        image={TheCryptogropher} 
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