import React from "react";

const SearchPokemon = () => {
    return (
        <div className="form-group">
            <label htmlFor="search" className="text-white">Search Pokemon</label>
            <input type="text" className="form-control" id="search" value="pikachu" />
            <button className="btn btn-primary mt-3">Submit</button>
        </div>
    );
};

export default SearchPokemon;