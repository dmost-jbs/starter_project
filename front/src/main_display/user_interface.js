import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import axios from 'axios';

const aws_post_url = "";
const aws_get_url = "";

const Interface = () => {
	const [inputText, setInputText] = useState("Input String");
	const handleSubmit = event => {
		event.preventDefault();

		/*
		axios.post(aws_post_url, { text: inputText })
		  .then(res=>{
			console.log(res);
			console.log(res.data);
		  })
		  .catch(err=>{
			  alert(err);
		  })
		*/
	}

	const handleGet = event => {
		event.preventDefault();

		/*
		axios.get(aws_get_url)
		  .then(res=>{
			console.log(res);
			console.log(res.data);
		  })
		  .catch(err=>{
			  alert(err);
		  })
		*/
	}

	const handleChange = event => {
		setInputText(event.target.value);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Container>
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
				</Container>
			</form>
		</div>
	)
}

export default Interface;
