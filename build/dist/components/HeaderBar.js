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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import * as DataHandler from '../api/DataHandler';
import Store from '../store/Store';
import '../stylesheets/headerStyles.css';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
var HeaderBar = /** @class */ (function (_super) {
    __extends(HeaderBar, _super);
    function HeaderBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filterByNew = function () {
            //TODO: Make multiple filters for each header button
        };
        _this.createNewPost = function () {
            console.log('Sending new Post Creation to RabbitMQ server');
            DataHandler.createNewPost({});
        };
        return _this;
    }
    HeaderBar.prototype.render = function () {
        var onClickEvents = [this.filterByNew];
        var headerArray = [{ option: 'welcome', loggedIn: true },
            { option: 'new', loggedIn: false },
            { option: 'threads', loggedIn: true },
            { option: 'comments', loggedIn: false },
            { option: 'show', loggedIn: false },
            { option: 'ask', loggedIn: false },
            { option: 'jobs', loggedIn: false },
            { option: 'submit', loggedIn: false }
        ];
        var options = headerArray.map(function (obj, index) {
            if (obj.loggedIn && !Store.token) {
                return (React.createElement("div", { key: obj.option }));
            }
            return (React.createElement("div", { style: { display: 'flex', flexDirection: 'row' }, key: index },
                React.createElement("p", { className: "headerText", style: { cursor: 'pointer' }, onClick: function () { return onClickEvents[index] ? onClickEvents[index]() : undefined; } }, obj.option),
                index === headerArray.length - 1 ? null : React.createElement("p", { className: "headerText unselectable" }, "|")));
        });
        return (React.createElement("div", { className: "headerBar" },
            React.createElement("div", { className: "innerHeader" },
                React.createElement(Link, { to: "/" },
                    React.createElement("img", { className: "homeIcon", src: require('../assets/dolphin_icon.png'), width: 20, height: 20, style: { border: '1px solid white', margin: '2px' } })),
                React.createElement("p", { className: "headerName", style: { fontWeight: 'bolder' } }, "Dolphin News"),
                options),
            React.createElement("div", { className: "lastHeader" },
                React.createElement("p", { className: "loginButton unselectable", style: { cursor: 'pointer' } }, Store.token ? React.createElement(Link, { to: "logout", style: { textDecoration: 'none' } }, "logout") : (React.createElement(Link, { to: "login", style: { textDecoration: 'none' } }, "login"))))));
    };
    HeaderBar = __decorate([
        observer
    ], HeaderBar);
    return HeaderBar;
}(React.Component));
export default HeaderBar;
//# sourceMappingURL=HeaderBar.js.map