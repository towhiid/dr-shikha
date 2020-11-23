import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Navmenu.css';

const Navmenu = () => {
    return (
        <div>
            <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link className = "nav" href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className = "nav" eventKey="">About Us</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className = "nav" eventKey="">Services</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className = "nav" eventKey="">
        Photos
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className = "nav" eventKey="">
      Videos
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className = "nav" eventKey="">
        Contact Us
      </Nav.Link>
    </Nav.Item>
  </Nav>
        </div>
    );
};

export default Navmenu;