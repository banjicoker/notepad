import React from 'react';
import ReactDOM from 'react-dom';
import App from './apps';
import './index.css';

// Render the App component into the root DOM node
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
