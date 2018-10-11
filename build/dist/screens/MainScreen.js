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
import '../stylesheets/headerStyles.css';
import * as testData from '../temp/testData.json';
import Post from '../components/Post';
var MainScreen = /** @class */ (function (_super) {
    __extends(MainScreen, _super);
    function MainScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScreen.prototype.render = function () {
        //@ts-ignore
        var tableData = testData.map(function (data, index) {
            return (React.createElement(Post, { key: index, title: data.title, index: index + 1, url: data.url, upvotes: data.upvotes, id: data.id, user: data.user, time: data.time, commentCount: data.commentCount }));
        });
        return (React.createElement("div", { className: "MainScreen" }, tableData));
    };
    return MainScreen;
}(React.Component));
export default MainScreen;
//# sourceMappingURL=MainScreen.js.map