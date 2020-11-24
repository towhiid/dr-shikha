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
      <h2 className = "text-center pb-5"><strong>Our Services</strong></h2>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 border rounded"
      src="https://i.ibb.co/qJw7frJ/h-shaw-Dqrlp6c-MLk-E-unsplash.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className = "text-dark">Book your date</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 border rounded"
      src="https://i.ibb.co/wRXYd5n/jonathan-borba-v-2-FRXEba94-unsplash.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className = "text-dark">Meet specialized doctor</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 border rounded"
      src="https://i.ibb.co/zSJGJ0b/h-shaw-Tt-Kp-BUzta-M-unsplash-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className = "text-dark">Take care of your teeth</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></Col>
    <Col sm={4}>
      <h3 className = "pb-5"><strong>Appointment for Doctor</strong></h3>
    <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control className = "bg-transparent" type="email" required ="" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control className = "bg-transparent" type="password" required ="" placeholder="Password" />
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
  <input type="text" className="form-control bg-transparent w-100 text-light btn"style = {{borderRadius : 10}} value="24-11-2020" />
  <input className = "bg-transparent w-100 text-light btn" style = {{borderRadius : 10}} type="Submit" value="Submit"/>
</Form>
    </Col>
  </Row>
 
    </Container>
    );
};

export default Main;