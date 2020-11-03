import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { loginUser } from '../redux/actions';

/**
 * Provides a user interface to login to the web app
 */
const Login = (props) => {
  const [usernameText, setUsernameText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [redirect, setRedirect] = useState(false);

  /**
     * Handles login attempts to the app
     * @param {object} event
     */
  const handleSubmit = (event) => {
    event.preventDefault();

    props.loginUser(usernameText, passwordText);
    setRedirect(true);
  };

  /**
     * Handles updates to the username text form
     * @param {object} event object from inputting text into the input form
     */
  const handleUsername = (event) => {
    setUsernameText(event.target.value);
  };

  /**
     * Handles updates to the password text form
     * @param {object} event object from inputting text into the input form
     */
  const handlePassword = (event) => {
    setPasswordText(event.target.value);
  };

  if (redirect) {
    return <Redirect to="/account" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Container>
          <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col md="auto">
              <p>username:</p>
            </Col>
            <Col md="auto">
              <input type="text" onChange={handleUsername} value={usernameText} />
            </Col>
          </Row>
          <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col md="auto">
              <p>password:</p>
            </Col>
            <Col md="auto">
              <input type="text" onChange={handlePassword} value={passwordText} />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
});
export default connect(
  mapStateToProps,
  { loginUser },
)(Login);
