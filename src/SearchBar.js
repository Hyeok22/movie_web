import React from "react";
import "./SearchBar.css"

function SearchBar() {
    return (
      <div className="searchBar">
          <input
              id="pac-input"
              className="search"
              type="text"
              placeholder="..."
          />
      </div>
    );
}

export default SearchBar;