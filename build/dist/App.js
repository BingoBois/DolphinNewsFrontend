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
import HeaderBar from './components/HeaderBar';
import MainScreen from './screens/MainScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import ResetPassword from './screens/ResetPassword';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(Router, null,
            React.createElement("div", null,
                React.createElement(Route, { path: "/", component: HeaderBar }),
                React.createElement(Route, { exact: true, path: "/", component: MainScreen }),
                React.createElement(Route, { exact: true, path: "/login", component: Login }),
                React.createElement(Route, { exact: true, path: "/register", component: Register }),
                React.createElement(Route, { exact: true, path: "/resetPassword", component: ResetPassword }))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map