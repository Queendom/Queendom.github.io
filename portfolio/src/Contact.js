import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import VintageTypewriter from './images/VintageTypewriter.jpeg';
 
function Contact(props) {
  return (
    <div>
      <h1>Contact Me</h1>
      <Thumbnail
        link=""
        image={VintageTypewriter}
        title=""
        category=""
      />
      <p>For business inquires, please contact me at:</p>

      <p>dinapablo19@gmail.com</p>

     <p>(919) 579-8069</p>

      <h2>Socials</h2>
    </div>
  )
}
 
export default Contact;