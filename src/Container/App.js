import React, { Component } from 'react';
import Routes from "../routes/routes";
import { Link } from "@reach/router";
import Football from "../Components/Football-TestTest/Football";


export default class App extends Component {
  render(){
    return(
    <main>
      <p>Container Works!!</p>
      <Routes />
      <Link to="/football" route="/football">Football Page</Link>
      <Link to="/quiz" route="/quiz">Quiz Page</Link>
      <Link to ="/weatherapi" route="weatherapi">Weather API Page</Link>
      
    </main>)
  }
}