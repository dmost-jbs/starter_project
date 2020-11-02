import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


/**
 * Provides a user interface to login to the web app
 */
const Login = () => {

    const [usernameText, setUsernameText] = useState("");
    const [passwordText, setPasswordText] = useState("");


    /**
     * Handles login attempts to the app
     * @param {object} event 
     */
    const handleSubmit = event => {
        event.preventDefault();

        // login logic here

    }


    /**
     * Handles updates to the username text form
     * @param {object} event object from inputting text into the input form
     */
    const handleUsername = event => {
        setUsernameText(event.target.value);
    }

    /**
     * Handles updates to the password text form
     * @param {object} event object from inputting text into the input form
     */
    const handlePassword = event => {
        setPasswordText(event.target.value);
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
    )
}

export default Login;
