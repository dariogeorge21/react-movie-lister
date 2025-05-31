import React from 'react';

function SearchBar({ searchTerm, onSearchChange, onClear }) {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      onClear();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for movies, TV shows, or episodes..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        autoFocus
      />
    </div>
  );
}

export default SearchBar;
