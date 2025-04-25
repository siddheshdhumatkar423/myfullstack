import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // TailwindCSS import
import App from './App';  // Main App component

// React 18+ uses ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
