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

        console.log(`
        username: ${usernameText}\n
        password: ${passwordText}\n
        `)
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


const mapStateToProps = (state) => ({
    // ... computed data from state and optionally ownProps
  })
  
  const mapDispatchToProps = {
    // ... normally is an object full of action creators
  }
  
  // `connect` returns a new function that accepts the component to wrap:
  const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
  )
  // and that function returns the connected, wrapper component:
  const ConnectedComponent = connectToStore(Component)
  
  // We normally do both in one step, like this:
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)