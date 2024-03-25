import React from 'react'
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
            <Nav.Link href={`#about`} eventKey={`about`}>
              ABOUT
            </Nav.Link>
            <Nav.Link href={`#projects`} eventKey={`projects`}>
              PROJECTS
            </Nav.Link>
            <Nav.Link href={`#contact`} eventKey={`contact`}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BootNav
