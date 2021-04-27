// https://material-ui.com/components/drawers/

import React from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import DashboardIcon from '@material-ui/icons/Dashboard';
import MovieIcon from '@material-ui/icons/Movie';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';

import {NavLink} from "react-router-dom";

import './SideNav.scss';

function SideNav(props) {

  const pages = [
    {title: 'Dashboard', route: '/dashboard', CmpIcon: DashboardIcon}, 
    {title: 'All Movies', route: '/movies', CmpIcon: MovieIcon}, 
    {title: 'My Movies', route: '/my-movies', CmpIcon: FavoriteIcon}
  ];

  const drawer = (
    <div>
      <div>
        <IconButton className='side-nav-link side-nav-color move-right' onClick={props.closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {pages.map(({title, route, CmpIcon}) => (
          <ListItem button key={title}>
            <NavLink to={route} 
              onClick={props.closeDrawer}
              className='side-nav-link side-nav-color' 
              activeClassName="side-nav-link-selected">
              <ListItemIcon><CmpIcon classes={{root: "side-nav-color"}}/></ListItemIcon>
              <ListItemText primary={title} />
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[{title: 'Settings', route: "/settings", CmpIcon: SettingsIcon}]
          .map(({title, route, CmpIcon}) => (
          <ListItem button key={title}>
            <NavLink to={route} 
              onClick={props.closeDrawer}
              className='side-nav-link side-nav-color' 
              activeClassName="side-nav-link-selected">
              <ListItemIcon><CmpIcon classes={{root: "side-nav-color"}}/></ListItemIcon>
              <ListItemText primary={title} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="side-nav">
      <Drawer
          variant="temporary"
          anchor="left"
          open={props.show}
          onClose={props.closeDrawer}
          classes={{
            paper: 'drawer-paper',
            root: 'drawer-root',
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
        {drawer}
      </Drawer>
    </div>
  );
}

export default SideNav;