import { useEffect } from 'react';
// import {MovieList} from '../../common';

import './MyMovies.scss';


function MyMovies({searchVisibilty}) {
  useEffect(searchVisibilty)

  return (
    <div className="my-movies">
      my movies
    </div>
  );
}

export default MyMovies;