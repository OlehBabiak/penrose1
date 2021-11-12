import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/Triangle.png'
import MenuItems from "./Menu";

function Header(props) {
    return (
        <div className={styles['header-wrapper']}>
            <div className={styles['logo-wrapper']}>
                <img src={logo} alt='Logo'/>
                <div className={styles['logo-text']}>penrose</div>
            </div>
            <MenuItems/>
        </div>
    );
}

export default Header;