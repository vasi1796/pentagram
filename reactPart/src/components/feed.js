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

var New = React.createClass({
    getInitialState: function () {
        return {
            images: [{
                "id": 1,
                "user": 1,
                "photo": "/media/photos/user_admin/70cc28b8-4a5d-11e6-9a7a-d4bed902b258_gibriil.jpg"
            }],
            likes: '',
            comments: [],
            fetchComments: false
        };
    }
    , componentWillMount: function () {
        var self = this;
        $.ajax({
            url: 'http://127.0.0.1:8000/api/v1/photos/'
            , type: 'GET'
            , error: function (xhr, textStatus, errorThrown) {

            }
        }).then(function (data) {
            self.setState({images: data});
        });
    },
    onCommentHandler: function (event) {
        this.setState({comment: event.target.value});
    },
    onLikeHandler: function (event) {
        console.log('Like/Unlike button was pressed!');
        var token = sessionStorage.getItem("authToken");
        var photoId = event.target.dataset.id;
        $.ajax({
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Token ' + token);
            },
            url: 'http://127.0.0.1:8000/api/v1/photos/' + photoId + '/like/'
            , type: 'POST'
        });
        toastr.success("You pressed the like button!");

    },
    onCommentSubmitHandler: function (event) {
        event.preventDefault();
        if (this.state.comment == null) {
            toastr.error("Comment is empty");
        } else {
            var token = sessionStorage.getItem("authToken");
            var photoId = event.target.dataset.id;
            var params = new FormData();
            params.append('user', sessionStorage.getItem("id"));
            params.append('comment', this.state.comment);
            $.ajax({
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Token ' + token);
                },
                url: 'http://127.0.0.1:8000/api/v1/photos/' + photoId + '/comments/'
                , type: 'POST'
                , data: params
            }).then(function () {
                window.location.reload();
                toastr.success("You posted a comment!");
            });
        }
    },
    showComments: function (event) {
        var photoId = event.target.dataset.id;
        var self = this;

        $.ajax({
            url: 'http://127.0.0.1:8000/api/v1/photos/' + photoId + '/comments/'
            , type: 'GET'
            , error: function (xhr, textStatus, errorThrown) {
            }
        }).then(function (commentData) {
            self.setState({comments: commentData});
        });
        this.setState({
            fetchComments: true
        });

        $.ajax({
            url: 'http://127.0.0.1:8000/api/v1/photos/' + photoId + '/like/'
            , type: 'GET'
            , error: function () {
                console.log(arguments);
            }
            , success: function () {
                console.log(arguments);
            }
        }).then(function (likesData) {
            self.setState({likes: likesData});
        });
    },
    handleImage: function (event) {
        console.log("clicked upload image");
        console.log(this.state);
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
                        <a role="button"
                           className="btn-floating btn-large waves-effect waves-light blue">
                            <i className="material-icons">add</i></a>
                    </div>
                    <div className="row text-center photoGrid">
                        <div className="col s10">
                            {self.state.images.map(function (item) {
                                return (
                                    <div className="col s4">
                                        <div className="card sticky-action">
                                            <div className="card-image materialboxed key={item.id}">
                                                <img src={'http://127.0.0.1:8000' + item.photo} id={'image-' + item.id}
                                                     data-id={item.id} width="100%" height="100%"/>
                                            </div>
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-darken-4"
                                                      onClick={self.showComments}><i
                                                    className="material-icons right tealColor" data-id={item.id}>chat_bubble</i></span>
                                            </div>
                                            <div className="card-action">
                                                <p><a role="button" onClick={likeHandle}><i
                                                    className="small material-icons tealColor" data-id={item.id}>thumbs_up_down</i></a>
                                                </p>
                                            </div>
                                            <div className="card-reveal">
                                                <span className="card-title grey-text text-darken-4"><i
                                                    className="material-icons right">close</i></span>
                                                <p>
                                                    <div className="chip">Likes</div>
                                                    <div className="chip">{self.state.likes}</div>
                                                </p>
                                                <p>
                                                    <ul><br/>
                                                        {self.state.comments.map(function (commItem) {
                                                            return (
                                                                <div className="left-align">
                                                                    <li>
                                                                        <div className="chip">{commItem.user}</div>
                                                                        {commItem.comment}
                                                                    </li>
                                                                </div>
                                                            );
                                                        })}
                                                    </ul>
                                                </p>
                                                <p><Input placeholder="Comment"
                                                          name="comment"
                                                          inputChangeHandler={commentHandle}/>
                                                    <input type="Submit"
                                                           className="btn waves-effect waves-light"
                                                           data-id={item.id}
                                                           value="Comment"
                                                           onClick={commentSubmitHandle}/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = New;
/**
 * Created by vasy1 on 8/2/2016.
 */
