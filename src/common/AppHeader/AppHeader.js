import {NavLink} from "react-router-dom";

import SearchInput from '../SearchInput'

import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './AppHeader.scss'

function AppHeader({toggleDrawer}){
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

      <div className="app-header-actions">
        <ul>
          <li>login</li>
          <li>user</li>
        </ul>
      </div>
      

      

      {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          edge="start"
        >
          <MenuIcon />
        </IconButton> */}

        {/* <SearchInput /> */}
    </header>
  )
}

export default AppHeader;