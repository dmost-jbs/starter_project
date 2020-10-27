import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const handleSubmit = event => {
	event.preventDefault();
}

const Interface = () => {
	return (
		<div>
			<Container>
				<Row className="justify-content-md-center">
					<Col md="auto">
						<Form>
							<Form.Group controlId="formBasicInput">
								<Form.Control type="text" placeholder="Input string" />
							</Form.Group>
						</Form>
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


		</div>
	)
}

export default Interface;
