import { Component } from "react";
const avengers = require("./data/avengers.png");
export default class MovieCard extends Component{
    constructor(){
        super();
        this.state = {
            title:"The Avengers",
            plot:"Supernatural powers shown in the movie",
            price:199,
            rating:7.5,
            starCount:0
        }
       // this.addStars = this.addStars.bind(this);
    }
    addStars=()=>{
        //form one of setState()
        // this.setState({
        //     starCount: this.state.starCount += 0.5
        // });

        //form two of setState()
        this.setState((prevState)=>{
            return{
                starCount: prevState.starCount + 0.5
            }
        });
        // console.log("this.state.starCount",this.state.starCount);
        // this.state.starCount += 0.5;
    }
    render(){
        const {title,plot,price,rating,starCount} = this.state;
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
                              className="str-btn" />
                              <img alt="star" src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                               className="stars"/>
                              <img alt="plus" src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
                              className="str-btn" onClick={this.addStars}/> 
                              <span>{starCount}</span>
                                
                            </div>

                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
       
}