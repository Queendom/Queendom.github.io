import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import ClassSelfie from './images/ClassSelfie.jpg';
 
function About() {
  return (
    <div>
      <h1>About</h1>
      <Thumbnail
        link=""
        image={ClassSelfie}
        title=""
        category=""
      />
      
      <p>Hello! I'm Dinah - 
        a designer who enjoys creating websites that are both beautiful and functional to suit every need.</p>

        <p>My blog</p>
    </div>
  );
}
 
export default About;