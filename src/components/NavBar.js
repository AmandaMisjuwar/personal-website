import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-scroll";
import Resume from '../resources/AmandaMisjuwar_Resume.pdf';

const sections = [
  { name: "about", link: "about" },
  { name: "work", link: "work" },
  { name: "projects", link: "projects" },
  { name: "fun stuff", link: "coming-soon" },
];

function NavBar() {
  const navBrandStyle = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    paddingLeft: "2%",
  };

  const navItemStyle = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    fontSize: "18px",
    color: "black",
    paddingTop: '5px',
    paddingBottom: '5px',
    cursor: 'pointer',
    marginLeft: '25px',
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const NavItems = sections.map((item) => (
    <NavItem style={navItemStyle} >
      <Link
        to={item.link}
        smooth={true}
        duration={500}
      >
        {item.name}
      </Link>
    </NavItem>
  ));

  return (
    <Navbar color="white" light fixed="top" expand="lg">
      <NavbarBrand href="" style={navBrandStyle}>
        amanda misjuwar
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar >
        <Nav className="ml-auto" navbar>
          {NavItems}
          <NavItem style={navItemStyle}>
          <a style={{color: "black"}} href={Resume} rel="noopener noreferrer" target="_blank">resume</a>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
