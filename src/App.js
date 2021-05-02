import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {SideNav, AppHeader, LoginModal} from './common'
import {Profile, Movies, MyMovies, Settings, MovieCategory, MovieDetails} from './views'
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

  const saveUser = (user) => {
    setUser(user)
    storage.save('user', user)
  }

  const onLogin = (user) => {
    saveUser(user)
    openLoginModel(false)
  }

  const onLogout = () => {
    setUser(null)
    storage.remove('user')
  }

  const toggleLiked = (movie) => {
    user.liked[movie.id] ? (delete user.liked[movie.id]) : user.liked[movie.id] = movie
    saveUser({...user})
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
                <Route path="/profile"><Profile  searchVisibilty={() => setSearchVisibilty(false)}/></Route>
                
                <Route exact path="/movies">
                  <Movies searchVisibilty={() => setSearchVisibilty(false)}
                          onToggleLiked={toggleLiked}/>
                </Route>

                <Route path="/movies/:id">
                  <MovieDetails searchVisibilty={() => setSearchVisibilty(false)}
                                onToggleLiked={toggleLiked}/>
                </Route>
                
                <Route path="/my-movies"><MyMovies searchVisibilty={() => setSearchVisibilty(true)}/></Route>
                <Route path="/settings"><Settings searchVisibilty={() => setSearchVisibilty(false)}/></Route>
                <Redirect to='/movies' />
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