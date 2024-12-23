//import { Component } from "react";
import MovieCard from "./Moviecard";
// import { movies } from "./moviesData";
function MovieList(props){
   

    
        //const {title,plot,price,rating,starCount,fav,isInCart,poster} = state.movies;
        const {movies,addStars,decStars,toggleFav,toggleCart} = props;
        return(
            <>
             {movies.map((movie)=><MovieCard movie = {movie} 
              addStars = {addStars}
              decStars = {decStars}
              toggleCart = {toggleCart}
              toggleFav = {toggleFav}
              key={movie.id}/>)}
            </>
        )
    
}

export default MovieList;