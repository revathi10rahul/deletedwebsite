import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import nswhite from '../../Assets/nswhite.png'
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-danger">
    <img
      src={nswhite}
      alt="logo"
      style={{ width: "108px", height: "40px" }}
    />
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="text-white">Home</Nav.Link>
          <Nav.Link className="text-white">Case Study</Nav.Link>
          <Nav.Link className="text-white">About Us</Nav.Link>
          <Nav.Link className="text-white">Blog</Nav.Link>
          <Nav.Link className="text-white">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}

export default BasicExample;