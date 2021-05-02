import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import {UserContext} from '../../context';
import {MovieList} from '../../common';

import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

import {useDataApi, getConfig} from '../../hooks/useDataApi'

import './AllCategories.scss';


function AllCategoties({onToggleLiked}) {
  const initialTopRatedConfig = getConfig('/movie/top_rated', {page: 1})
  const [topRatedState] = useDataApi(initialTopRatedConfig, {results: [], page: 1})

  const initialUpcomingConfig = getConfig('/movie/upcoming', {page: 1})
  const [upcomingState] = useDataApi(initialUpcomingConfig, {results: [], page: 1})

  const initialPopularConfig = getConfig('/movie/popular', {page: 1})
  const [popularState] = useDataApi(initialPopularConfig, {results: [], page: 1})

  const initialNowPlayingConfig = getConfig('/movie/now_playing', {page: 1})
  const [nowPlayingState] = useDataApi(initialNowPlayingConfig, {results: [], page: 1})
  
  const user = useContext(UserContext);

  const renderList = (title, movies, id) => {
    const actions = ({movie}) => {
      if (!user) return ""

      const likedClicked = (event) => {
        event.preventDefault()
        onToggleLiked(movie)
      }

      return (
        <div onClick={likedClicked}>
          {user && user.liked[movie.id] ? <Favorite color="primary"/> : <FavoriteBorder />}
        </div>
      )
    }

    return (
      <div className="list-container">
        <Link to={`/movies?cat=${id}&page=1`}><h2>{title}</h2></Link>
        <MovieList movies={movies} Actions={actions} />
      </div>
    )
  }

  return (
    <div className="all-categories">
      {renderList("Top Rated", topRatedState.data.results, 'top_rated')}
      {renderList("Upcoming", upcomingState.data.results, 'upcoming')}
      {renderList("Popular", popularState.data.results, 'popular')}
      {renderList("Now Playing", nowPlayingState.data.results, 'now_playing')}
    </div>
  );
}

export default AllCategoties;
