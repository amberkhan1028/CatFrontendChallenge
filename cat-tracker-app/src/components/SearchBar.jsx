import React from "react";

function SearchBar({ search, setSearch, handleSearch }) {
  const handleChange = (e) => {
    const { value } = e.target;
    handleSearch(value);
    setSearch(value);
  };
  return (
    <div className="form-group search-wrapper d-flex align-items-center justify-content-center">
      <input
        type="search"
        placeholder="Search cats by name..."
        className="form-control"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
