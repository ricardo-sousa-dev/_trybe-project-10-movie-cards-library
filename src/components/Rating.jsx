import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
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
    );
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fdac108 (Resolve o requisito 13 e 14)
Rating.propTypes = {
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
};

>>>>>>> fdac108 (Resolve o requisito 13 e 14)
export default Rating;
