import React from "react";
import Cards from "../Cards/Cards";
function MainCards(props){
    let reviews = props.reviews;
    return(
        <Cards reviews={reviews}/>
    )
}

export default MainCards;