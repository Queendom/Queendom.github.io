import React from "react"
import ClassSelfie from './images/ClassSelfie.jpg';

 
function About() {
  return (
    <div>
      <h1>About</h1>
      <img src={ClassSelfie}></img>
      
      <p class="AboutIntroLine">Hello! I'm Dinah - 
        a designer who enjoys creating websites that are both beautiful and functional to suit every need.</p>

        <p>My blog</p>
    </div>
  );
}
 
export default About;