import { Component } from "react";
//const avengers = require("./data/avengers.png");
export default class MovieCard extends Component{
    
    

    render(){
        const {movie,addStars} = this.props;
        const {title,plot,poster,price,rating,star,fav,cart} = this.props.movie;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={poster} alt="Poster" />
                    
                    </div>
                    
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                
                              <img alt="minus" src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"
                              className="str-btn" onClick={this.decStars}/>
                              <img alt="star" src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                               className="stars"/>
                              <img alt="plus" src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
                              className="str-btn" onClick={()=>{addStars(movie)}}/> 
                              <span>{star}</span>
                                
                            </div>
                             {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Unfavourite</button> 
                             : <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>
                             }
                            
                            {cart ? <button className="cart-btn" onClick={this.handleCart}>Remove from cart</button>: 
                            <button className="cart-btn" onClick={this.handleCart}>Add to Cart</button>}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
       
}