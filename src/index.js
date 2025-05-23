// src/index.js or src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Router here
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* ✅ This is your only Router */}
    <App />
  </BrowserRouter>
);
