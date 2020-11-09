"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_persist_1 = require("redux-persist");
var storage_1 = require("redux-persist/lib/storage"); // defaults to localStorage for web
var reducers_1 = require("./reducers");
var persistConfig = {
    key: 'root',
    storage: storage_1.default,
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, reducers_1.default);
var store = redux_1.createStore(persistedReducer);
var persistor = redux_persist_1.persistStore(store);
exports.default = { store: store, persistor: persistor };
