import React from 'react';
import DropDown from './dropdown.jsx';
import Toggle from './toggle.jsx';
import { Box, Typography, AppBar, Toolbar, Button, IconButton } from "@mui/material";

const Header = (props) => {
  return (
    <div>
      <Box>
        <AppBar position="static" style={{display: 'flex', flexDirection: 'row',
        alignItems: 'baseline', justifyContent: 'space-between'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <DropDown setPage={props.setPage} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Info
            </Typography>
          </Toolbar>
          <Toggle mode={props.mode} setMode={props.setMode} />
        </AppBar>
      </Box>
    </div>
  )
}

export default Header;