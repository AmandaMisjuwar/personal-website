import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const navItems = [
    {name: 'about', link: },
    {name: 'work'},
    {name: 'projects'},
    {name: 'fun stuff'}
]


function NavBar() {
    const navBrandStyle = {
        fontFamily: 'Kumbh Sans, sans-serif',
        fontWeight: 400
    };
    const navItemStyle = {
        fontFamily: 'Kumbh Sans, sans-serif',
        fontWeight: 400
    };
  return (
    <Navbar fixed="top">
      <Navbar.Brand href="#home" style={navBrandStyle}>Amanda Misjuwar</Navbar.Brand>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Navbar>
  );
}

export default NavBar;
