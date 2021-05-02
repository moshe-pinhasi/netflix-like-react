import { useEffect, useContext } from 'react';
import {UserContext} from '../../context';
import {MovieList} from '../../common';

import './MyMovies.scss';

//const [user, setUser] = useState(
//   { name: 'John', email: 'john@email.com', age: 28 }
// );
// setUser((user) = > ({ ...user, name: 'Nathan' }));

function MyMovies({searchVisibilty}) {
  useEffect(searchVisibilty)
  const user = useContext(UserContext);
  const movies = Object.keys(user.liked).map(id => user.liked[id]);

  return (
    <div className="my-movies">
      <div className="page-header">
        <h2>My Movies</h2>
        <hr />
      </div>
      <main>
        <div className="list-container">
          <MovieList movies={movies} vertical={true} />
        </div>
      </main>

    </div>
  );
}

export default MyMovies;