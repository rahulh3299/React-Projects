import { Component } from "react";
const avengers = require("./data/avengers.png");
export default class MovieCard extends Component{
    constructor(){
        super();
        this.state = {
            title:"The Avengers",
            plot:"Supernatural powers shown in the movie",
            price:199,
            rating:7.5
        }
    }
    render(){
        const {title,plot,price,rating} = this.state;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={avengers} alt="Poster" />
                    
                    </div>
                    
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                
                              <img alt="minus" src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"
                              className="str-btn"/>
                              <img alt="star" src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                               className="stars"/>
                              <img alt="plus" src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
                              className="str-btn"/> 
                              <span>0</span>
                                
                            </div>

                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
       
}