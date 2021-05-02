import MovieCard from '../MovieCard';
import {NavLink} from "react-router-dom";
import './MovieList.scss';

function MovieList({movies, vertical, Actions}) {
  const renderList = () => {
    return movies.map(m => 
      <li className="list-item" key={m.id}>
        <NavLink to={`/movie/${m.id}`}>
          <MovieCard movie={m} />
          {Actions && <div className="list-item-actions"><Actions movie={m} /></div>}
        </NavLink>
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
