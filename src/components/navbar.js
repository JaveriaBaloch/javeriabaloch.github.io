import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './css/banner.css';

function NavigationBar() {
  const [activeSection, setActiveSection] = useState('');
  const containerRef = useRef(null);

  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const scrollPosition = container.scrollLeft;

      // Define the range for each section based on your layout
      const sections = [
        { id: 'Home', start: 0, end: 500 }, // Adjust these values based on your layout
        { id: 'Skills', start: 501, end: 1000 },
        { id: 'Experiences', start: 1001, end: 1500 },
        { id: 'Projects', start: 1501, end: 2000 },
        { id: 'contact', start: 2001, end: 2500 },
      ];

      // Find the active section based on the scroll position
      const active = sections.find((section) => scrollPosition >= section.start && scrollPosition < section.end);

      if (active) {
        setActiveSection(`#${active.id}`);
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="xl" className="navbar">
      <Navbar.Toggle aria-controls="navbarNav" className='icon' />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto" ref={containerRef}>
          <Nav.Link href="#Home" active={activeSection === '#Home'}>Home</Nav.Link>
          <Nav.Link href="#Skills" active={activeSection === '#Skills'}>Skills</Nav.Link>
          <Nav.Link href="#Experiences" active={activeSection === '#Experiences'}>Experiences</Nav.Link>
          <Nav.Link href="#Projects" active={activeSection === '#Projects'}>Projects</Nav.Link>
          <Nav.Link href="#contact" active={activeSection === '#contact'}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
