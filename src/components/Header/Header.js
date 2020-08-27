import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import '../../bootstrap.min.css'

const Header = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Learn-code</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Courses</Nav.Link>
          <Nav.Link href="#features">Details</Nav.Link>
          <Nav.Link href="#pricing">BuyNow</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
            
        </div>
    );
};

export default Header;