import React from 'react';
import {useLocation, useHistory} from "react-router-dom";

import {MovieList} from '../../common';

import { Button } from '@material-ui/core';

import {useDataApi, getConfig} from '../../hooks/useDataApi'

import './MovieCategory.scss';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MovieCategory() {

  const location = useLocation()
  const history = useHistory()
  const query = useQuery();
  const category = query.get('cat')
  const page = query.get('page')

  const ENDPOINT = `/movie/${category}`
  const categoryName = category.replace("_", " ")

  const initialConfig = getConfig(ENDPOINT, {page})
  const [state, setConfig] = useDataApi(initialConfig, {results: [], page})

  const updateLocation = (page) => {
    query.set('page', page)
    location.search = query.toString()
    history.push(location)
  }

  const nextPageHandler = () => {
    const nextPage = state.data.page + 1
    const config = getConfig(ENDPOINT, {page: nextPage})
    setConfig(config)
    updateLocation(nextPage)
  }

  const prevPageHandler = () => {
    const prevPage = state.data.page - 1
    const config = getConfig(ENDPOINT, {page: prevPage})
    setConfig(config)
    updateLocation(prevPage)
  }

  const {results: movies, page: currPage} = state.data
  return (
    <div className="movie-category">
      <h2>{categoryName}</h2>
      <MovieList movies={movies} vertical={true} />
      <div className="actions-contianer">
        {currPage > 1 && 
          <Button color="primary" variant="contained" onClick={prevPageHandler}>Prev page</Button>}
        <Button color="primary" variant="contained" onClick={nextPageHandler}>Next page</Button>
      </div>
    </div>
  );
}

export default MovieCategory;
