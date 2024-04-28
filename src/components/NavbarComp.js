import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ReactLogo from '../design/assets/logo.svg';
import dollar from '../design/assets/dollar1.png';
const NavbarComp = () => {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={ReactLogo}
          width="40"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Credit Car
      </Navbar.Brand>
      <Navbar.Brand href="#home" style={{
        marginLeft: 'auto'
      
      }}>Services</Navbar.Brand>
      <Navbar.Brand href="/">Contact Us</Navbar.Brand>
      <Navbar.Brand href="/"> <img src={dollar} alt="dollar logo"  width="30" height=""/> PKR: 0</Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default NavbarComp
