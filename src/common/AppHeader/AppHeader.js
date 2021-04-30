import {useContext, useState} from 'react'

import {NavLink} from "react-router-dom";

import SearchInput from '../SearchInput'
import {SearchContext, UserContext} from '../../context';

import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

import './AppHeader.scss'

function AppHeader({toggleDrawer, handleLogin, handleLogout}){
  const search = useContext(SearchContext);
  const user = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const renderLogin = <li><Button color="primary" variant="contained" onClick={handleLogin}>login</Button></li>

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className="user-menu"
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NavLink to="/settings">Settings</NavLink>
      </MenuItem>
    </Menu>
  )

  const renderProfile = () => {
    return (
      <li>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={handleProfileMenuOpen}
          >
          <AccountCircle />
        </IconButton>
        </li>
    )
  }

  const renderNotifications = () => {
    return (
      <li>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </li>
    )
  }

  return (
    <header className="app-header">
      <Hidden mdUp implementation="css">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>

      <Hidden smDown className="app-header-nav" implementation="css">
        <NavLink to="/dashboard">Dashboard</NavLink>
        {user && <NavLink to="/my-movies">My Movies</NavLink>}
        <NavLink to="/movies">Movies</NavLink>
      </Hidden>

      <div className="app-header-search">
        {search && (<SearchInput />)} 
      </div>

      <ul className="app-header-actions">
        {!user && renderLogin}
        {user && renderNotifications()}
        {user && renderProfile()}
      </ul>
      {renderMenu}
    </header>
  )
}

export default AppHeader;