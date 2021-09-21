import React from "react";
import "./FilterItem.scss";

const FilterItem = (props) => {
    const { title, clicked } = props

    return (
        <div className="filter-item">
            <h3>{title}</h3>
            <input type="radio" onClick={clicked}></input>
        </div>
    )
}

export default FilterItem;
