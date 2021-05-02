import { useEffect } from 'react';
// import {MovieList} from '../../common';

import './MyMovies.scss';

//const [user, setUser] = useState(
//   { name: 'John', email: 'john@email.com', age: 28 }
// );
// setUser((user) = > ({ ...user, name: 'Nathan' }));

function MyMovies({searchVisibilty}) {
  useEffect(searchVisibilty)

  return (
    <div className="my-movies">
      my movies
    </div>
  );
}

export default MyMovies;