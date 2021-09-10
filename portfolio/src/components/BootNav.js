import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const BootNav = () => {
  return (
    <Navbar bg="dark" variant="dark" className="nav-bar">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href={`/`}>HOME</Nav.Link>
          <Nav.Link href={`/projects`}>PROJECTS</Nav.Link>
          <Nav.Link href={`/about`}>ABOUT</Nav.Link>
          <Nav.Link href={`/contact`}>CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default BootNav
