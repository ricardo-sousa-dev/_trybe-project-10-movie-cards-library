import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import PropTypes from 'prop-types';
import Rating from './Rating';
<<<<<<< HEAD

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <section className="movie-card-body">
          <img src={ movie.imagePath } alt={ movie.title } className="movie-card-image" />
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.storyline }</p>
          <Rating className="rating" rating={ movie.rating } />
        </section>
      </div>
=======
=======
import PropTypes from 'prop-types';
>>>>>>> 10e90c6 (Resolve o requisito 11)
=======
>>>>>>> fdac108 (Resolve o requisito 13 e 14)

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // linha 10 MovieList
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating rating={ rating } />
<<<<<<< HEAD
      </section>
>>>>>>> 733ccde (Resolve o requisito 4)
=======
      </div>
>>>>>>> f10fbae (Corrige alguns erros)
    );
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 10e90c6 (Resolve o requisito 11)
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
<<<<<<< HEAD
<<<<<<< HEAD
    rating: PropTypes.number,
=======
>>>>>>> 10e90c6 (Resolve o requisito 11)
=======
    rating: PropTypes.number,
>>>>>>> fdac108 (Resolve o requisito 13 e 14)
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

<<<<<<< HEAD
=======
>>>>>>> 733ccde (Resolve o requisito 4)
=======
>>>>>>> 10e90c6 (Resolve o requisito 11)
export default MovieCard;
