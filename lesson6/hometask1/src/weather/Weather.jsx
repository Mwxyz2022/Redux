import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { weatherDataSelector } from './weather.selector'
import * as weatherActions from './weather.actions'

const Weather = ({ getWeatherData, weatherData }) => {
    useEffect(() => {
        getWeatherData()
    }, [])

    if (!weatherData) {
        return null
    }

    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {weatherData.map(data => (
                    <li key={data.id} className="city">
                        <span className="city__name">{data.name}</span>
                        <span className="city__temperature">{`${data.temperature} F`}</span>
                    </li>
                ))}
            </ul>
        </main>
    )
}

const mapState = state => ({
    weatherData: weatherDataSelector(state),
})

const mapDispatch = {
    getWeatherData: weatherActions.getWeatherData,
}

export default connect(mapState, mapDispatch)(Weather)
