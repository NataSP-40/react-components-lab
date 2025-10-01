import './WeatherForecast.css';

// destructuring props directly in the function parameter list
const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className='weather'>
      <h2>{ day }</h2>
      <img src={ img } alt={ imgAlt } />
      <p><span>conditions: </span>{ conditions }</p>
      <p><span>time: </span>{ time }</p>
    </div>
  );
};

export default WeatherForecast;