// react components and functions go here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// jsx components go here
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Mission from './components/mission.jsx';
import { Box, Typography, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <div>
      {page === 'home' ?
        <div>
          <Header />
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} align="center">
            Welcome!
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} padding="1%" align="center">
            We are Parenting on the Spectrum
            </Typography>
          <Footer setPage={setPage} />
        </div>
        : null
      }
      {page === 'mission' ?
        <div>
          <Mission />
        </div>
        : null
      }
    </div>
  )



}

export default App;