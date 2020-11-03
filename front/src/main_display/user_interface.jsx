import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const awsPostUrl = 'https://04r6i3pt7d.execute-api.us-east-1.amazonaws.com/Prod/api/post';
const awsGetUrl = 'https://04r6i3pt7d.execute-api.us-east-1.amazonaws.com/Prod/api/get';

/**
 * Provides a user interface to interact with the node lambda server
 */
const Interface = () => {
  const [inputText, setInputText] = useState('');
  const [serverText, setServerText] = useState('');
  const [status, setStatus] = useState('');

  /**
   * * Handles POST requests to the node server
     * @param {object} event
     */
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(awsPostUrl, { text: inputText })
      .then((res) => {
        setStatus(`message ${res.data} successfully saved on server`);
      })
      .catch((err) => {
        setStatus(err.toString());
      });
  };

  /**
     * Handles GET requests to the node server
     * @param {object} event object from clicking the retrieve button
     */
  const handleGet = (event) => {
    event.preventDefault();

    axios.get(awsGetUrl)
      .then((res) => {
        setServerText(res.data.message);
      })
      .catch((err) => {
        setStatus(err.toString());
      });
  };

  /**
     * Handles updates to the input text form
     * @param {object} event object from inputting text into the input form
     */
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Container>
          <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col md="auto">
              <p>{status}</p>
            </Col>
          </Row>
          <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col md="auto">
              <input type="text" onChange={handleChange} value={inputText} />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col md="auto">
              <Button variant="primary" type="button" onClick={handleGet}>
                Retrieve
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h1>{serverText}</h1>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};

export default Interface;
