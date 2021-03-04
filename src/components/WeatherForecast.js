import React from 'react';

const WeatherForecast = ({ weather }) => {

  console.log(weather)
  if (weather !== '') {
    const forecast = weather.data;
    const renderedForecast = forecast.map(day => {
      return (
        <div key={forecast.indexOf(day)}>
          <p>{day.temp}ºC</p>
        </div>
      )
    })
    return (
      <div>
        <h3>3 Days Forecast for: {weather.city_name}, {weather.country_code} </h3>
        {renderedForecast}
      </div>
    )
  } else {
    return null
  }
    
   

  //         <img src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`} alt={day.weather.description}/>

};


export default WeatherForecast