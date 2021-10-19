import React from 'react';
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

class MovieCard extends React.Component {
  render() {
    return (
      <section>
        <p>teste</p>
      </section>
>>>>>>> 733ccde (Resolve o requisito 4)
    );
  }
}

<<<<<<< HEAD
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

=======
>>>>>>> 733ccde (Resolve o requisito 4)
export default MovieCard;
