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
var AccountInfo = function (props) {
    var accountInfo = props.accountInfo, logoutUserAction = props.logoutUser;
    /**
       * Handles logout button
       * @param {object} event
       */
    var handleLogout = function (event) {
        event.preventDefault();
        logoutUserAction();
    };
    if (accountInfo.loggedIn) {
        return (<div>
        <Container_1.default>
          <Row_1.default className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col_1.default md="auto">
              <p>
                username:
                {accountInfo.username}
              </p>
            </Col_1.default>
          </Row_1.default>
          <Row_1.default className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col_1.default md="auto">
              <p>
                password:
                {accountInfo.password}
              </p>
            </Col_1.default>
          </Row_1.default>
          <Row_1.default className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col_1.default md="auto">
              <Button_1.default variant="primary" type="button" onClick={handleLogout}>
                Logout
              </Button_1.default>
            </Col_1.default>
          </Row_1.default>
        </Container_1.default>
      </div>);
    }
    return (<react_router_1.Redirect to="/login"/>);
};
AccountInfo.propTypes = {
    logoutUser: prop_types_1.default.func.isRequired,
    accountInfo: prop_types_1.default.shape({
        username: prop_types_1.default.string,
        password: prop_types_1.default.string,
        loggedIn: prop_types_1.default.bool,
    }).isRequired,
};
var mapStateToProps = function () { return ({
    accountInfo: react_redux_1.useSelector(function (state) { return state.accountInfo; }),
}); };
exports.default = react_redux_1.connect(mapStateToProps, { logoutUser: actions_1.logoutUser })(AccountInfo);
