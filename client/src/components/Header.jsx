import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import logoimg from '../img/chiyakLogo.png';
import './Header.css';

const Header = () => (
  <Navbar bsStyle="default" className="header" fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><img className="logoimg" src={logoimg} alt="#" /></a>
      </Navbar.Brand>
      <Nav>
        <NavItem className="nav-item">{'"치약의 개념을 바로잡다"'}</NavItem>
      </Nav>
    </Navbar.Header>
  </Navbar>
);

export default Header;
