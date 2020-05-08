import React, { Component } from 'react';
import styles from "./WeatherCard.module.scss";

export default class WeatherCard extends Component{
    state = {
        weatherData: "",
        weather: []
    }

    convertKelvinToCelsius = (kelvin) => {
        let celcius = kelvin - 273.15;
        celcius = Number.parseFloat(celcius).toFixed(0);
        return celcius;
    }

    componentDidMount(){
        let cityID = this.props.city; 
        let weatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=1f920ea0c70e5efd97f29c5f26689d32`
        fetch(weatherURL)
            .then(response => response.json())
            .then(weatherData => {
                this.setState({ 
                    weatherData,
                    weather: weatherData.weather
                })
            })
            .catch(error => console.log(error));
    }

    render(){
        return(
            <section>
                {   !this.state.weather,
                    !this.state.weatherData
                        ? <p></p>
                        : <article>
                            <h1>Weather for: {this.state.weatherData.name}</h1>
                            <p>Current Temperature: {this.convertKelvinToCelsius(this.state.weatherData.main.temp)}<span>&deg;C</span></p>
                            <div className={styles.weatherIcon}>
                                <img src={`http://openweathermap.org/img/w/${this.state.weatherData.weather[0].icon}.png`} alt="icon"></img>
                            </div>

                            <p>Humidity: {this.state.weatherData.main.humidity}%</p>
                            <p>Min Temperature: {this.convertKelvinToCelsius(this.state.weatherData.main.temp_min)}<span>&deg;C</span></p>
                            <p>Max Temperature: {this.convertKelvinToCelsius(this.state.weatherData.main.temp_max)}<span>&deg;C</span></p>
                        </article>
                }
            </section>
        )
    }



}