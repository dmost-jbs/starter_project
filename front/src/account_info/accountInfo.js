import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { connect } from "react-redux";
import { useSelector } from 'react-redux'



/**
 * Provides a user interface to login to the web app
 */
const AccountInfo = (props) => {


    const accountInfo = useSelector(state => state.accountInfo)
    console.log(accountInfo);



    if(accountInfo.loggedIn){
        return (
            <div>

                <Container>
                    <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
                        <Col md="auto">
                            <p>username: {accountInfo.username}</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{ marginBottom: 30 }}>
                        <Col md="auto">
                            <p>password: {accountInfo.password}</p>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
    else{
        return (
            <div>
                <h1>Please log in</h1>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
})
export default connect(
    mapStateToProps,
    {}
)(AccountInfo)