import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './components/HomePage';
import { getBaseUrl } from './config/constants';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router basename={getBaseUrl()}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          {/* Add more routes here as you create new pages */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
