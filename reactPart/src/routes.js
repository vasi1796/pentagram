"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route>
        <Route name="app" path="/" handler={require('./components/app')}>
            <DefaultRoute handler={require('./components/loginPage')}/>
            <NotFoundRoute handler={require('./components/notFoundPage')}/>
            <Route name="login" handler={require('./components/loginPage')}/>
            <Route name="register" handler={require('./components/registerPage')}/>
            <Route name="feed" handler={require('./components/new')}/>
            <Route name="oldFeed" handler={require('./components/homePage')}/>
        </Route>
    </Route>
);

module.exports = routes;
