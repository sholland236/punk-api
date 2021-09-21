import React from "react";
import "./Card.scss";

const Card = (props) => {
    const { beers } = props;

    const cardItem = beers.map(beer => {
            return  (<div className="beer__cards">
                        <img src={beer ? beer.image_url : ""} alt={beer ? beer.name : ""} />
                        <h3>{beer ? beer.name : ""}</h3>
                        <h5>{beer ? beer.tagline : ""}</h5>
                        <p>{beer ? beer.description : ""}</p>
                        <p>First brewed: {beer ? beer.first_brewed : ""}</p>
                        <p>{beer ? beer.abv : "unavailable"}%</p>
                    </div>)
        })

    return (
        <div className="beer">
            {cardItem}
        </div>
    )
}

export default Card;
