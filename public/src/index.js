import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';

// create root node and render App to it
const node = document.getElementById('root');
const root = createRoot(node);
root.render(<App />);