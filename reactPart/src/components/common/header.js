"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default navbar-mini">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="login">Login</Link></li>
                        <li><Link to="register">Register</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
