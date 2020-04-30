import React, { Component } from 'react';
import Routes from "../routes/routes";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

export default class App extends Component {
  state = {
    menuIsOpen: false
  }

  toggleMenu = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
  }
  render(){
    return(
    <main>
      <Header toggleMenu={this.toggleMenu}/>
      <Navbar menuIsOpen={this.state.menuIsOpen} toggeMenu={this.toggeMenu} />
      <Routes />
    </main>)
  }
}