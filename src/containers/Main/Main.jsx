import React from "react";
import "./Main.scss";

import CardList from "../CardList/CardList";

const Main = (props) => {
    const { beers } = props;

    return (
        <div className="main">
            <div className="main__heading">
                <h1 className="main__heading--title">Welcome to our brewery selection!</h1>
                <p className="main__heading--desc">Please enjoy our beers responsibly</p>
            </div>
            <div className="main__cardlist">
                <CardList beers={beers} />
            </div>
        </div>
    )
}

export default Main;

// need to work on using api