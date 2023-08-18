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
  const [mode, setMode] = useState(localStorage.getItem('theme'));

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <center><a href="/"><img src={logo} display="flex-center"
          justify-content="center" style={{ width: '25%', height: '25%' }}></img></a></center>
        <Toggle mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutPage" element={<About />} />
          <Route path="/kidVideosPage" element={<KidVideos />} />
          <Route path="/resourcePage" element={<Resources />} />
          <Route path="/tipsPage" element={<TipsTricks />} />
          <Route path="/caregiverPage" element={<CaregiverVideos />} />
        </Routes>
      </ ThemeProvider>
    </div>
  )
}

export default App;