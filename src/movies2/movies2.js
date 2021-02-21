

import React from 'react';
import Movie  from '../movie/movie.js';
import './movies2.css';

 

  class Movies extends React.Component{
 
    getMovies=(pic,likes,movie_name)=>{
        return  < Movie pic={pic}  likes={likes} movie_name={movie_name}  />;
    };
     render(){
       
return (
    <div className="movies-group">
       
        {this.getMovies("https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/maharshi-et00081372-09-08-2018-10-00-31.jpg", "125.5k " , " MAHARSHI")}
        {this.getMovies("https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/maharshi-et00081372-09-08-2018-10-00-31.jpg" ,"125.5k" , " MAHARSHI")}
        {this.getMovies("https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/maharshi-et00081372-09-08-2018-10-00-31.jpg" ,"125.5k"  ,"MAHARSHI")}
        {this.getMovies( "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/maharshi-et00081372-09-08-2018-10-00-31.jpg", "125.5k"  ," MAHARSHI")}
        {this.getMovies( "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/maharshi-et00081372-09-08-2018-10-00-31.jpg", "125.5klikes" , " MAHARSHI")}
        {this.getMovies( "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/maharshi-et00081372-09-08-2018-10-00-31.jpg" ,"125.5klikes" , " MAHARSHI")}
        {this.getMovies( "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/maharshi-et00081372-09-08-2018-10-00-31.jpg" ,"125.5klikes" , " MAHARSHI")}
        {this.getMovies( "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/maharshi-et00081372-09-08-2018-10-00-31.jpg" ,"125.5klikes" , " MAHARSHI")}
        {this.getMovies( "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/maharshi-et00081372-09-08-2018-10-00-31.jpg" ,"125.5klikes" , " MAHARSHI")}
        {this.getMovies( "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/maharshi-et00081372-09-08-2018-10-00-31.jpg" ,"125.5klikes" , " MAHARSHI")}
       
    </div>
);

}
};

export default Movies;