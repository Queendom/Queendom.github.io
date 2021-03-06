import React from "react"
import VintageTypewriter from './images/ContactResized.png';
import { SocialIcon } from 'react-social-icons';
import Image from 'react-bootstrap/Image'
 
function Contact(props) {
  return (
    <div>
      <h1 class="HeaderOne">Contact Me</h1>
      <div className="container">
        <div className="imageBox">
          <Image id="reactImage" src={VintageTypewriter} fluid='true' alt="notepad plant pen" />
        </div>
        <div id="standard_text">
          <p>For business inquires, please contact me at:</p>

          <p>dinapablo19@gmail.com</p>

          <p>(919) 579-8069</p>

          <h2 class="HeaderTwo">Socials</h2>
          <div class="SocialsContainer">
          <SocialIcon url="https://twitter.com/" />
          <SocialIcon url="https://facebook.com/" />
          <SocialIcon url="https://linkedin.com/" />
          <SocialIcon url="https://instagram.com/" />
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Contact;