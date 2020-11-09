"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var react_redux_1 = require("react-redux");
var react_2 = require("redux-persist/integration/react");
var store_1 = require("./redux/store");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
var store = store_1.default.store;
store.subscribe(function () { return console.log('State after dispatch: ', store.getState()); });
react_dom_1.default.render(<react_redux_1.Provider store={store}>
    <react_2.PersistGate loading={null} persistor={store_1.default.persistor}>
      <App_1.default />
    </react_2.PersistGate>
  </react_redux_1.Provider>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1.default();
