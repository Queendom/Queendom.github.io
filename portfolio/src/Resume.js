import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import ResumeScreenshot from './images/Resume.PNG';
import ResumePDF from './images/Dina_Pablo_Resume.pdf';
import Image from 'react-bootstrap/Image';

 
function Resume(props) {
  return (
    <div>
      <h1 class="HeaderOne">Resume</h1>
      <Image id="resume" src={ResumeScreenshot} fluid='true' alt="resume sheet"/>
      <h2 id="resume_text">
      <a class="ResumeDownload" href={ResumePDF} download>Download Resume PDF</a>
      </h2>
    </div>
  )
}
 
export default Resume;