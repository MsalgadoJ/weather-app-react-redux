import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.weatherbit.io/v2.0/forecast/',
    params: {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        days: 3
    }
})