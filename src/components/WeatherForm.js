import React from 'react';


const WeatherForm = ({ getWeather }) => {
  return (
    <form className="ui form" onSubmit={getWeather}>
      <div className="field">
        <input type="text" name="city" placeholder="enter a city name"/>
      </div>
      <div className="field">
      <input type="text" name="country" placeholder="enter you country code. e.g: US, AR"/>
      </div>
      <button className="ui button" type="submit" >Submit</button>
    </form>
  )
} 

export default WeatherForm;