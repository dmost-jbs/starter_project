"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Navbar_1 = require("react-bootstrap/Navbar");
var NavigationBar = function () { return (<Navbar_1.default bg="dark" variant="dark" style={{ marginBottom: 100 }}>
    <Navbar_1.default.Brand href="/">
      Home
    </Navbar_1.default.Brand>
    <Navbar_1.default.Brand href="/login">
      Login
    </Navbar_1.default.Brand>
    <Navbar_1.default.Brand href="/account">
      Account
    </Navbar_1.default.Brand>
  </Navbar_1.default>); };
exports.default = NavigationBar;
