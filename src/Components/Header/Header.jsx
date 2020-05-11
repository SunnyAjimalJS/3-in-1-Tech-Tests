import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
    render() {
        return (
            <>
            <header className={styles.appHeader}>
                <h1>3-in-1 React Tech Tests</h1>
                <span className={styles.bars}>
                    <FontAwesomeIcon icon={faBars} onClick={this.props.toggleMenu} />
                </span>
            </header>
            <div className={styles.subHeader}>
                 <h4>To submit my solution to this 3-in-1 Tech Test I was instructed to have these challenges all in one app using Routing to navigate between them</h4>
            </div>
            </>
        )
    }
    
}
Header.propTypes = {
    toggleMenu: PropTypes.func.isRequired
}