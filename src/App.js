
import MovieList from './MovieList';
import Navbar from './Navbar';
import React from 'react';
import { movies } from './moviesData';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
        movies : movies,
        cartCount:0
    }    
   // this.addStars = this.addStars.bind(this);
}

// addStars=()=>{
//     //form one of setState()
//     // this.setState({
//     //     starCount: this.state.starCount += 0.5
//     // });

//     //form two of setState()
//     if(this.state.starCount >=5 ){
//         return;
//     }
//     this.setState((prevState)=>{
//         return{
//             starCount: prevState.starCount + 0.5
//         }
//     });
//     // console.log("this.state.starCount",this.state.starCount);
//     // this.state.starCount += 0.5;
// }
   handleIncStar = (movie)=>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    if(movies[mid].star >= 5){
        return;
    }
    movies[mid].star += 0.5;
       this.setState({
        movies:movies
       });
   }
// decStars=()=>{
//     if(this.state.starCount <=0 ){
//         return;
//     }
//     this.setState((prevState)=>{
//         return{
//           starCount:prevState.starCount-0.5
//         }
//     })
// }
handleDecStar = (movie)=>{
   const {movies} = this.state;
   const mid = movies.indexOf(movie);
   if(movies[mid].star <=0){
    return;
   }
   movies[mid].star -= 0.5;
   this.setState({
    movies:movies
   });
}

// handleFav = ()=>{
//    this.setState({
//     fav: !this.state.fav
//    });
// }
handleToggleFav = (movie)=>{
    const{movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
        movies:movies
    });
}

// handleCart = ()=>{
//     this.setState({
//         cart: !this.state.cart
//     });
// }
handleToggleCart = (movie)=>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;
    this.setState({
        movies:movies
    });
}
  render(){
    const {movies} = this.state;
    return(
      <>
     {/* <h1>Movie app</h1> */}
     <Navbar/>
     <MovieList movies = {movies}
              addStars = {this.handleIncStar}
              decStars = {this.handleDecStar}
              toggleFav = {this.handleToggleFav}
              toggleCart = {this.handleToggleCart}/>
    </>
    )
  }
}
// function App() {
//   return (
    
    
//   );
// }

export default App;
