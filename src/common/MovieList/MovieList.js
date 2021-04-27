import MovieCard from '../MovieCard';

import './MovieList.scss';

function MovieList({movies}) {
  const renderList = () => {
    return movies.map(m => 
      <li className="list-item" key={m.id}>
        <MovieCard movie={m} />
      </li>  
    )
  }

  return (
    <ul className="movie-list">
      {renderList()}
    </ul>
  );
}

export default MovieList;
