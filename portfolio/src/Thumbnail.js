import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image_large} fluid alt="Project Image" align="center" srcSet={`${props.image_small} 300w, ${props.image_small} 768w, ${props.image_large} 1280w`} />
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
            </Link>
    </div>
  )
}
 
export default Thumbnail;