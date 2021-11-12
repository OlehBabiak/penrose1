import React from 'react';
import styles from './Menu.module.css'
import { Dropdown, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function MenuItems(props) {


    return (
        <ul className={styles['menu-list']}>
            <li><Menu.Item>HOME</Menu.Item></li>
            <li><Menu.Item>NEW COLLECTIONS</Menu.Item></li>
            <li><Dropdown text='STORE' pointing className='link item'>
                <Dropdown.Menu>
                    <Dropdown.Item>WOMEN</Dropdown.Item>
                    <Dropdown.Item>MEN</Dropdown.Item>
                    <Dropdown.Item>KIDS</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown></li>
            <li><Menu.Item>CONTACTS</Menu.Item></li>
        </ul>
    );
}

export default MenuItems;