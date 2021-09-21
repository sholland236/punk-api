import React from "react";
import "./FiltersList.scss";
import FilterItem from "../../components/FilterItem/FilterItem";

const FiltersList = (props) => {
    const { toggleAbv, toggleClassic, toggleAcidity } = props;

    return (
        <div className="filter-items">
            <FilterItem title="High ABV (>6.0%) " clicked={toggleAbv} />
            <FilterItem title="Classic Range " clicked={toggleClassic} />
            <FilterItem title="High Acidity (pH <4) " clicked={toggleAcidity} />
        </div>
    )
}

export default FiltersList;
