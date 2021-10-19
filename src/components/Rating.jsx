import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
<<<<<<< HEAD
      <div className="movie-card-rating">
        <span className="rating ">{ rating }</span>
      </div>
=======
=======
import PropTypes from 'prop-types';
>>>>>>> fdac108 (Resolve o requisito 13 e 14)

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
<<<<<<< HEAD
      <p>teste</p>
>>>>>>> 10e90c6 (Resolve o requisito 11)
=======
      <p className="rating">{ rating }</p>
>>>>>>> fdac108 (Resolve o requisito 13 e 14)
=======
      <div classeName="movie-card-rating">
        <p className="nota">Nota:</p>
        <p className="rating">{ rating }</p>
      </div>
>>>>>>> f10fbae (Corrige alguns erros)
    );
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fdac108 (Resolve o requisito 13 e 14)
Rating.propTypes = {
<<<<<<< HEAD
  rating: PropTypes.number,
};

Rating.defaultProps = {
<<<<<<< HEAD
  rating: 0,
};

=======
>>>>>>> 10e90c6 (Resolve o requisito 11)
=======
  rating: 'Esse filme ainda não foi avaliado',
=======
  rating: PropTypes.number.isRequired,
>>>>>>> f10fbae (Corrige alguns erros)
};

>>>>>>> fdac108 (Resolve o requisito 13 e 14)
export default Rating;
