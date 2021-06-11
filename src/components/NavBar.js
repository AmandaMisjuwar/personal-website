import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const sections = [
  { name: "about", link: "/about" },
  { name: "work", link: "/work" },
  { name: "projects", link: "/projects" },
  { name: "fun stuff", link: "/fun-stuff" },
];

function NavBar() {
  const navBrandStyle = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    paddingLeft: "10px",
  };
  
  const navItemStyle = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    margin: "30px",
    fontSize: "18px",
    color: "black",
  };

  const navStyle = {
    paddingLeft: "40%",
  };

  const NavItems = sections.map((item) => (
    <NavItem>
      <Link style={navItemStyle} to={item.link}>
        {item.name}
      </Link>
    </NavItem>
  ));

  return (
    <Navbar color="" light fixed="top">
      <NavbarBrand href="#home" style={navBrandStyle}>
        amanda misjuwar
      </NavbarBrand>
      <Nav style={navStyle}>{NavItems}</Nav>
    </Navbar>
  );
}

export default NavBar;
