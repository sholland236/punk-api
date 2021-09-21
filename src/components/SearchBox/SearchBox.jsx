import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
    const { label, searchTerm, handleInput } = props;

    return (
        <div>
            <form className="searchbox">
            <label htmlFor="" className="searchbox__label">{label}</label>
            <input type="text" value={searchTerm} onInput={handleInput} className="searchbox__input" />
        </form>
        </div>
    )
}

export default SearchBox;
