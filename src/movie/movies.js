
import React from 'react';
import './movies.css';
function Movie(props) {
    return (
   <div className="movie-card">
   <img src={props.pic}/>
  <label>{props.likes}
  <span>{props.movie_name}</span>
   </label>
   
  
  </div>
    );
    
}

export default Movie; 