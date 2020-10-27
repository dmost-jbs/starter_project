import React from 'react';
import Navbar from 'react-bootstrap/Navbar'



const NavigationBar = () => {
	  return (
        <Navbar bg="dark" variant="dark" style={{marginBottom:100}}>
        <Navbar.Brand href="#home">
            Home
        </Navbar.Brand>
        </Navbar>
	  )
}
 
export default NavigationBar;



