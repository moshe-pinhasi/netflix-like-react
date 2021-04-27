import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

import {getImagePath} from '../../services/imageService'

import './MovieCard.scss';

function MovieCard({movie, children}) {

  return (
    <Card className="movie-card">
      <CardActionArea>
        <CardMedia
          className="movie-card-media"
          image={getImagePath(movie.poster_path)}
          title={movie.title}
        />
      </CardActionArea>
      <CardActions>
        {children}
      </CardActions>
    </Card>
  );
}

export default MovieCard;
