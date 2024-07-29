import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import logo from './images/logo png.png'; 
import './style.css'; 

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  return (
    <div>
      <Navbar className='custom-Navbar' light expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" className="navbar-logo" /> 
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Menu.js">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contacto</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/home">Sobre nosotros</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
