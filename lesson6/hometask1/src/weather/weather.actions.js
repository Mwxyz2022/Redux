import fetchWeatherDataList from './weather.gateway'

export const GET_WEATHER_DATA = 'GET_WEATHER_DATA'

export const weatherDataAction = weatherData => ({
    type: GET_WEATHER_DATA,
    payload: {
        weatherData,
    },
})

export const getWeatherData = () =>
    function (dispatch) {
        fetchWeatherDataList().then(data => {
            dispatch(weatherDataAction(data))
        })
    }
