import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button, Form, Row, Col } from 'react-bootstrap';
// import { Table } from 'react-bootstrap';

function App() {
  return (
    <div className="mb-5">
      <header className="">
        <div className="topnav my-3 mx-3">
          <a className="title">BMI and Energy Calculator</a>
        </div>
      </header>
      <div className="mx-3 col-sm-6 col-md-6 col-lg-8">
        <Form autocomplete="off">
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
                <option selected value="Female">Female</option>
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
                <option selected value="Australoid">Australoid</option>
                <option value="Caucasiod">Caucasiod</option>
                <option value="Capoid">Capoid</option>
                <option value="Mongoloid">Mongoloid</option>
                <option value="Negroid">Negroid</option>
              </select>
            </Col>
          </Form.Group>
          <Button className="mr-2"variant="primary" type="submit">
            Calculate BMI
          </Button>
          {/* <br></br> */}
          <Button className="my-2" variant="success" type="submit">
            Calculate Energy
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
