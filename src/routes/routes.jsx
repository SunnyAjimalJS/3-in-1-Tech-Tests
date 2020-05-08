import React, { Component } from 'react';
import { Router, Redirect, globalHistory } from "@reach/router";
import Football from "../Components/Football-TechTest/index";
import Quiz from "../Components/Quiz-TechTest/index";
import WeatherAPI from "../Components/WeatherAPI-TechTest/index";
import Main from "../Components/Main/Main";

const NotFound = () => (globalHistory.navigate("/"));

export default class Routes extends Component {
    render(){
        return(
            <Router>
                <Redirect noThrow from="/" to="main" />
                <Main path="main" />
                <Football path="football" />
                <Quiz path="quiz" />
                <WeatherAPI path="weatherapi" />
                <NotFound default />

            </Router>
        )
    }
    
}
