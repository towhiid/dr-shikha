import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import './Main.css';

const Main = () => {
    return (
        <Container className = "main">
  <Row>
    <Col sm={8}>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 border rounded"
      src="https://i.ibb.co/qJw7frJ/h-shaw-Dqrlp6c-MLk-E-unsplash.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 border rounded"
      src="https://i.ibb.co/wRXYd5n/jonathan-borba-v-2-FRXEba94-unsplash.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 border rounded"
      src="https://i.ibb.co/zSJGJ0b/h-shaw-Tt-Kp-BUzta-M-unsplash-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></Col>
    <Col sm={4}>
    <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control className = "bg-transparent" type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control className = "bg-transparent" type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control className = "bg-transparent" placeholder="1234 Main St" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control className = "bg-transparent" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control className = "bg-transparent" as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control className = "bg-transparent" />
    </Form.Group>
  </Form.Row>

  <input className = "bg-transparent w-100 text-light btn" style = {{borderRadius : 10}} type="Submit" value="Submit"/>
</Form>
    </Col>
  </Row>
 
    </Container>
    );
};

export default Main;