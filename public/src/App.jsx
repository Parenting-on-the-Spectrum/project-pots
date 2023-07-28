// react components and functions go here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// jsx components go here
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Mission from './components/mission.jsx';
import About from './components/people/about.jsx';
import TipsTricks from './components/tips/tipstricks.jsx';
import Resources from './components/recComps/resources.jsx';

import { Box, Typography, AppBar, Toolbar, Button, IconButton, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import logo from './copy.jpeg';

const App = () => {
  const [page, setPage] = useState('home');
  const [leaders, setLeaders] = useState([]);
  const [tipTrick, setTipTrick] = useState([]);
  const [rescource, setRescource] = useState([]);

  let leads = () => {
    axios.get('/leaders')
      .then((staff) => {
        setLeaders(staff.data);
      })
      .catch((err) => err.stack)
  }

  let tips = () => {
    axios.get('/tipstricks')
      .then((tricks) => {
        setTipTrick(tricks.data);
      })
      .catch((err) => err.stack)
  }

  let recs = () => {
    axios.get('/resources')
      .then((info) => {
        setRescource(info.data);
      })
      .catch((err) => err.stack)
  }
  useEffect(() => {
    leads();
    tips();
    recs();
  }, []);

  return (
    <div>
      <img src={logo} className="logo" onClick={(e) => { e.preventDefault(); setPage('home') }}></img>
      {page === 'home' ?
        <div>
          <Header setPage={setPage} />
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} align="center">
            Welcome!
          </Typography>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} padding="1%" align="center">
            We are Parenting on the Spectrum
          </Typography>
          <Mission />
          <Footer setPage={setPage} />
        </div>
        : null
      }
      {page === 'about' ?
        <div>
          <About people={leaders} />
        </div>
        : null
      }
      {page === 'tips' ?
        <div>
          <TipsTricks tips={tipTrick} />
        </div>
        : null
      }
      {page === 'resources' ?
        <div>
          <Resources resources={rescource}/>
        </div>
        : null
      }
      {page === 'videos' ?
        <div>
          videos placeholder
        </div>
        : null
      }
    </div>
  )

}

export default App;