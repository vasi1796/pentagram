"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Input = require('./common/textInput');

var Login = React.createClass({
    render: function () {
        return (
            <div className="text-center jumbotron z-depth-2">
                <form>
                    <img src={'Images/logo1.png'} className="logo-resp"/>
                    <Input className=""
                            type="text"
                           name="username" label=""
                           onChange={this.props.OnChange}
                           placeholder="Username"
                    />
                    <Input type="password"
                           name="password" label=""
                           onChange={this.props.OnChange}
                           placeholder="Password"
                    />
                    <input type="Submit"
                           className="waves-effect waves-light btn"
                           value="Login"/>
                </form>
            </div>
        );
    }

});

module.exports = Login;
