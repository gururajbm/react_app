import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import MainLayoutRoute from './../router/main_layout_route';
import DefaultLayoutRoute from './../router/default_layout_route';

import Dashboard from './../pages/dashboard_page';
import SignIn from './../pages/sign_in';
// import NotFound from './../pages/not_found_page';

class RouteRoot extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <DefaultLayoutRoute path="/login" component={SignIn} />
                    <MainLayoutRoute path="/dashboard" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default RouteRoot;
