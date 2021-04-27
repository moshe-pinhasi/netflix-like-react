import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {SideNav, AppHeader} from './common'
import {Dashboard, Movies, MyMovies, Settings} from './views'

import './App.scss';

function App() {
  
  const [state, setState] = React.useState({
    mobileOpen: false,
  });
  
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setState({ ...state, mobileOpen: open });
  };
  
  return (
    <div className="app">
      <Router>
        <AppHeader toggleDrawer={toggleDrawer} />
        <div className="app-content">
          <Switch>
            <Route path="/dashboard"><Dashboard /></Route>
            <Route path="/movies"><Movies /></Route>
            <Route path="/my-movies"><MyMovies /></Route>
            <Route path="/settings"><Settings /></Route>
            <Redirect to='/dashboard' />
          </Switch>
        </div>

        <SideNav show={state.mobileOpen} closeDrawer={toggleDrawer(false)}/>
      </Router>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>


<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */