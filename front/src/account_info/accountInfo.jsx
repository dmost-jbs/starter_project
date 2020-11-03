import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { logoutUser } from '../redux/actions';

/**
 * Provides a user interface to login to the web app
 */
const AccountInfo = (props) => {
  /**
     * Handles logout button
     * @param {object} event
     */
  const handleLogout = (event) => {
    event.preventDefault();
    props.logoutUser();
  };

  const accountInfo = useSelector((state) => state.accountInfo);
  if (accountInfo.loggedIn) {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col md="auto">
              <p>
                username:
                {accountInfo.username}
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col md="auto">
              <p>
                password:
                {accountInfo.password}
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
            <Col md="auto">
              <Button variant="primary" type="button" onClick={handleLogout}>
                Logout
              </Button>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }

  return (
    <Redirect to="/login" />
  );
};

AccountInfo.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
});
export default connect(
  mapStateToProps,
  { logoutUser },
)(AccountInfo);
