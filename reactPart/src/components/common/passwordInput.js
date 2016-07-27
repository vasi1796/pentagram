"use strict";

var React = require('react');

var Input = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        error: React.PropTypes.string
    },
    render: function () {
        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input type="password"
                           name="password"
                           className="form-control"
                           placeholder={this.props.placeholder}
                           ref={this.props.name}
                           onChange={this.props.passwdChangeHandler}/>
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
});

module.exports = Input;
/**
 * Created by vasy1 on 7/26/2016.
 */
