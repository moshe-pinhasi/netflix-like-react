import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

import AllCategories from '../AllCategories'
import MovieCategory from '../MovieCategory'

import './Movies.scss';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Movies({searchVisibilty, onToggleLiked}) {
  useEffect(searchVisibilty)
  
  const query = useQuery();
  const category = query.get('cat')

  return (
    <div className="movies">
      {
        category ? 
        <MovieCategory category={category} onToggleLiked={onToggleLiked} /> :
        <AllCategories onToggleLiked={onToggleLiked}/>
      }
    </div>
  );
}

export default Movies;
