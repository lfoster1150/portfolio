import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const BootNav = () => {
  const handleSelect = (key) => {
    console.log(key)
  }
  return (
    <Navbar variant="dark" className="nav-bar">
      <Container className="nav-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            onSelect={handleSelect}
            variant="pills"
            defaultActiveKey="#/"
          >
            <Nav.Link href={`#home`} eventKey={`home`}>
              HOME
            </Nav.Link>
            <Nav.Link href={`#projects`} eventKey={`projects`}>
              PROJECTS
            </Nav.Link>
            <Nav.Link href={`#about`} eventKey={`about`}>
              ABOUT
            </Nav.Link>
            <Nav.Link href={`#contact`} eventKey={`contact`}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a
          className="nav-contact"
          href="https://github.com/lfoster1150"
          target="_blank"
        >
          <i class="devicon-github-original"></i>
        </a>
        <a
          className="nav-contact"
          href="https://www.linkedin.com/in/luke-foster11/"
          target="_blank"
        >
          <i class="devicon-linkedin-plain"></i>
        </a>
        <a className="nav-contact" href="mailto:lfoster1150@gmail.com">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </Container>
    </Navbar>
  )
}

export default BootNav
