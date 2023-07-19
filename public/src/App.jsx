// react components and functions go here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// jsx components go here
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Mission from './components/mission.jsx';
import About from './components/About.jsx';

import { Box, Typography, AppBar, Toolbar, Button, IconButton, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import logo from './copy.jpeg';

const App = () => {
  const [page, setPage] = useState('home');
  const [leaders, setLeaders] = useState([]);

  let leads = () => {
    axios.get('/leaders')
    .then((staff) => {
      setLeaders(staff.data);
    })
    .catch((err) => err.stack)
  }

  useEffect(() => {
    leads();
  }, []);

  return (
    <div>
      <img src={logo} className="logo" onClick={(e) => {e.preventDefault(); setPage('home')}}></img>
      {page === 'home' ?
        <div>
          <Header />
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} align="center">
            Welcome!
          </Typography>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} padding="1%" align="center">
            We are Parenting on the Spectrum
          </Typography>
          <Mission/>
          <Footer setPage={setPage} />
        </div>
        : null
      }
      {page === 'about' ?
        <div>
          <About people={leaders}/>
        </div>
        : null
      }
    </div>
  )

}

export default App;