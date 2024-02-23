import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // Comment React Strict mode when you use AbortController() while development mode, Loading state not work in Strict mode
  
  // <React.StrictMode>
    <App />
  // </React.StrictMode> 
);
 