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
var Input = require('./common/textInput');
var toastr = require('toastr');

var HomePage = React.createClass({
    getInitialState: function () {
        return {
            comment: null,
            images: [
                ['./Images/pic.gif', ['com1', 'com2', 'com3'], 10],
                ['./Images/pic.gif', ['com1', 'com2'], 5],
                ['./Images/pic.gif', [], 8],
                ['./Images/pic.gif', ['com1', 'com2'], 5],
                ['./Images/pic.gif', ['com1', 'com2'], 5],
                ['./Images/pic.gif', ['com1', 'com2'], 5]
            ]
        };

    }
    , onCommentHandler: function (event) {
        this.setState({comment: event.target.value});
    },
    onLikeHandler: function (event) {
        console.log('Like/Unlike button was pressed!');
    },
    onCommentSubmitHandler: function (event) {
        event.preventDefault();
        console.log(this.state);
        if (this.state.comment == null) {
            toastr.error("Comment is empty");
        } else {
            $.ajax({
                url: 'http://127.0.0.1:8000/api/v1/1/comments/'
                , type: 'POST'
                , data: this.comment
            });
        }
    },
    render: function () {

        document.body.style.background = "#f3f3f3 no-repeat right top";
        var likeHandle = this.onLikeHandler;
        var commentHandle = this.onCommentHandler;
        var commentSubmitHandle = this.onCommentSubmitHandler;
        var self = this;
        var tokenNumber = sessionStorage.getItem("authToken");
        if (!tokenNumber) {
            Router.HashLocation.push("login");
        }
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
                        <div className="col s10">
                            {this.state.images.map(function (item, index) {
                                return (
                                    <div className="col s4">
                                        <div className="card sticky-action">
                                            <div className="card-image materialboxed">
                                                <img src={item[0]} id={'image-' + index}/>
                                            </div>
                                            <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4"><i
                                            className="material-icons right tealColor">chat_bubble</i></span>
                                            </div>
                                            <div className="card-action">
                                                <p><a href="#" onClick={likeHandle}><i
                                                    className="small material-icons tealColor">thumbs_up_down</i></a>{item[2]}
                                                </p>
                                            </div>
                                            <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4"><i
                                            className="material-icons right">close</i></span>
                                                <p><br/>{item[1].map(function (comment, indexCom) {
                                                    return (
                                                        <div id={'comment-' + index + '-' + indexCom}
                                                             className="left-align">
                                                            <p>
                                                                <div className="chip">UserId</div>
                                                                {comment}</p>
                                                        </div>
                                                    );
                                                })}</p>
                                                <p><Input placeholder="Comment"
                                                          name="comment"
                                                          inputChangeHandler={commentHandle}/>
                                                    <input type="Submit"
                                                           className="btn waves-effect waves-light"
                                                           value="Comment"
                                                           onClick={commentSubmitHandle}/></p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })} </div>
                    </div>
                </div>
            </div>
        );

    }
});

module.exports = HomePage;