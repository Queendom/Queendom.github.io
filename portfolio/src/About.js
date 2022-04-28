import React from "react"
import ClassSelfie from './images/ClassSelfieResized.png';
import Image from 'react-bootstrap/Image'

 
function About() {
  return (
    <div>
      <h1 class="HeaderOne">About Me</h1>
      <div className="container">
        <div className="imageBox">
          <Image id="reactImage" src={ClassSelfie} fluid='true'/>
        </div>
        <div id="standard_text">
          <p class="AboutIntroLine">Hello! I'm Dinah - 
            a designer who enjoys creating websites that are both beautiful and functional to suit every need.</p>

          <a class="BlogLink" href="https://dinapablo826047209.wordpress.com">Check out my blog here!</a>
        </div>
      </div>
    </div>
  );
}
 
export default About;