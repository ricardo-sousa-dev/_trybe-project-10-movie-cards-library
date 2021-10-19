<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
<<<<<<< HEAD
import MovieCard from './MovieCard';
=======
>>>>>>> 4952764 (Resolve o requisito 3)
=======
import PropTypes from 'prop-types'; // biblioteca
import MovieCard from './MovieCard';
>>>>>>> 733ccde (Resolve o requisito 4)

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
<<<<<<< HEAD
<<<<<<< HEAD

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
=======
    console.log(movies);
    return (
      <p>teste</p>
>>>>>>> 4952764 (Resolve o requisito 3)
=======
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
>>>>>>> 733ccde (Resolve o requisito 4)
    );
  }
}

MovieList.propTypes = {
<<<<<<< HEAD
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;// implement MovieList component here
=======
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
>>>>>>> 4952764 (Resolve o requisito 3)
=======
// implement MovieList component here
>>>>>>> 1b59841 (Revert "[Jaqueline Silva] Project Movie Cards Library")
