import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h2>Get inspired</h2>
      <div className="sortBy">
        <span className="sortBy__label">Sort by</span>
        <select name="sortBy__dropdown">
          <option value="lastUpdated">Last Updated</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
