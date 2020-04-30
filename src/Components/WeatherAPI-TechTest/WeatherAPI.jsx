/* ## Weather Cards

* Api Doc: https://openweathermap.org/current
* Api Key: 0f33f5c78acf44e7d38b5f6706f6f59d


#### Using the public OpenWeatherMap API, you need to build three cards displaying the current weather data for:

* City of London (city_id: 2643744)
* City of Bristol (city_id: 4749005)
* Rome (city_id: 4219762)


#### The cards need to display: 

1. Temperature
2. Humidity
3. Minimum temperature at the moment 
4. Maximum temperature at the moment

Default is Kelvin, but we love Celsius so can you change the measurement please.  We're interested to see some of your styling skills so please use this challenge to showcase them!
 */

import React, { Component } from 'react';
import WeatherCard from "./WeatherCard/WeatherCard";
import styles from "./WeatherAPI.module.scss";

export default class WeatherAPI extends Component {
    state = {
        city: ["2643744","4749005", "4219762"], 
        cities: {
            london: "2643744", 
            bristol: "4749005",
            rome: "4219762"
        }
    }

    render() {
        return (
            <section className={styles.allCards}>
                {
                    Object.entries(this.state.cities).map((city) => {
                        return (<WeatherCard city={city[1]} />)
                    })
                }
            </section>
        )
    }

}
