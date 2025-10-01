
import './App.css';
import WeatherForecast from './components/WeatherForecast/WeatherForecast.jsx';

//starter data = each obj represents the weather forecast for a day
  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
      imgAlt: 'sun icon',
      conditions: 'Sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
      imgAlt: 'moon icon',
      conditions: 'Clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'Stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'Overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'Cloudy',
      time: 'Night',
    },
  ];

const App = () => {
// using .map() to iterate over the array of weather forecast objects 
const forecastComponents = weatherForecasts.map((forecast) => (
  // using the spread operator to pass all properties of the forecast object as props to the WeatherForecast component
      <WeatherForecast key={forecast.day} {...forecast} /> // key used to help React identify each component
  ));

  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {forecastComponents}
      </section>
  </>
  )
}


export default App;