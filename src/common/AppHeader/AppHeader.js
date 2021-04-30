import {useContext, useState} from 'react'

import {NavLink} from "react-router-dom";

import SearchInput from '../SearchInput'
import {SearchContext, UserContext} from '../../context';

import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import './AppHeader.scss'

function AppHeader({toggleDrawer, handleLogin, handleLogout}){
  const search = useContext(SearchContext);
  const user = useContext(UserContext);
  
  const renderLogin = () => {
    return (
      <li>
        <button type="button" onClick={handleLogin}>
          login
        </button>
      </li>
    )
  }

  const renderLogout = () => {
    return (
      <li>
        <button type="button" onClick={handleLogout}>
          logout
        </button>
      </li>
    )
  }

  const renderUser = () => <li>Hello {user.username}</li>

  return (
    <header className="app-header">
      <Hidden smUp implementation="css">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>

      <Hidden xsDown className="app-header-nav" implementation="css">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/my-movies">My Movies</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </Hidden>

      <div className="app-header-search">
        {search && (<SearchInput />)} 
      </div>

      <ul className="app-header-actions">
        {!user && renderLogin()}
        {user && renderUser()}
        {user && renderLogout()}
      </ul>
      

      {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          edge="start"
        >
          <MenuIcon />
        </IconButton> */}
    </header>
  )
}

export default AppHeader;