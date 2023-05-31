import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';

const node = document.getElementById('root');
const root = createRoot(node);
root.render(<App />);