import React from 'react';

import {MovieList} from '../../common';

import {useDataApi, getConfig} from '../../hooks/useDataApi'

import './Movies.scss';

function Movies() {
  const initialTopRatedConfig = getConfig('/movie/top_rated', {page: 1})
  const [topRatedState, setTopRatedConfig] = useDataApi(initialTopRatedConfig, {results: [], page: 1})

  const initialUpcomingConfig = getConfig('/movie/upcoming', {page: 1})
  const [upcomingState, setUpcomingConfig] = useDataApi(initialUpcomingConfig, {results: [], page: 1})

  const initialPopularConfig = getConfig('/movie/popular', {page: 1})
  const [popularState, setPopularConfig] = useDataApi(initialPopularConfig, {results: [], page: 1})

  const initialNowPlayingConfig = getConfig('/movie/now_playing', {page: 1})
  const [nowPlayingState, setNowPlayingConfig] = useDataApi(initialNowPlayingConfig, {results: [], page: 1})


  return (
    <div className="movies">
      <label>Top Rated</label>
      <MovieList movies={topRatedState.data.results} />

      <label>Upcoming</label>
      <MovieList movies={upcomingState.data.results} />

      <label>Popular</label>
      <MovieList movies={popularState.data.results} />

      <label>Now Playing</label>
      <MovieList movies={nowPlayingState.data.results} />
    </div>
  );
}

export default Movies;
