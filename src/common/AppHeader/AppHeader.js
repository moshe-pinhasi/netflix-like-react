import {NavLink} from "react-router-dom";

import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './AppHeader.scss'

function AppHeader({toggleDrawer}){
  return (
    <header className="app-header">
      <NavLink to="/dashboard">dashboard</NavLink>
      <NavLink to="/my-movies">my-movies</NavLink>
      <NavLink to="/movies">movies</NavLink>
      <NavLink to="/settings">settings</NavLink>

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

      <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
    </header>
  )
}

export default AppHeader;