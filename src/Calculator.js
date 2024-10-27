import React, { useState } from 'react';
import { Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  
  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <>
      {/* Header */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">My Calculator</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="calculator-container mt-5 p-4">
        {/* Calculator Display */}
        <Row>
          <Col xs={12}>
            <input type="text" className="calculator-display mb-3" value={input} readOnly />
          </Col>
        </Row>

        {/* Calculator Buttons */}
        <Row className="mb-2">
          <Col><Button variant="light" onClick={() => handleClick('7')}>7</Button></Col>
          <Col><Button variant="light" onClick={() => handleClick('8')}>8</Button></Col>
          <Col><Button variant="light" onClick={() => handleClick('9')}>9</Button></Col>
          <Col><Button variant="warning" onClick={() => handleClick('/')}>÷</Button></Col>
        </Row>
        <Row className="mb-2">
          <Col><Button variant="light" onClick={() => handleClick('4')}>4</Button></Col>
          <Col><Button variant="light" onClick={() => handleClick('5')}>5</Button></Col>
          <Col><Button variant="light" onClick={() => handleClick('6')}>6</Button></Col>
          <Col><Button variant="warning" onClick={() => handleClick('*')}>×</Button></Col>
        </Row>
        <Row className="mb-2">
          <Col><Button variant="light" onClick={() => handleClick('1')}>1</Button></Col>
          <Col><Button variant="light" onClick={() => handleClick('2')}>2</Button></Col>
          <Col><Button variant="light" onClick={() => handleClick('3')}>3</Button></Col>
          <Col><Button variant="warning" onClick={() => handleClick('-')}>-</Button></Col>
        </Row>
        <Row className="mb-2">
          <Col><Button variant="light" onClick={() => handleClick('0')}>0</Button></Col>
          <Col><Button variant="light" onClick={clearInput}>C</Button></Col>
          <Col><Button variant="light" onClick={calculate}>=</Button></Col>
          <Col><Button variant="warning" onClick={() => handleClick('+')}>+</Button></Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center p-3">
        <p>Calculator App © 2024 | Created by [Your Name]</p>
      </footer>
    </>
  );
};

export default Calculator;
