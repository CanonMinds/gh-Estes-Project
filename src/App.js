import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button, Form, Row, Col } from 'react-bootstrap';
// import { Table } from 'react-bootstrap';

function App() {
  return (
    <div className="mb-5 mx-3 col-sm-12 col-md-12 col-lg-12">
      <header className="">
        <div className="topnav my-3 mx-3">
          <a className="title">
            <strong>BMI and Energy Calculator</strong>
          </a>
        </div>
      </header>
      <div className="">
        <Form autoComplete="off">
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Height
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="number" min="0" placeholder="Height" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Weight
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="number" min="0" placeholder="Weight" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Age
            </Form.Label>
            <Col sm={4}>
              <Form.Control type="number" min="0" placeholder="Age" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Gender
            </Form.Label>
            <Col sm={4}>
              <select>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="rather not say">Rather not say</option>
              </select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Race
            </Form.Label>
            <Col sm={4}>
              <select>
                <option value="Australoid">Australoid</option>
                <option value="Caucasiod">Caucasiod</option>
                <option value="Capoid">Capoid</option>
                <option value="Mongoloid">Mongoloid</option>
                <option value="Negroid">Negroid</option>
              </select>
            </Col>
          </Form.Group>
          <Button className="btn mr-2 px-5" variant="primary">
            Calculate BMI
          </Button>
          {/* <br></br> */}
          <Button className="btn my-2 px-5" variant="success">
            Calculate Energy
          </Button>
        </Form>
        <script>
        </script>
      </div>
    </div>
  );
}

export default App;
