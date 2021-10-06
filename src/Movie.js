import PropTypes from 'prop-types';

function Movie(){
    return<h1></h1>;
}

Movie.propTypes = { 
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summary: PropTypes.number.isRequired,
    poster: PropTypes.number.isRequired,
};

export default Movie;