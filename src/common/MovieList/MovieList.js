import MovieCard from '../MovieCard';

import './MovieList.scss';

function MovieList({movies, vertical}) {
  const renderList = () => {
    return movies.map(m => 
      <li className="list-item" key={m.id}>
        <MovieCard movie={m} />
      </li>  
    )
  }

  return (
    <ul className={"movie-list " + (vertical ? 'vertical' : '')}>
      {renderList()}
    </ul>
  );
}

export default MovieList;
