import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ReactLogo from '../design/assets/logo.svg';
const NavbarComp = () => {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={ReactLogo}
          width="40"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Credit Car
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default NavbarComp
