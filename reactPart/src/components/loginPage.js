"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Input = require('./common/textInput');
var PassInput = require('./common/passwordInput');
var Header = require('./common/header');

var Login = React.createClass({
    getInitialState: function () {
        return {
            username: null,
            password: null
        };
    }
    , userChangeHandler: function (event) {
        this.setState({username: event.target.value});
    },
    passwordChangeHandler: function (event) {
        this.setState({password: event.target.value});
    },
    formSubmitHandler: function (event) {
        event.preventDefault();
        console.log(this.state);
        if (this.state.username == null) {
            toastr.error("Username empty");
        } else if (this.state.password == null) {
            toastr.error("Password empty");
        } else {
            $.ajax({
                url: 'http://127.0.0.1:8000/api/v1/login/'
                , type: 'POST'
                , data: this.state
            }).then(function (data) {
                sessionStorage.setItem('authToken', data.token);
                Router.HashLocation.push('homePage');
                //redirect to homepage
            });
        }
    },
    render: function () {
        document.body.style.background = "url('/Images/bg.jpg') no-repeat fixed center";
        return (
            <div>
                <Header/>
                <div className="text-center jumbotron z-depth-2 formWidth">
                    <form>
                        <img src={'Images/logo1.png'} className="logo-resp"/>
                        <Input placeholder="Username"
                               name="username"
                               inputChangeHandler={this.userChangeHandler}
                        />
                        <PassInput placeholder="Password"
                                   name="password"
                                   passwdChangeHandler={this.passwordChangeHandler}
                        />
                        <input type="Submit"
                               className="btn waves-effect waves-light"
                               value="Login"
                               onClick={this.formSubmitHandler}/>
                    </form>
                </div>
                <div className="text-center jumbotron z-depth-2 accountMessage">
                    <p id="accountMessage">Don't have an account?<br/>
                        <Link to="register"> Sign Up</Link></p>
                </div>
            </div>
        );
    }

});

module.exports = Login;
