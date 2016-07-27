"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Input = require('./common/textInput');
var PassInput = require('./common/passwordInput');

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
        $.ajax({
            url: 'http://127.0.0.1:8000/api/v1/login/'
            , type: 'POST'
            , data: this.state
        }).then(function (data) {
            sessionStorage.setItem('authToken', data.token);
            //redirect to homepage
        });
    },
    render: function () {
        return (<div>
                <div className="text-center jumbotron z-depth-2">
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
                               className="waves-effect waves-light btn"
                               value="Login"
                               onClick={this.formSubmitHandler}/>
                    </form>
                </div>
                <div className="text-center jumbotron z-depth-2 accountMessage">
                    <p id="accountMessage">Don't have an account?<br/>
                        <Link to="register"> Sign Up</Link></p>
                </div>
            </div>
        )
            ;
    }

});

module.exports = Login;
