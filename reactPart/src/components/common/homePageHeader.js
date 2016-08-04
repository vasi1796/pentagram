"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var HomeHeader = React.createClass({
    render: function () {
        return (
            <nav className="homeNav">
                <div className="nav-wrapper">
                    <div className="container">
                        <img src={'Images/logo1.png'} className="brand-logo center homeLogo"/>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = HomeHeader;
/**
 * Created by vasy1 on 7/28/2016.
 */
