// react components and functions go here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
// jsx components go here
import Header from './components/header/header.jsx';
import Footer from './components/footer.jsx';
import Mission from './components/mission.jsx';
import About from './components/people/about.jsx';
import TipsTricks from './components/tips/tipstricks.jsx';
import Resources from './components/recComps/resources.jsx';
import KidVideos from './components/vidComps/kidVideos.jsx';
import CaregiverVideos from './components/vidComps/caregiverVideos.jsx';
import Main from './components/main.jsx';
import Toggle from './components/header/toggle.jsx'

import { Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import logo from './copy.jpeg';

const App = () => {
  const [page, setPage] = useState('home');

  const [leaders, setLeaders] = useState([]);
  const [tipTrick, setTipTrick] = useState([]);
  const [rescource, setRescource] = useState([]);
  const [mode, setMode] = useState('dark');
  const [kids, setKids] = useState([]);

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

  let kidVidFetch = () => {
    axios.get('/kideos')
      .then((snips) => {
        setKids(snips.data);
      })
      .catch((err) => err.stack)
  }

  useEffect(() => {
    leads();
    tips();
    recs();
    kidVidFetch();
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div>
      {/* <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <img src={logo} className="logo" onClick={(e) => { e.preventDefault(); setPage('home') }}></img>
        {page === 'home' ?
          <div>
            <Header setPage={setPage} setMode={setMode} mode={mode} />
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
        {page === 'tips' ?
          <div>
            <TipsTricks tips={tipTrick} />
          </div>
          : null
        }
        {page === 'resources' ?
          <div>
            <Resources resources={rescource} />
          </div>
          : null
        }
        {page === 'videos for kids' ?
          <div>
            <KidVideos kids={kids} />
          </div>
          : null
        }
        {page === 'videos for caregivers' ?
          <div>
            <CaregiverVideos />
          </div>
          : null
        }
        {page === 'about' ?
          <div>
            <About people={leaders} />
          </div>
          : null
        }
      </ThemeProvider> */}

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <center><a href="/"><img src={logo} display="flex-center"
          justify-content="center" style={{ width: '25%', height: '25%' }}></img></a></center>
        <Toggle mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutPage" element={<About people={leaders} />} />
          <Route path="/kidVideosPage" element={<KidVideos kids={kids} />} />
          <Route path="/resourcePage" element={<Resources resources={rescource} />} />
          <Route path="/tipsPage" element={<TipsTricks tips={tipTrick} />} />
          <Route path="/caregiverPage" element={<CaregiverVideos />} />
        </Routes>

      </ ThemeProvider>

    </div>
  )

}

export default App;