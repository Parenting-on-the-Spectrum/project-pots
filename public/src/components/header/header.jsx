import React from 'react';
import DropDown from './dropdown.jsx';
import { Box, Typography, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import Switch from '@mui/material/Switch';

import Toggle from './toggle.jsx';

const Header = (props) => {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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
            <Toggle mode={props.mode} setMode={props.setMode} />
            {/* <Button color="inherit">Login?</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header;