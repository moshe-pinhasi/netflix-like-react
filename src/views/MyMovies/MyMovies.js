import { useEffect } from 'react';
import {MovieList} from '../../common';

import {useDataApi, getConfig} from '../../hooks/useDataApi'

import './MyMovies.scss';

const ENDPOINT = '/movie/top_rated'

function MyMovies({searchVisibilty}) {
  useEffect(searchVisibilty)

  const initialConfig = getConfig(ENDPOINT, {page: 1})
  const [state, setConfig] = useDataApi(initialConfig, {results: [], page: 1})

  const nexPage = () => {
    const config = getConfig(ENDPOINT, {page: state.data.page +1})
    setConfig(config)
  }

  return (
    <div className="my-movies">
      <MovieList movies={state.data.results} />
      <button onClick={nexPage}>next page</button>
    </div>
  );
}

export default MyMovies;