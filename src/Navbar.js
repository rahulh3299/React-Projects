import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  width:100%;
  height: 70px;
  background:linear-gradient(170deg,#097379,#092279,#780979);
  display: flex;
  justify-content: space-between;
  position:relative;
  align-items:center;
`
const Title = styled.div`
        font-size: 30px;
        color: #fff;
        font-weight: 600;
        font-family: Montserrat, sans-serif;
        text-transform: uppercase;
        margin-left: 20;
        &:hover{color:black}
`
const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`
const CartIcon = styled.img`
  height: 48px;
  margin-right: 20px;
`
const CartCount = styled.span`
    background: ${(props)=>props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    visibility:${(props)=>props.show?"visible":"hidden"}
`
class Navbar extends React.Component{
   render(){
    //console.log("Navbar cartcount:"+this.props.cartCount);
    const {cartCount} = this.props;
     return(
        <>
         <Nav>
            <Title>
                Movie-App
            </Title>
            <CartIconContainer >
                <CartIcon alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/7411/7411136.png"/>
                <CartCount color="green" show={true}>{cartCount}</CartCount>
            </CartIconContainer>
         </Nav>
        </>
     );
   }
}
export default Navbar;
/* .nav{
  width:100%;
  height: 70px;
  background-color: cadetblue;
  display: flex;
  justify-content: space-between;
} */
// const styles = {
//     nav:{
//         height: 70,
//         background: "#4267b2",
//         display: "flex",
//         justifyContent: "space-between" ,
//         alignItems: "center",
//         position: "relative",
//     },
//     title:{
//         fontSize: 30,
//         color: "#fff",
//         fontWeight: 600,
//         fontFamily: '"Montserrat", sans-serif',
//         textTransform: "uppercase",
//         marginLeft: 20
//     },
//     cartIcon: {
//         height: 48,
//         marginRight: 20,
//     },
//     cartIconContainer: {
//         position: "relative",
//         cursor: "pointer",
//     },
//     cartCount: {
//         background: "orange",
//         borderRadius: "50%",
//         padding: "4px 8px",
//         position: "absolute",
//         right: 10,
//         top: -5,
//         fontSize: 12,
//     } 
// }
