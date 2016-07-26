/**
 * Created by vasy1 on 7/25/2016.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Input = require('./common/textInput');

var Register = React.createClass({
    getInitialState: function () {
        return {value: 'Username'};
    },
    handleChange: function (event) {
        this.setState({value: event.target.value});
    },
    render: function () {
        return (
            <div className="text-center jumbotron z-depth-2">
                <form>
                    <img src={'Images/logo1.png'} className="logo-resp"/>
                    <Input type="text"
                           name="username" label=""
                           onChange={this.props.OnChange}
                           placeholder="Username"
                    />
                    <Input type="text"
                           name="emal" label=""
                           onChange={this.props.OnChange}
                           placeholder="Email"
                    />
                    <Input type="password"
                           name="password" label=""
                           onChange={this.props.OnChange}
                           placeholder="Password"
                    />
                    <Input type="password"
                           name="password" label=""
                           onChange={this.props.OnChange}
                           placeholder="Repeat Password"
                    />
                    <input type="Submit"
                           className="waves-effect waves-light btn"
                           value="Register"/>
                </form>
            </div>
        );
    }

});

module.exports = Register;
