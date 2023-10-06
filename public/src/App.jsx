// react components and functions go here
import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
// jsx components go here
import Header from './components/header/header.jsx';
import About from './components/people/about.jsx';
import TipsTricks from './components/tips/tipstricks.jsx';
import Resources from './components/recComps/resources.jsx';
import KidVideos from './components/vidComps/kidVideos.jsx';
import CaregiverVideos from './components/vidComps/caregiverVideos.jsx';
import Main from './components/main.jsx';
import Toggle from './components/header/toggle.jsx';
import Fade from '@mui/material/Fade';
// MUI components
import { Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// pictures
import logo from './images/copy.jpeg';
import pic from './images/asd.jpg';
import cube from './images/cube.jpg';


const App = () => {
  const [mode, setMode] = useState(localStorage.getItem('theme'));

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  });


  return (
    <Fade in={true}>
      <div style={{
        backgroundImage: `url(${cube})`,
        backgroundSize: '20%',
        overflow: 'hidden'
      }}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <center><a href="/"><img src={logo} display="flex-center" alt="logo"
            justify-content="center" style={{ width: '25%', height: '25%', borderRadius: 15 }}></img></a></center>
          <Toggle mode={mode} setMode={setMode} />
          <Header />
            <Routes>
              <Route path="/" element={<Main pic={pic} />} />
              <Route path="/aboutPage" element={<About />} />
              <Route path="/kidVideosPage" element={<KidVideos />} />
              <Route path="/resourcePage" element={<Resources />} />
              <Route path="/tipsPage" element={<TipsTricks />} />
              <Route path="/caregiverPage" element={<CaregiverVideos />} />
            </Routes>
        </ ThemeProvider>
      </div>
    </Fade>
  )
}

export default App;