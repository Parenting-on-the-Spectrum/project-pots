import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';

const Header = (props) => {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Header Details </Typography>
  )
}

export default Header;