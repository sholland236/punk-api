import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../../containers/FiltersList/FiltersList";
import "./NavBar";

const NavBar = (props) => {
    const { searchTerm, handleInput, highAlcohol, toggleAbv, classicRange, toggleClassic, highAcidity, toggleAcidity } = props;

    return (
        <div className="navbar">
            <SearchBox label={"Search for Beers: "} searchTerm={searchTerm} handleInput={handleInput} />
            <FiltersList highAlcohol={highAlcohol} toggleAbv={toggleAbv} classicRange={classicRange} toggleClassic={toggleClassic} highAcidity={highAcidity} toggleAcidity={toggleAcidity} />
        </div>
    )
}

export default NavBar;
