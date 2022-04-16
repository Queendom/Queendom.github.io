import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import ResumeScreenshot from './images/Resume.PNG';
 
function Resume(props) {
  return (
    <div>
      <h1>Resume</h1>
      <Thumbnail
        link=""
        image={ResumeScreenshot}
        title=""
        category=""
      />
    </div>
  )
}
 
export default Resume;