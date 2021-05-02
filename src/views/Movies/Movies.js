import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

import {MovieList} from '../../common';

import {useDataApi, getConfig} from '../../hooks/useDataApi'

import './Movies.scss';

function Movies({searchVisibilty}) {
  const initialTopRatedConfig = getConfig('/movie/top_rated', {page: 1})
  const [topRatedState, setTopRatedConfig] = useDataApi(initialTopRatedConfig, {results: [], page: 1})

  const initialUpcomingConfig = getConfig('/movie/upcoming', {page: 1})
  const [upcomingState, setUpcomingConfig] = useDataApi(initialUpcomingConfig, {results: [], page: 1})

  const initialPopularConfig = getConfig('/movie/popular', {page: 1})
  const [popularState, setPopularConfig] = useDataApi(initialPopularConfig, {results: [], page: 1})

  const initialNowPlayingConfig = getConfig('/movie/now_playing', {page: 1})
  const [nowPlayingState, setNowPlayingConfig] = useDataApi(initialNowPlayingConfig, {results: [], page: 1})

  useEffect(searchVisibilty)

  const renderList = (title, movies, id) => {
    return (
      <div className="list-container">
        <Link to={{pathname: "/movies/" + id}}><h2>{title}</h2></Link>
        <MovieList movies={movies} />
      </div>
    )
  }

  return (
    <div className="movies">
      {renderList("Top Rated", topRatedState.data.results, 'top_rated')}
      {renderList("Upcoming", upcomingState.data.results, 'upcoming')}
      {renderList("Popular", popularState.data.results, 'popular')}
      {renderList("Now Playing", nowPlayingState.data.results, 'now_playing')}
    </div>
  );
}

export default Movies;
