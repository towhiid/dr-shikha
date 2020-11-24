import React from 'react';
import './Header.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/dental.png';

const Header = () => {
    return (
        <Container className = "header">
  <Row>
    <Col>
    <Navbar bg="transparent" variant="transparent">
    <Navbar.Brand href="/">
        <img src={Logo} style= {{width:"100px", height:"100%"}} className = "ml-5" alt=""/>
    </Navbar.Brand>
  </Navbar>
    </Col>
    <Col xs={6}>
    <div class="sp-content">
		<div class="sp-globe"></div>
		<h2 class="frame-5">
		<strong>Dr. Goyal’s Dental Clinic</strong> and <br/> <span className = "text-warning ml-5"><em>Implant Centre</em></span>
		</h2>
	</div>
      </Col>
    <Col className ="contact"><p><strong>Email:</strong> <em>dentalshikha@hotmail.com</em></p>
    <p><strong>Phone:</strong> +911-648595</p>
    <address><strong>Cure Clinic, New Delhi, India.</strong></address></Col>
  </Row>
</Container>
    );
};

export default Header;