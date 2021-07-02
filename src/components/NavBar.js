import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Collapse
} from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";

const sections = [
  { name: "about", link: "about" },
  { name: "work", link: "work" },
  { name: "projects", link: "projects" },
  { name: "fun stuff", link: "fun-stuff" },
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

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const NavItems = sections.map((item) => (
    <NavItem>
      <Link
        style={navItemStyle}
        to={item.link}
        spy={true}
        smooth={true}
        duration={500}
      >
        {item.name}
      </Link>
    </NavItem>
  ));

  return (
    <Navbar color="white" light fixed="top">
      <NavbarBrand href="" style={navBrandStyle}>
        amanda misjuwar
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
      <Nav style={navStyle}>{NavItems}</Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
