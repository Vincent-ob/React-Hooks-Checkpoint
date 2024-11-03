// src/App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';

const App = () => {
  // Predefined list of movies with integer ratings
  const [movies, setMovies] = useState([
    { title: "Inception", description: "A mind-bending thriller", posterURL: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH", rating: 5 },
    { title: "Interstellar", description: "A journey through space and time", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oW0XQlu1lo1G_49M-YwGzKR6rUg-CtflZj07HfbT8d2GwKWg", rating: 4 },
    { title: "The Dark Knight", description: "The rise of the Dark Knight", posterURL: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug", rating: 5 },
    { title: "Tenet", description: "A temporal pincer movement", posterURL: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2BXI-jnVvsXmnfiAjcMKFzNRyjmVwbCTeLwYAuAO6MstrqOZ5", rating: 3 }
  ]);
  
  const [filter, setFilter] = useState({ title: '', rating: '' });
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });

  // Function to add a new movie
  const addMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' }); // Reset form
  };

  // Function to handle filter changes
  const handleFilterChange = (value, type) => {
    setFilter({ ...filter, [type]: value });
  };

  // Filter movies based on exact rating and partial title
  const filteredMovies = movies.filter(movie => {
    return (
      (filter.title === '' || movie.title.toLowerCase().includes(filter.title.toLowerCase())) &&
      (filter.rating === '' || movie.rating === parseInt(filter.rating))
    );
  });

  // Form change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  return (
    <div className="app">
      <h1>My Favorite Movies</h1>

      <Filter onFilterChange={handleFilterChange} />

      {/* Add Movie Form */}
      <div className="add-movie-form">
        <input name="title" placeholder="Title" value={newMovie.title} onChange={handleInputChange} required />
        <input name="description" placeholder="Description" value={newMovie.description} onChange={handleInputChange} required />
        <input name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleInputChange} required />
        <input name="rating" type="number" placeholder="Rating" value={newMovie.rating} onChange={handleInputChange} required />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;