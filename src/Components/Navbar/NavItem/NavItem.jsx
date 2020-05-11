import React, { Component } from 'react';
import styles from "./NavItem.module.scss"
;
import { Link } from "@reach/router";
export default class NavItem extends Component {
    render() {
        return (
         <p onClick={this.props.toggleMenu}>
             <Link className={styles.navItem} to={this.props.route}>
                 {this.props.name}
             </Link>
         </p>
        )
    }
}