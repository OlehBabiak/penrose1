import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { urls } from "../../consnants";
import './MobileMenu.css'

const StoreSelect = () => (
    <>
        <Dropdown text='MENU' className='link item' pointing='left' direction='left'>
            <Dropdown.Menu>
                <Dropdown.Item><Link to={urls.homeUrl}>HOME</Link></Dropdown.Item>
                <Dropdown.Item><Link to={urls.collectionUrl}>NEW COLLECTIONS</Link></Dropdown.Item>
                <Dropdown.Item>
                    <Dropdown
                        text='STORE'
                    >
                        <Dropdown.Menu>
                            <Dropdown.Item><Link to={urls.womenUrl}>WOMEN</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={urls.menUrl}>MEN</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={urls.kidsUrl}>KIDS</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item><Link to={urls.contactsUrl}>CONTACTS</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </>
)

export default StoreSelect