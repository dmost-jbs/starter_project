"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button_1 = require("react-bootstrap/Button");
var Container_1 = require("react-bootstrap/Container");
var Row_1 = require("react-bootstrap/Row");
var Col_1 = require("react-bootstrap/Col");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var prop_types_1 = require("prop-types");
var actions_1 = require("../redux/actions");
/**
 * Provides a user interface to login to the web app
 */
var Login = function (props) {
    var _a = react_1.useState(''), usernameText = _a[0], setUsernameText = _a[1];
    var _b = react_1.useState(''), passwordText = _b[0], setPasswordText = _b[1];
    var _c = react_1.useState(false), redirect = _c[0], setRedirect = _c[1];
    /**
       * Handles login attempts to the app
       * @param {object} event
       */
    var handleSubmit = function (event) {
        event.preventDefault();
        props.loginUser(usernameText, passwordText);
        setRedirect(true);
    };
    /**
       * Handles updates to the username text form
       * @param {object} event object from inputting text into the input form
       */
    var handleUsername = function (event) {
        setUsernameText(event.target.value);
    };
    /**
       * Handles updates to the password text form
       * @param {object} event object from inputting text into the input form
       */
    var handlePassword = function (event) {
        setPasswordText(event.target.value);
    };
    if (redirect) {
        return <react_router_1.Redirect to="/account"/>;
    }
    return (<div>
      <form onSubmit={handleSubmit}>
        <Container_1.default>
          <Row_1.default className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col_1.default md="auto">
              <p>username:</p>
            </Col_1.default>
            <Col_1.default md="auto">
              <input type="text" onChange={handleUsername} value={usernameText}/>
            </Col_1.default>
          </Row_1.default>
          <Row_1.default className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col_1.default md="auto">
              <p>password:</p>
            </Col_1.default>
            <Col_1.default md="auto">
              <input type="text" onChange={handlePassword} value={passwordText}/>
            </Col_1.default>
          </Row_1.default>
          <Row_1.default className="justify-content-md-center">
            <Col_1.default md="auto">
              <Button_1.default variant="primary" type="submit">
                Login
              </Button_1.default>
            </Col_1.default>
          </Row_1.default>
        </Container_1.default>
      </form>
    </div>);
};
Login.propTypes = {
    loginUser: prop_types_1.default.func.isRequired,
};
var mapStateToProps = function () { return ({}); };
exports.default = react_redux_1.connect(mapStateToProps, { loginUser: actions_1.loginUser })(Login);
