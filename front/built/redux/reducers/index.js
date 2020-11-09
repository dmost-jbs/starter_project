"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var loginReducer_1 = require("./loginReducer");
exports.default = redux_1.combineReducers({ accountInfo: loginReducer_1.default });
