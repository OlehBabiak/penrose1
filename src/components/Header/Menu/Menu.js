import React from 'react';
import styles from './Menu.module.css'
import {Dropdown} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {NavLink} from 'react-router-dom'
import MobileMenu from "./MobileMenu";

function MenuItems({urls}) {

    return (
        <>
            <ul className={styles['menu-list']}>
                <NavLink to={urls.homeUrl}>HOME</NavLink>
                <NavLink to={urls.collectionUrl}>NEW COLLECTIONS</NavLink>
                <Dropdown style={{
                    letteSpacing: '0.9px',
                    color: '#C445F4',
                    textTransform: 'uppercase',
                    opacity: 1,
                    listStyleType: 'none',
                    textAlign: 'left',
                    padding: '12px',
                    font: 'normal normal 600 18px/23px Source Sans Pro',
                }} text='STORE' pointing className='link item'>
                    <Dropdown.Menu className={styles['dropdown-list']}>
                        <Dropdown.Item><NavLink className={styles['dropdown-list-item']} to={urls.womenUrl}>WOMEN</NavLink></Dropdown.Item>
                        <Dropdown.Item><NavLink className={styles['dropdown-list-item']} to={urls.menUrl}>MEN</NavLink></Dropdown.Item>
                        <Dropdown.Item><NavLink className={styles['dropdown-list-item']} to={urls.kidsUrl}>KIDS</NavLink></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
               <NavLink to={urls.contactsUrl}>CONTACTS</NavLink>
            </ul>
            <div className={styles['mobile-menu']}>
                <MobileMenu/>
            </div>
        </>

    );
}

export default MenuItems;