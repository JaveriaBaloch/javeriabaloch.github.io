import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './css/banner.css';

function NavigationBar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Navbar expand="xl" className="navbar">
      <Navbar.Toggle aria-controls="navbarNav" className='icon'/>
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link href="#Home" onClick={() => handleSelect('1')} active={window.location.pathname === '/'}>Home</Nav.Link>
          <Nav.Link href="#" onClick={() => handleSelect('2')} active={window.location.pathname === '/about'}>About</Nav.Link>
          <Nav.Link href="#" onClick={() => handleSelect('3')} active={window.location.pathname === '/contact'}>Contact</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item href="#" onClick={() => handleSelect('4.1')}>Action</NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => handleSelect('4.2')}>Another action</NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => handleSelect('4.3')}>Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" onClick={() => handleSelect('4.4')}>Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
