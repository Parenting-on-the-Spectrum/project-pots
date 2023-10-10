// react components and functions go here
import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import { textVide } from 'text-vide';
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
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
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

  /*
  const text =
    'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';

  const highlightedText = textVide(text);

  console.log(highlightedText)

  return (<div>
    <b>Bion</b>ic <b>Readi</b>ng <b>i</b>s a <b>ne</b>w <b>meth</b>od <b>facilitati</b>ng <b>th</b>e <b>readi</b>ng <b>proce</b>ss <b>b</b>y <b>guidi</b>ng <b>th</b>e <b>eye</b>s <b>throu</b>gh <b>tex</b>t <b>wit</b>h <b>artifici</b>al <b>fixati</b>on <b>poin</b>ts. <b>A</b>s a <b>resu</b>lt, <b>th</b>e <b>read</b>er <b>i</b>s <b>onl</b>y <b>focusi</b>ng <b>o</b>n <b>th</b>e <b>highlight</b>ed <b>initi</b>al <b>lette</b>rs <b>an</b>d <b>let</b>s <b>th</b>e <b>bra</b>in <b>cent</b>er <b>comple</b>te <b>th</b>e <b>wor</b>d. <b>I</b>n a <b>digit</b>al <b>wor</b>ld <b>dominat</b>ed <b>b</b>y <b>shall</b>ow <b>for</b>ms <b>o</b>f <b>readi</b>ng, <b>Bion</b>ic <b>Readi</b>ng <b>aim</b>s <b>t</b>o <b>encoura</b>ge a <b>mor</b>e <b>i</b>n-<b>dep</b>th <b>readi</b>ng <b>an</b>d <b>understand</b>ing <b>o</b>f <b>writt</b>en <b>conte</b>nt.
  </div>)
  */
  return (
    <Suspense fallback={<center>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    </center>}>
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
    </Suspense>
  )
}

export default App;