import PropTypes from 'prop-types';

const WeatherData = ({ day, conditions, time }) => {
    return (
    <div>
        <h2>{day}</h2>
        <p><span>conditions: </span>{conditions}</p>
        <p><span>time: </span>{time}</p>
    </div>
    )
};

WeatherData.propTypes = {
    day: PropTypes.string.isRequired,
    conditions: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default WeatherData;