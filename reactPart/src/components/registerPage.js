/**
 * Created by vasy1 on 7/25/2016.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Input = require('./common/textInput');
var PassInput = require('./common/passwordInput');

var Register = React.createClass({
    getInitialState: function () {
        return {
            username: null,
            password: null,
            email: null
        };
    }
    , userChangeHandler: function (event) {
        this.setState({username: event.target.value});
    },
    passwordChangeHandler: function (event) {
        this.setState({password: event.target.value});
    },
    passwordValidChangeHandler: function (event) {
        this.setState({passwordValid: event.target.value});
    },
    emailChangeHandler: function (event) {
        this.setState({email: event.target.value});
    },
    formSubmitHandler: function (event) {
        event.preventDefault();
        console.log(this.state);
        if (this.state.password === this.state.passwordValid) {
            $.ajax({
                url: 'http://127.0.0.1:8000/api/v1/users/'
                , type: 'POST'
                , data: this.state
            }).then(function (data) {
                sessionStorage.setItem('authToken', data.token);
                //redirect to homepage
            });
        } else {
            toastr.warning("Passwords don't match");
        }
    },
    render: function () {
        return (
            <div className="text-center jumbotron z-depth-2">
                <form>
                    <img src={'Images/logo1.png'} className="logo-resp"/>
                    <Input type="text"
                           name="username"
                           placeholder="Username"
                           inputChangeHandler={this.userChangeHandler}
                    />
                    <Input type="email"
                           name="email"
                           placeholder="Email"
                           inputChangeHandler={this.emailChangeHandler}/>
                    <PassInput type="password"
                               name="password"
                               placeholder="Password"
                               passwdChangeHandler={this.passwordChangeHandler}
                    />
                    <PassInput type="password"
                               name="password2"
                               placeholder="Repeat Password"
                               passwdChangeHandler={this.passwordValidChangeHandler}
                    />
                    <input type="Submit"
                           className="waves-effect waves-light btn"
                           value="Register"
                           onClick={this.formSubmitHandler}/>
                </form>
            </div>
        );
    }

});

module.exports = Register;
