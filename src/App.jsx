// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';  // Import Dashboard
import AddMovieForm from './components/AddMovieForm';  // Import AddMovieForm
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-movie" element={<AddMovieForm />} />
      </Routes>
    </Router>
  );
};

export default App;