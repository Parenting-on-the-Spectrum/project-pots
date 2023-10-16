import React, {Suspense} from 'react';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";

import { createRoot } from 'react-dom/client';
let firstTheme = localStorage.getItem('pots-theme')
if (firstTheme === undefined || firstTheme === null) {
  localStorage.setItem('pots-theme', 'light');
}

const node = document.getElementById('root');
const root = createRoot(node);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);