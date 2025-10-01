import './WeatherForecast.css';
import PropTypes from 'prop-types';
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';
import WeatherData from '../WeatherData/WeatherData.jsx';

// destructuring props directly in the function parameter list
const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className='weather'>
        <WeatherIcon img={img} imgAlt={imgAlt} />
        <WeatherData day={day} conditions={conditions} time={time} />

      {/* <h2>{ day }</h2>
      <img src={ img } alt={ imgAlt } />
      <p><span>conditions: </span>{ conditions }</p>
      <p><span>time: </span>{ time }</p> */}
    </div>
  );
};

WeatherForecast.propTypes = {
  day: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  conditions: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default WeatherForecast;