import React from 'react';
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

class Rating extends React.Component {
  render() {
    return (
      <p>teste</p>
>>>>>>> 10e90c6 (Resolve o requisito 11)
    );
  }
}

<<<<<<< HEAD
Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

=======
>>>>>>> 10e90c6 (Resolve o requisito 11)
export default Rating;
