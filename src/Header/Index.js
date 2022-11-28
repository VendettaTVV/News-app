import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function HeaderComponent() {
  // Link component helps us to work with links in react app
  // Link starts up react-router which in turn decides which components to show
  // Thanks to Link and route we do not reload the page, but only render the component
  return (
    <Navbar bg="light" className="mb-5">
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          News
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/contact" className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default HeaderComponent;