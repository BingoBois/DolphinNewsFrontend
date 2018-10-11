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
var ResetPassword = /** @class */ (function (_super) {
    __extends(ResetPassword, _super);
    function ResetPassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResetPassword.prototype.render = function () {
        return (React.createElement("div", { className: "login-page" },
            React.createElement("div", { className: "form" },
                React.createElement("div", { className: "login-form" },
                    React.createElement("input", { type: "text", placeholder: "Email" }),
                    React.createElement("button", null, "Reset Password"),
                    React.createElement("p", { className: "message textMargin" },
                        "Didn't forget your password? ",
                        React.createElement(Link, { to: "/login" }, "Back to Login"))))));
    };
    return ResetPassword;
}(React.Component));
export default ResetPassword;
//# sourceMappingURL=ResetPassword.js.map