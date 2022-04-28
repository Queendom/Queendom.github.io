import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand='lg' bg='white' variant='light'>
                <Container>
                <Navbar.Brand id="navhead" href="/">Dina Pablo</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive=nabar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href="/" className="item">Home</Nav.Link>                               
                        <Nav.Link href="/#/about" className="item">About</Nav.Link>
                        <Nav.Link href="/#/digitalartwork" className="item">Digital Artwork</Nav.Link>
                        <Nav.Link href="/#/resume" className="item">Resume</Nav.Link>
                        <Nav.Link href="/#/contact" className="item">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
  }
   
  export default Navigation;