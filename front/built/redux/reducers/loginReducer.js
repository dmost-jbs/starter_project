"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = require("../actionTypes");
var initialState = {
    username: undefined,
    password: undefined,
    loggedIn: false,
};
var login = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.LOGIN_USER: {
            var _a = action.payload, username = _a.username, password = _a.password;
            return __assign(__assign({}, state), { username: username,
                password: password, loggedIn: true });
        }
        case actionTypes_1.LOGOUT_USER: {
            return {
                username: undefined,
                password: undefined,
                loggedIn: false,
            };
        }
        default:
            return state;
    }
};
exports.default = login;
