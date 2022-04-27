import React from "react"
import './accordion.css'
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import FlowerVenti from './images/FlowerVenti.jpg';
import GothGiorno from './images/GothGiorno.png';
import Jolyne from './images/Jolyne.jpg';
import Image from 'react-bootstrap/Image';

function DigitalArtwork(props) {
  return (
    /*
    <div>
      <h1>Digital Artwork</h1>
      <h2>Venti</h2>
      <Image id="artwork" src={FlowerVenti} fluid='true'/>
      <h2>Giorno</h2>
      <Image id="artwork" src={GothGiorno} fluid='true'/>
      <h2>Jolyne</h2>
      <Image id="artwork" src={Jolyne} fluid='true'/>
    </div>
    */
    <div class="ia-container">
				
    <figure>
      <img src={FlowerVenti} alt="image01" />
      <input type="radio" name="radio-set" checked="checked" />
      <figcaption><span>True Colors</span></figcaption>
      
      <figure>
        <img src={GothGiorno} alt="image02" />
        <input type="radio" name="radio-set" />
        <figcaption><span>Honest Light</span></figcaption>

        <figure>
        <img src={Jolyne} alt="image02" />
        <input type="radio" name="radio-set" />
        <figcaption><span>Honest Light</span></figcaption>

        </figure>
								
			</figure>
				
		</figure>
    </div>
  )
}
 
export default DigitalArtwork;