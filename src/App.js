import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button, Form, Row, Col } from 'react-bootstrap';
// import { Table } from 'react-bootstrap';

function App() {
  return (
    <div className="">
      <header className="">
        <div className="topnav my-3">
          <a className="title">BMI and Energy Calculator</a>
        </div>
      </header>
      <div className="mx-1 col-sm-6 col-md-6 col-lg-8">
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Height
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Height" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Weight
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Weight" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Age
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Age" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Gender
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Gender" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Race
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Race" />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Calculate BMI
          </Button>
          <br></br>
          <Button className="my-2" variant="primary" type="submit">
            Calculate Energy
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
