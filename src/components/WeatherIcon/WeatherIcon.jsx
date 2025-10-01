import PropTypes from 'prop-types';

const WeatherIcon = ({img, imgAlt }) => {
    return <img src={img} alt={imgAlt} />;
};

WeatherIcon.propTypes = {
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
};

export default WeatherIcon;