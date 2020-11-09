"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var user_interface_1 = require("./main_display/user_interface");
var login_1 = require("./login/login");
var accountInfo_1 = require("./account_info/accountInfo");
var navbar_1 = require("./navbar/navbar");
function App() {
    return (<div className="App">
      <navbar_1.default />
      <react_router_dom_1.BrowserRouter>
        <react_router_dom_1.Switch>
          <react_router_dom_1.Route path="/login">
            <login_1.default />
          </react_router_dom_1.Route>
          <react_router_dom_1.Route path="/account">
            <accountInfo_1.default />
          </react_router_dom_1.Route>
          <react_router_dom_1.Route path="/">
            <user_interface_1.default />
          </react_router_dom_1.Route>
        </react_router_dom_1.Switch>
      </react_router_dom_1.BrowserRouter>
    </div>);
}
exports.default = App;
