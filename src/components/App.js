import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherForecast from './WeatherForecast';
import WeatherBit from '../apis/WeatherBit';

class App extends Component {

  state = { weather: '', error: null, isVisible: false }

  getWeather = async (e) => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    
    const cityValue = city.value;
    const countryValue = country.value;

    if(cityValue) {
      const response = await WeatherBit.get('daily', {
        params: {
          city: cityValue,
          country: countryValue
        }
      })
      
      if(response.status === 204) {
        this.setState({ error: 'City not found'})
      } else {
        this.setState({ weather: response.data, error: null, isVisible: true })
      }
      
    } else {
      this.setState({ error: 'please, enter a city' })
    }
  }

  resetValues = () => {
    this.setState({weather: '', error: null, isVisible: false })
  }

  render() {
    return (
      <div className="ui container">
       
        { this.state.isVisible === true ?
          <div onClick={this.resetValues}>back</div>
        :  <WeatherForm getWeather={this.getWeather} />
        }
        
        { this.state.error === null ?
        <WeatherForecast weather={this.state.weather} />
        : <div> {this.state.error} </div>
        }
        
      </div>
    )
  }
}

export default App;