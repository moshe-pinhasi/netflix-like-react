import { useState, useEffect, useContext } from 'react';
import {useParams} from "react-router-dom";
import {useDataApi, getConfig} from '../../hooks/useDataApi'
import {getImagePath} from '../../services/imageService'

import {UserContext} from '../../context';

import {Alert} from '../../common';

import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import ThumbDown from '@material-ui/icons/ThumbDown';

import './MovieDetails.scss';

function MovieDetails({searchVisibilty, onToggleLiked}) {
  const [alert, setShowAlert] = useState(false)

  useEffect(searchVisibilty)
  const user = useContext(UserContext);
  const { id } = useParams()

  const initialConfig = getConfig(`/movie/${id}`)
  const [state] = useDataApi(initialConfig, {results: {}})

  const showAlert = () => {
    setShowAlert(true)
    setTimeout( () => setShowAlert(false), 2000)
  }

  const renderActions = (movie) => (
    <footer>
      <ul className="actions-container">
        {user.liked[movie.id] && <li className="card-action" onClick={() => onToggleLiked(movie)}>Remove from my list</li>}
        {!user.liked[movie.id] && <li className="card-action" onClick={() => onToggleLiked(movie)}>Add to my list</li>}
        <li className="card-action" onClick={showAlert}><ThumbUpAlt /></li>
        <li className="card-action" onClick={showAlert}><ThumbDown /></li>
      </ul>
    </footer>
  )

  const renderDetails = (movie) => (
    <div className="card">
      <img src={getImagePath(movie.poster_path)} alt={movie.title + ' poster'}/>
      <div className="card-content">
        <div className="card-content-body">
          <h3 className="card-title">{movie.title}</h3>
          <p className="card-subtitle"><small>RELEASE DATE: {movie.release_date}</small></p>
          <p className="card-subtitle"><small>RATING: {movie.vote_average}</small></p>
          <p className="card-desc">{movie.overview}</p>
        </div>
        {user && renderActions(movie)}
      </div>
    </div>
  )

  return (
    <div className="movie-details">
      <div className="page-header">
        <h2>Movie Details</h2>
        <hr />
      </div>
      <main>
        {!state.data && 'No Results'}
        {state.data && renderDetails(state.data)}
      </main>

      {alert && <Alert severity="success">
        Your review sent successfully!
      </Alert>}
    </div>
  );
}

export default MovieDetails;