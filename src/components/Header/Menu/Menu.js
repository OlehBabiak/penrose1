import React from 'react';
import styles from './Menu.module.css'
import {Dropdown, Menu} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {Link} from 'react-router-dom'
import MobileMenu from "./MobileMenu";

function MenuItems({urls}) {

    return (
        <>
            <ul className={styles['menu-list']}>
                <li><Menu.Item><Link to={urls.homeUrl}>HOME</Link></Menu.Item></li>
                <li><Menu.Item><Link to={urls.collectionUrl}>NEW COLLECTIONS</Link></Menu.Item></li>
                <li><Dropdown text='STORE' pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item><Link to={urls.womenUrl}>WOMEN</Link></Dropdown.Item>
                        <Dropdown.Item><Link to={urls.menUrl}>MEN</Link></Dropdown.Item>
                        <Dropdown.Item><Link to={urls.kidsUrl}>KIDS</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown></li>
                <li><Menu.Item><Link to={urls.contactsUrl}>CONTACTS</Link></Menu.Item></li>
            </ul>
            <div className={styles['mobile-menu']}>
                <MobileMenu/>
            </div>
        </>

    );
}

export default MenuItems;