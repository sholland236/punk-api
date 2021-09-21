import React from "react";
import "./CardList.scss";
import Card from "../../components/Card/Card";

const CardList = (props) => {
    const { beers } = props;

    return (
        <div>
            <Card beers={beers} />
        </div>
    )
}

export default CardList;
