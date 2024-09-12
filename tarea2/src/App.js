// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';  // Importamos la página de inicio

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Aquí agregarás las rutas de otras páginas más adelante */}
      </Routes>
    </Router>
  );
}

export default App;
