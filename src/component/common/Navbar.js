// import React libraries
import React from 'react';

// import third-party libraries
import {
  AppBar,
  Badge,
  Grid,
  Box,
  Toolbar,
  Menu, MenuItem,
  Typography,
  Link
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

// import custom CSS
import '../../css/navbar.css';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [msgAnchorEl, setMsgAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleList = (event) => {
    setMsgAnchorEl(event.currentTarget);
  };

  const handleNotification = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  const handleMsgBox = () => {
    setMsgAnchorEl(null);
    //navigate("/chat")
  };

  const handleSearch = () => {
    setMsgAnchorEl(null);
    //navigate("/school/search")
  };

  /**
   *  Render the component
   */
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navbar" position="sticky" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleList}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={msgAnchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(msgAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><Link href="/chat" underline="none">メッセージボックス</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/school/search" underline="none">美容学校検索</Link></MenuItem>
          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
            <img src="/logos/assistdoor_logomark_type2_B.png" alt="logo" />
          </Typography>
          <div>
            <Badge badgeContent={2} color="primary" onClick={handleNotification}>
              <CircleNotificationsIcon />
            </Badge>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl2}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl2)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>XXX学校から新着メッセージが2件来ています</MenuItem>
              <MenuItem onClick={handleClose}>YYY学校から新着メッセージが1件来ています</MenuItem>
            </Menu>


            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>マイページ</MenuItem>
              <MenuItem onClick={handleClose}>サインアウト</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}