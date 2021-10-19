import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import PropTypes from 'prop-types';
import Rating from './Rating';

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

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // linha 10 MovieList
    const { imagePath, title, subtitle, storyline } = movie;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </section>
>>>>>>> 733ccde (Resolve o requisito 4)
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
    rating: PropTypes.number,
=======
>>>>>>> 10e90c6 (Resolve o requisito 11)
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
