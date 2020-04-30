import React, { Component } from 'react';
import NavItem from './NavItem/NavItem';
import styles from "./Navbar.module.scss";
import { CSSTransition } from "react-transition-group";


export default class Navbar extends Component {
    render() {
        return (
            <CSSTransition
                in={this.props.menuIsOpen}
                timeout={400}
                classNames="navShown"
                unmountOnExit
            >
                <nav>
                    <ul className={styles.navList}>
                        <NavItem toggleMenu={this.props.toggleMenu} route="/main" name="Home" />
                        <NavItem toggleMenu={this.props.toggleMenu} route="/football" name="Football Team Picker" />
                        <NavItem toggleMenu={this.props.toggleMenu} route="/weatherapi" name="WeatherAPI - 3 Cities" />
                        <NavItem toggleMenu={this.props.toggleMenu} route="/quiz" name="One Question Quiz" />
                    </ul>
                </nav>

            </CSSTransition>
        )
    }
}