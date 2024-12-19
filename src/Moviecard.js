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
            starCount:0,
            fav:false,
            cart:false
        }    
       // this.addStars = this.addStars.bind(this);
    }
    addStars=()=>{
        //form one of setState()
        // this.setState({
        //     starCount: this.state.starCount += 0.5
        // });

        //form two of setState()
        if(this.state.starCount >=5 ){
            return;
        }
        this.setState((prevState)=>{
            return{
                starCount: prevState.starCount + 0.5
            }
        });
        // console.log("this.state.starCount",this.state.starCount);
        // this.state.starCount += 0.5;
    }

    decStars=()=>{
        if(this.state.starCount <=0 ){
            return;
        }
        this.setState((prevState)=>{
            return{
              starCount:prevState.starCount-0.5
            }
        })
    }

    handleFav = ()=>{
       this.setState({
        fav: !this.state.fav
       });
    }

    handleCart = ()=>{
        this.setState({
            cart: !this.state.cart
        });
    }

    render(){
        const {title,plot,price,rating,starCount,fav,cart} = this.state;
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
                              className="str-btn" onClick={this.decStars}/>
                              <img alt="star" src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                               className="stars"/>
                              <img alt="plus" src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
                              className="str-btn" onClick={this.addStars}/> 
                              <span>{starCount}</span>
                                
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