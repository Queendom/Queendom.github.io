import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import FlowerVenti from './images/FlowerVenti.jpg';
import GothGiorno from './images/GothGiorno.png';
import Jolyne from './images/Jolyne.jpg';
 
function DigitalArtwork(props) {
  return (
    <div>
      <h1>Digital Artwork</h1>
      <Thumbnail
        link=""
        image={FlowerVenti}
        title="Venti"
        category=""
      />
        <Thumbnail
        link=""
        image={GothGiorno}
        title="Giorno"
        category=""
      />
        <Thumbnail
        link=""
        image={Jolyne}
        title="Jolyne"
        category=""
      />
    </div>
  )
}
 
export default DigitalArtwork;