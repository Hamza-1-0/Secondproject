import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar-style.css";
import { IoIosMoon } from "react-icons/io";

const firstNavbar = ({ scrollHeight }) => {
  return (
    <Navbar
      expand="lg"
      className={scrollHeight <= 50 ? "customNav nav" : "bg-body nav"}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src="src\assets\News\logo.png" alt="" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home" className="links">
              Home
            </Nav.Link>
            <Nav.Link href="#Services" className="links">
              Services
            </Nav.Link>
            <Nav.Link href="#Portfolio" className="links">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#Testimonials" className="links">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#Team" className="links">
              Team
            </Nav.Link>{" "}
            <NavDropdown
              className="menu-link"
              title="Menu"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="items" href="#action/3.1">
                About
              </NavDropdown.Item>
              <NavDropdown.Item className="items" href="#action/3.2">
                Pricing
              </NavDropdown.Item>
              <NavDropdown.Item className="items" href="#action/3.3">
                FAQs
              </NavDropdown.Item>
              <NavDropdown.Item className="items" href="#action/3.4">
                Terms & Conditions
              </NavDropdown.Item>
              <NavDropdown.Item className="items" href="#action/3.5">
                Privacy policy
              </NavDropdown.Item>
              <NavDropdown.Item className="items" href="#action/3.6">
                Blogs
              </NavDropdown.Item>
              <NavDropdown.Item className="items" href="#action/3.7">
                Blog Detail Page
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#News" className="links">
              News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="btn-group">
          <button className="Get">Get Quotes</button>
          <button className="Dark">
            <IoIosMoon />
          </button>
        </div>
      </Container>
    </Navbar>
  );
};

export default firstNavbar;
