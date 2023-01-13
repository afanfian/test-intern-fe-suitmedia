import React from 'react';
import {
  Container, Nav, Navbar, Offcanvas,
} from 'react-bootstrap';
import '../styles/layouts/navbar.css';

function navbarBeforeLogin() {
  // console.log(login)
  return (
    <div>
      <Container>
        {['sm'].map((expand) => (
          <Navbar key={expand} expand={expand} className="navbar">
            <Container fluid>
              <Navbar.Brand href="#">
                <p className="pt-2 fw-bold">Company</p>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <p className="pt-2 fw-bold">Company</p>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/" className="dropdown-nav pt-3 fw-bold">
                      <div>
                        <p className="dropdown-about">ABOUT</p>
                        <div className="dropdown-li">
                          <p href="#">HISTORY</p>
                          <p href="#">VISION MISSION</p>
                        </div>
                      </div>
                    </Nav.Link>
                    <Nav.Link href="#" className="pt-3 fw-bold">
                      OUR WORK
                    </Nav.Link>
                    <Nav.Link href="#" className="pt-3 fw-bold">
                      OUR TEAM
                    </Nav.Link>
                    <Nav.Link href="#" className="pt-3 fw-bold">
                      CONTACT
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </Container>
    </div>
  );
}

export default navbarBeforeLogin;
