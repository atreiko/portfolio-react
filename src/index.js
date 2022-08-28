import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import 'normalize.css';
import './index.css';
// hashType='hashbang'
 // "homepage": "https://atreiko.github.io/portfolio-react",
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
