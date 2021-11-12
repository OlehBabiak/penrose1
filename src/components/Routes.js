import React from 'react';
import NewCollection from "./Main/Collections/NewCollection";
import Women from "./Header/Menu/Store/Women";
import Men from "./Header/Menu/Store/Men";
import Kids from "./Header/Menu/Store/Kids";
import Contacts from "./Main/Contacts/Contacts";
import Main from "./Main/Home/Main";
import {Redirect, Route, Switch} from "react-router-dom";

function Routes(props) {
    return (
        <>
            <Switch>
                <Route path="/new-collection" component={NewCollection}/>
                <Route path="/women" component={Women}/>
                <Route path="/men" component={Men}/>
                <Route path="/kids" component={Kids}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/" component={Main}/>
                <Route>
                    <Redirect to='/'/>
                </Route>
            </Switch>
        </>
    );
}

export default Routes;