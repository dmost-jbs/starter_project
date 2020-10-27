import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import axios from 'axios';

const handleSubmit = event => {
	event.preventDefault();
    const user = {
      name: this.state.name
    }
    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then(res=>{
        console.log(res);
        console.log(res.data);
        window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
      })
}



const Interface = () => {
	return (
		<div>
			<Form onSubmit = {handleSubmit}>
				<Container>
					<Row className="justify-content-md-center">
						<Col md="auto">
							<Form.Group controlId="formBasicInput">
								<Form.Control type="text" placeholder="Input string" />
							</Form.Group>
						</Col>
					</Row>
					<Row className="justify-content-md-center">
						<Col md="auto">
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Col>
						<Col md="auto">
							<Button variant="primary" type="submit">
								Retrieve
							</Button>
						</Col>
					</Row>
				</Container>
			</Form>
		</div>
	)
}

export default Interface;
