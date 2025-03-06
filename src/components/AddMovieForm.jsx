// src/components/AddMovieForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Hook for navigation
import './AddMovieForm.css'

const AddMovieForm = () => {
  const navigate = useNavigate();  // To redirect user to dashboard after submission or cancellation
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show an alert and reset the form
    alert('Movie Added!');  // Placeholder action
    navigate('/');  // Navigate back to the Dashboard
  };

  // Handle cancel action (navigate back to Dashboard)
  const handleCancel = () => {
    navigate('/');  // Navigate to the Dashboard
  };

  return (
    <div className="add-movie-form">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Genre:</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
            {/* Add more genres as needed */}
          </select>
        </div>
        <div>
          <label>Release Year:</label>
          <input
            type="number"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Synopsis:</label>
          <textarea
            name="synopsis"
            value={formData.synopsis}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Poster Image URL:</label>
          <input
            type="url"
            name="posterUrl"
            value={formData.posterUrl}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovieForm;