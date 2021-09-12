import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const BootNav = () => {
  const handleSelect = (key) => {
    console.log(key)
  }
  return (
    <Navbar bg="dark" variant="dark" className="nav-bar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            onSelect={handleSelect}
            variant="pills"
            defaultActiveKey="#/"
          >
            <Nav.Link className="home" href={`#home`} eventKey={`home`}>
              HOME
            </Nav.Link>
            <Nav.Link
              className="projects"
              href={`#projects`}
              eventKey={`projects`}
            >
              PROJECTS
            </Nav.Link>
            <Nav.Link className="about" href={`#about`} eventKey={`about`}>
              ABOUT
            </Nav.Link>
            <Nav.Link
              className="contact"
              href={`#contact`}
              eventKey={`contact`}
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BootNav
