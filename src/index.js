import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode basename={process.env.PUBLIC_URL}>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();

