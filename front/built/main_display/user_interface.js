"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button_1 = require("react-bootstrap/Button");
var Container_1 = require("react-bootstrap/Container");
var Row_1 = require("react-bootstrap/Row");
var Col_1 = require("react-bootstrap/Col");
var axios_1 = require("axios");
var awsPostUrl = 'https://qk5eenmmd5.execute-api.us-east-1.amazonaws.com/prod/';
var awsGetUrl = 'https://qk5eenmmd5.execute-api.us-east-1.amazonaws.com/prod/';
/**
 * Provides a user interface to interact with the node lambda server
 */
var Interface = function () {
    var _a = react_1.useState(''), inputText = _a[0], setInputText = _a[1];
    var _b = react_1.useState(''), serverText = _b[0], setServerText = _b[1];
    var _c = react_1.useState(''), status = _c[0], setStatus = _c[1];
    /**
     * * Handles POST requests to the node server
       * @param {object} event
       */
    var handleSubmit = function (event) {
        event.preventDefault();
        axios_1.default.post(awsPostUrl, { message: inputText })
            .then(function (res) {
            setStatus("message " + res.data + " successfully saved on server");
        })
            .catch(function (err) {
            setStatus(err.toString());
        });
    };
    /**
       * Handles GET requests to the node server
       * @param {object} event object from clicking the retrieve button
       */
    var handleGet = function (event) {
        event.preventDefault();
        axios_1.default.get(awsGetUrl)
            .then(function (res) {
            setServerText(res.data.message);
        })
            .catch(function (err) {
            setStatus(err.toString());
        });
    };
    /**
       * Handles updates to the input text form
       * @param {object} event object from inputting text into the input form
       */
    var handleChange = function (event) {
        setInputText(event.target.value);
    };
    return (<div>
      <form onSubmit={handleSubmit}>
        <Container_1.default>
          <Row_1.default className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col_1.default md="auto">
              <p>{status}</p>
            </Col_1.default>
          </Row_1.default>
          <Row_1.default className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col_1.default md="auto">
              <input type="text" onChange={handleChange} value={inputText}/>
            </Col_1.default>
          </Row_1.default>
          <Row_1.default className="justify-content-md-center">
            <Col_1.default md="auto">
              <Button_1.default variant="primary" type="submit">
                Submit
              </Button_1.default>
            </Col_1.default>
            <Col_1.default md="auto">
              <Button_1.default variant="primary" type="button" onClick={handleGet}>
                Retrieve
              </Button_1.default>
            </Col_1.default>
          </Row_1.default>
          <Row_1.default className="justify-content-md-center">
            <Col_1.default md="auto">
              <h1>{serverText}</h1>
            </Col_1.default>
          </Row_1.default>
        </Container_1.default>
      </form>
    </div>);
};
exports.default = Interface;
