// react components and functions go here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// jsx components go here
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import { Box, Typography, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const [page, setPage] = useState('home')

  return (
    <div >
      {page === 'home' ?
        <div>
          <Header />
          Here is a body
          <Footer setPage={setPage} />
        </div>
        : null
      }
      {page === 'social' ?
        <div>
          HARGLEBARGLE
        </div>
        : null
      }
    </div>
  )



}

export default App;