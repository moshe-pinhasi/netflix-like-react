import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {MovieList} from '../../common';

import {useDataApi, getConfig} from '../../hooks/useDataApi'

import './MovieCategory.scss';

function MovieCategory({searchVisibilty}) {
  useEffect(searchVisibilty)

  const { id } = useParams()
  const ENDPOINT = `/movie/${id}`
  const category = id.replace("_", " ")

  const initialConfig = getConfig(ENDPOINT, {page: 1})
  const [state, setConfig] = useDataApi(initialConfig, {results: [], page: 1})

  const nexPage = () => {
    const config = getConfig(ENDPOINT, {page: state.data.page +1})
    setConfig(config)
  }

  return (
    <div className="movie-category">
      <h2>{category}</h2>
      <MovieList movies={state.data.results} vertical={true} />
      <button onClick={nexPage}>next page</button>
    </div>
  );
}

export default MovieCategory;
