import React from "react"
import ClassSelfie from './images/ClassSelfie.jpg';
import Image from 'react-bootstrap/Image'

 
function About() {
  return (
    <div>
      <h1>Home</h1>
      
      <Image id="reactImage" src={ClassSelfie} fluid='true'/>
      <div id="standard_text">
        <p class="AboutIntroLine">Hello! I'm Dinah - 
          a designer who enjoys creating websites that are both beautiful and functional to suit every need.</p>

        <a href="https://dinapablo826047209.wordpress.com">Check out my blog here!</a>
      </div>
    </div>
  );
}
 
export default About;