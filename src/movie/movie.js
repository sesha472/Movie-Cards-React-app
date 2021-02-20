

import React from 'react';
import './movie.css';


class Movie extends React.Component {
  render(){
    return (
   <div className="movie-card">
   <img src={this.props.pic}/>
  <label>{this.props.likes}
  <span>{this.props.movie_name}</span>
   </label>
   
  </div>
    );
  }
}

export default Movie; 