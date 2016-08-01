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
    getInitialState: function () {
        return {
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
        console.log('Comment button was pressed!');
    },
    onLikeHandler: function (event) {
        console.log('Like/Unlike button was pressed!');
    },
    render: function () {

        document.body.style.background = "#f3f3f3 no-repeat right top";
        var commentHandle = this.onCommentHandler;
        var likeHandle = this.onLikeHandler;
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
                                                <p><a href="#" onClick={commentHandle}>Comment</a></p>
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
                                                        <div id={'comment-' + index + '-' + indexCom}>{comment}</div>
                                                    );
                                                })}</p>
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