import { Component } from "react";
const avengers = require("./data/avengers.png");
export default class MovieCard extends Component{
   
    render(){
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={avengers} alt="Poster" />
                    
                    </div>
                    
                    <div className="right">
                        <div className="title">The Avengers</div>
                        <div className="plot">Supernatural powers shown in the movie</div>
                        <div className="price">Rs. 199</div>

                        <div className="footer">
                            <div className="rating">Rating</div>
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