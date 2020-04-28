import React, { Component } from 'react';
import { Router, Redirect, globalHistory } from "@reach/router";
import Football from "../Components/Football-TestTest/index";
import Quiz from "../Components/Quiz-TechTest/index";
import WeatherAPI from "../Components/WeatherAPI-TechTest/index";

const NotFound = () => (globalHistory.navigate("/"));

export default class Routes extends Component {
    render(){
        return(
            <Router>
                <Football path="football" />
                <Quiz path="quiz" />
                <WeatherAPI path="weatherapi" />

            </Router>
        )
    }
    
}
