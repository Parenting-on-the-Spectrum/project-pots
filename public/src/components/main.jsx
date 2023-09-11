// react components and functions go here
import React from 'react';
// jsx components go here
import Header from './header/header.jsx';
import Footer from './footer.jsx';
import Mission from './mission.jsx';
import CaregiverVideos from './vidComps/caregiverVideos.jsx';

import { Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Main = () => {
  return (
    <div>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} align="center">
        Welcome!
      </Typography>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} padding="1%" align="center">
        We are Parenting on the Spectrum
      </Typography>
      <Mission />
      <Footer />
    </div>
  )

}

export default Main;