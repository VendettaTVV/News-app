import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function HeaderComponent() {
  // Link component pomogaet nam rabotat s sylkami v react prilogenii
  // Link zapuskaet react-router kotorii v slou o4ered reshaet kakie komponenty pokazyvati
  //blagodarja Link iroute u nas ne perzagrugaetsa strani4ka a lish renderitsa komponenty
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