"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUser = exports.loginUser = void 0;
var actionTypes_1 = require("./actionTypes");
exports.loginUser = function (username, password) { return ({
    type: actionTypes_1.LOGIN_USER,
    payload: {
        username: username,
        password: password,
    },
}); };
exports.logoutUser = function () { return ({
    type: actionTypes_1.LOGOUT_USER,
}); };
