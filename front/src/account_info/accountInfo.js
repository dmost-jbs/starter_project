import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { connect } from "react-redux";


/**
 * Provides a user interface to login to the web app
 */
const AccountInfo = (props) => {

    const [usernameText, setUsernameText] = useState("");
    const [passwordText, setPasswordText] = useState("");
    const [emailText, setEmailText] = useState("");


    return (
        <div>

            <Container>
                <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
                    <Col md="auto">
                        <p>username: {usernameText}</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
                    <Col md="auto">
                        <p>password: {passwordText}</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
                    <Col md="auto">
                        <p>email: {emailText}</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}


const mapStateToProps = (state) => ({
})
export default connect(
    mapStateToProps,
    {}
)(AccountInfo)