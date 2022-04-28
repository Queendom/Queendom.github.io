import React from "react"
import './accordion.css'
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import FlowerVenti from './images/FlowerVentiResized.jpg';
import GothGiorno from './images/GothGiornoResized.jpg';
import Jolyne from './images/JolyneResized.jpg';
import Image from 'react-bootstrap/Image';

function DigitalArtwork(props) {
  return (
    
    <div>
      <h1 class="HeaderOne">Digital Artwork</h1>
      <h2 class="HeaderTwo">Venti</h2>
      <Image id="artwork" src={FlowerVenti} fluid='true' alt="venti genshin impact fanart"/>
      <h2 class="HeaderTwo">Giorno</h2>
      <Image id="artwork" src={GothGiorno} fluid='true' alt="giorno jjba bizarre adventure fanart"/>
      <h2 class="HeaderTwo">Jolyne</h2>
      <Image id="artwork" src={Jolyne} fluid='true' alt="jolyne jjba bizarre adventure fanart"/>
    </div>
    /*
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
    */
  )
}
 
export default DigitalArtwork;