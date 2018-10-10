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
import '../stylesheets/loginStyle.css';
import { Link } from 'react-router-dom';
import Store from '../store/Store';
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.prototype.login = function () {
        Store.token = "asdb22222";
        this.props.history.push("/");
    };
    Login.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "login-page" },
            React.createElement("div", { className: "form" },
                React.createElement("div", { className: "register-form" },
                    React.createElement("input", { type: "text", placeholder: "name" }),
                    React.createElement("input", { type: "password", placeholder: "password" }),
                    React.createElement("input", { type: "text", placeholder: "email address" }),
                    React.createElement("button", null, "create"),
                    React.createElement("p", { className: "message" },
                        "Already registered? ",
                        React.createElement("a", { href: "#" }, "Sign In"))),
                React.createElement("div", { className: "login-form" },
                    React.createElement("input", { type: "text", placeholder: "username" }),
                    React.createElement("input", { type: "password", placeholder: "password" }),
                    React.createElement("button", { onClick: function () { return _this.login(); } }, "login"),
                    React.createElement("p", { className: "message textContainer" },
                        " Not Registered? ",
                        React.createElement(Link, { to: "/register" }, "Create an account")),
                    React.createElement("p", { className: "message textMargin" },
                        "Forgot Password? ",
                        React.createElement(Link, { to: "/resetPassword" }, "Reset Password"))))));
    };
    return Login;
}(React.Component));
export default Login;
//# sourceMappingURL=Login.js.map