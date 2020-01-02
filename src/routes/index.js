import React from 'react';
import {
    Switch,
    // Redirect 
} from 'react-router-dom';
import Sidebar from '../layouts/SlideBar';
import LoginLayout from '../layouts/Login';

import Route from './Route';

import Login from '../pages/Login/index';
import Home from '../pages/Home/index';
import Raspberry from '../pages/Raspberry/index';

export default function Routes() {
    return (
        <Switch>
            <Route
                component={Login}
                exact
                layout={LoginLayout}
                path="/"
            />
            <Route
                component={Home}
                exact
                isPrivate
                layout={Sidebar}
                path="/home"
            />
            <Route
                component={Raspberry}
                exact
                isPrivate
                layout={Sidebar}
                path="/raspberry"
            />
            {/* <Redirect to="/not-found" /> */}
        </Switch>
    );
}