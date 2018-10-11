var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import '../stylesheets/rowStyles.css';
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.upvoteMargin = function (xOffset) {
            var element = _this.refs["upvotes" + _this.props.id];
            element.style.paddingLeft = 140;
        };
        _this.upvote = function (e) {
            if (!e.target.classList.contains("clickedArrow")) {
                e.target.classList.remove("upvoteArrow");
                e.target.classList.add("clickedArrow");
            }
            else {
                e.target.classList.remove("clickedArrow");
                e.target.classList.add("upvoteArrow");
            }
        };
        _this.extractDomain = function (url) {
            if (url.includes('www.')) {
                url = url.substring(url.indexOf('www.') + 4);
            }
            if (url.includes('//')) {
                url = url.substring(url.indexOf('//') + 2);
            }
            if (url.includes('/')) {
                url = url.substring(0, url.indexOf('/'));
            }
            return url;
        };
        _this.formatTime = function (milliseconds) {
            var seconds = Math.floor(milliseconds / 1000);
            milliseconds -= (seconds * 1000);
            var minutes = Math.floor(seconds / 60);
            seconds -= (minutes * 60);
            var hours = Math.floor(minutes / 60);
            minutes -= (hours * 60);
            var days = Math.floor(hours / 24);
            hours -= (days * 24);
            return {
                milli: milliseconds,
                seconds: seconds,
                minutes: minutes,
                hours: hours,
                days: days
            };
        };
        _this.getTime = function (timeFormat) {
            var timeNames = ["seconds", "minutes", "hours", "days"].reverse();
            for (var i = 0; i < timeNames.length; i++) {
                var value = timeNames[i];
                if (timeFormat[value] > 1) {
                    return timeFormat[value] + " " + value + " ago";
                }
                else if (timeFormat[value] > 0) {
                    return timeFormat[value] + " " + value.substring(0, value.length - 1) + " ago";
                }
            }
            return "0";
        };
        return _this;
    }
    Post.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "dataRow" },
            React.createElement("div", { className: "mainRow" },
                React.createElement("p", { className: "rowNumber", ref: "rowNumber" + this.props.id },
                    this.props.index,
                    "."),
                React.createElement("img", { className: "upvoteArrow", src: require('../assets/green_arrow.png'), onClick: function (e) { return _this.upvote(e); } }),
                React.createElement("p", { className: "rowText", ref: "rowText" + this.props.id }, this.props.title),
                React.createElement("p", { className: "urlText" },
                    "(",
                    this.extractDomain(this.props.url),
                    ")")),
            React.createElement("div", { className: "minorRow" },
                React.createElement("p", { className: "upvotes", ref: "upvotes" + this.props.id, style: {} },
                    this.props.upvotes,
                    " points by"),
                React.createElement("p", { className: "userText" }, this.props.user),
                React.createElement("p", { className: "timeText" }, this.getTime(this.formatTime(new Date().getTime() - new Date(this.props.time).getTime()))),
                React.createElement("p", { className: "rowDivider unselectable" }, "|"),
                React.createElement("p", { className: "userText" }, "hide"),
                React.createElement("p", { className: "rowDivider unselectable" }, "|"),
                React.createElement("p", { className: "userText" }, this.props.commentCount + " comments"))));
    };
    return Post;
}(React.Component));
export default Post;
//# sourceMappingURL=Post.js.map