import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import ResumeScreenshot from './images/Resume.PNG';
import Image from 'react-bootstrap/Image';

 
function Resume(props) {
  return (
    <div>
      <h1>Resume</h1>
      <Image id="resume" src={ResumeScreenshot} fluid='true'/>
    </div>
  )
}
 
export default Resume;