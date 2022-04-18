import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import FlowerVenti from './images/FlowerVenti.jpg';
import GothGiorno from './images/GothGiorno.png';
import Jolyne from './images/Jolyne.jpg';
import Image from 'react-bootstrap/Image';

function DigitalArtwork(props) {
  return (
    <div>
      <h1>Digital Artwork</h1>
      <h2>Venti</h2>
      <Image id="artwork" src={FlowerVenti} fluid='true'/>
      <h2>Giorno</h2>
      <Image id="artwork" src={GothGiorno} fluid='true'/>
      <h2>Jolyne</h2>
      <Image id="artwork" src={Jolyne} fluid='true'/>
    </div>
  )
}
 
export default DigitalArtwork;