import React from 'react';
import Button from 'react-bootstrap/Button';


const handleSubmit = event =>{
	event.preventDefault();
}

const Interface = () => {
	  return (
		  <div>
			  <input type="submit" onChange={handleSubmit}/>
			  <Button>Send</Button>
			  <Button>Retrieve</Button>
		  </div>
	  )
}
 
export default Interface;
