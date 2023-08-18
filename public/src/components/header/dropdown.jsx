import * as React from 'react';
import { List, ListItem, ListItemText, MenuItem, Menu } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

const options = [
  'Menu',
  (<Link color="inherit" underline="none" href="/kidVideosPage">Videos for Kids</Link>),
  (<Link color="inherit" underline="none" href="/caregiverPage">Videos for Caregivers</Link>),
  (<Link color="inherit" underline="none" href="/tipsPage">Tips & Tricks</Link>),
  (<Link color="inherit" underline="none" href="/resourcePage">Resources</Link>)
];

let key = 0;

export default function SimpleListMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <List
        component="nav"
        aria-label="Device settings"
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary={<MenuIcon />}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={key++}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => {
              handleMenuItemClick(event, index);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
