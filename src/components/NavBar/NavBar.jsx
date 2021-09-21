import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../../containers/FiltersList/FiltersList";
import "./NavBar";

const NavBar = (props) => {
    const { searchTerm, handleInput, toggleAbv, toggleClassic, toggleAcidity } = props;

    return (
        <div className="navbar">
            <SearchBox label={"Search for Beers: "} searchTerm={searchTerm} handleInput={handleInput} />
            <FiltersList toggleAbv={toggleAbv} toggleClassic={toggleClassic} toggleAcidity={toggleAcidity} />
        </div>
    )
}

export default NavBar;
