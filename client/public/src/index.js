import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import global styles
import App from './App';  // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React app inside the 'root' div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);