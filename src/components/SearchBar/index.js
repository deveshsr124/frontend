import React, { useState } from "react";
import "./searchbar.css";

const SearchBar = ({fetchArticles}) => {
  const [value, setValue] = useState("");

    const handleSearch = () => {
      fetchArticles(value);
    };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for news..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
