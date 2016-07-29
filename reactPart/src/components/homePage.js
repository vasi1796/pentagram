/**
 * Created by vasy1 on 7/28/2016.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var HomeHeader = require('./common/homePageHeader');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var HomePage = React.createClass({
    render: function () {

        document.body.style.background = "#f3f3f3 no-repeat right top";
        return (
            <div>
                <HomeHeader/>
                <div>
                    <div className="fixed-action-btn">
                        <a
                            className="btn-floating btn-large waves-effect waves-light blue"><i
                            className="material-icons">add</i></a>
                    </div>
                    <div className="row text-center photoGrid">
                        <div className="col s10 ">
                            <div className="col s4">
                                <div className="card sticky-action">
                                    <div className="card-image materialboxed">
                                        <img src="Images/pic.jpg"/>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4"><i
                                            className="material-icons right">more_vert</i></span>
                                        <p>Comments</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">Like/Unlike</a>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4"><i
                                            className="material-icons right">close</i></span>
                                        <p>Here you will see the comments.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s4">
                                <div className="card sticky-action">
                                    <div className="card-image materialboxed">
                                        <img src="Images/pic.jpg"/>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4"><i
                                            className="material-icons right">more_vert</i></span>
                                        <p>Comments</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">Like/Unlike</a>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4"><i
                                            className="material-icons right">close</i></span>
                                        <p>Here you will see the comments.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s4">
                                <div className="card sticky-action">
                                    <div className="card-image materialboxed">
                                        <img src="Images/pic.jpg"/>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4"><i
                                            className="material-icons right">more_vert</i></span>
                                        <p>Comments</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">Like/Unlike</a>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4"><i
                                            className="material-icons right">close</i></span>
                                        <p>Here you will see the comments.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
});

module.exports = HomePage;