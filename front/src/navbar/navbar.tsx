import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => (
  <Navbar bg="dark" variant="dark" style={{ marginBottom: 100 }}>
    <Navbar.Brand href="/">
      Home
    </Navbar.Brand>
    <Navbar.Brand href="/login">
      Login
    </Navbar.Brand>
    <Navbar.Brand href="/account">
      Account
    </Navbar.Brand>
  </Navbar>
);

export default NavigationBar;
