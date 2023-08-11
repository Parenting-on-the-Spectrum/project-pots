import React from 'react';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";

import { createRoot } from 'react-dom/client';


const node = document.getElementById('root');
const root = createRoot(node);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);