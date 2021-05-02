import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {SideNav, AppHeader, LoginModal} from './common'
import {Dashboard, Movies, MyMovies, Settings, MovieCategory} from './views'
import {storage} from './services/storageService'

import {SearchContext, UserContext} from './context'

import {theme} from './assets/theme'
import {ThemeProvider} from '@material-ui/core/styles';

import './App.scss';

function App() {
  
  const [state, setState] = useState({
    mobileOpen: false,
  });
  const [showSearch, setSearchVisibilty] = useState(false);
  const [user, setUser] = useState(() => storage.load('user')); // lazy initialization
  const [showLoginModal, openLoginModel] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setState({ ...state, mobileOpen: open });
  };

  const onLogin = (user) => {
    setUser(user)
    storage.save('user', user)
    openLoginModel(false)
  }

  const onLogout = () => {
    setUser(null)
    storage.remove('user')
  }

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={user}>
          <Router>
            <SearchContext.Provider value={showSearch}>
              <AppHeader toggleDrawer={toggleDrawer} 
                        handleLogin={() => openLoginModel(true)}
                        handleLogout={onLogout}/>
            </SearchContext.Provider>
            <div className="app-content">
              <Switch>
                <Route path="/dashboard"><Dashboard  searchVisibilty={() => setSearchVisibilty(false)}/></Route>
                <Route exact path="/movies"><Movies searchVisibilty={() => setSearchVisibilty(false)}/></Route>
                <Route path="/movies/:id"><MovieCategory searchVisibilty={() => setSearchVisibilty(false)}/></Route>
                <Route path="/my-movies"><MyMovies searchVisibilty={() => setSearchVisibilty(true)}/></Route>
                <Route path="/settings"><Settings searchVisibilty={() => setSearchVisibilty(false)}/></Route>
                <Redirect to='/dashboard' />
              </Switch>
            </div>

            <SideNav show={state.mobileOpen} closeDrawer={toggleDrawer(false)}/>
          </Router>
        </UserContext.Provider>

        {showLoginModal && 
          (<LoginModal show={showLoginModal} 
                    handleClose={() => openLoginModel(false)}
                    handleSubmit={onLogin}/>)
        }
      </ThemeProvider>
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