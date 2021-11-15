import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/Triangle.svg'
import MenuItems from "../Header/Menu/Menu";
import {urls} from '../consnants'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className={styles['header-wrapper']}>
            <div className={styles['logo-wrapper']}>
                <div className={styles.logo}>
                    <img src={logo} alt='Logo'/>
                </div>
                <Link to='./' className={styles['logo-text']}>penrose</Link>
            </div>
            <MenuItems urls={urls}/>
        </div>
    );
}

export default Header;