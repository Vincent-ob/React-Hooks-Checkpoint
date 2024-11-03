// src/Filter.js
import React from 'react';

const Filter = ({ onFilterChange }) => {
  const handleTitleChange = (e) => onFilterChange(e.target.value, 'title');
  const handleRatingChange = (e) => onFilterChange(e.target.value, 'rating');

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleTitleChange}
      />
      <select onChange={handleRatingChange}>
        <option value="">All Ratings</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

export default Filter;