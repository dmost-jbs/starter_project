import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { connect } from "react-redux";
import { registerUser } from '../redux/actions';


/**
 * Provides a user interface to register an account with the web app
 */
const Register = () => {

    const [usernameText, setUsernameText] = useState("");
    const [passwordText, setPasswordText] = useState("");
    const [passwordConfirmText, setPasswordConfirmText] = useState("");
    const [emailText, setEmailText] = useState("");


    /**
     * Handles account registration
     * @param {object} event 
     */
    const handleSubmit = event => {
        event.preventDefault();

        console.log(`
        email: ${emailText}\n
        username: ${usernameText}\n
        password: ${passwordText}\n
        passwordConfirm: ${passwordConfirmText}\n
        `)
        registerUser({username:usernameText,password:passwordText,email:emailText})

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

    /**
 * Handles updates to the password text form
 * @param {object} event object from inputting text into the input form
 */
    const handlePasswordConfirm = event => {
        setPasswordConfirmText(event.target.value);
    }


    /**
 * Handles updates to the password text form
 * @param {object} event object from inputting text into the input form
 */
    const handleEmail = event => {
        setEmailText(event.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Container>
                    <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
                        <Col md="auto">
                            <p>email:</p>
                        </Col>
                        <Col md="auto">
                            <input type="text" onChange={handleEmail} value={emailText} />
                        </Col>
                    </Row>
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
                    <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
                        <Col md="auto">
                            <p>password confirm:</p>
                        </Col>
                        <Col md="auto">
                            <input type="text" onChange={handlePasswordConfirm} value={passwordConfirmText} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Button variant="primary" type="submit">
                                Register
							</Button>
                        </Col>
                    </Row>
                </Container>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
})
export default connect(
  mapStateToProps,
)(Register)