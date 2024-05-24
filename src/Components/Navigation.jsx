import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faCakeCandles, faHouse } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from'react-router-dom'

export function Navigation() {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>        
          <Nav className="gap-3">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <span><FontAwesomeIcon icon={faHouse} /></span> Home
                </Link>
            <Link to="/Contact" style={{ textDecoration: 'none', color: 'white' }}><span style={{ color: 'orange' }}><FontAwesomeIcon icon={faAddressBook} /></span> Contacto</Link>
          </Nav>
          <Navbar.Brand>Happy Cake <span style={{ color: 'yellow' }}><FontAwesomeIcon icon={faCakeCandles} /></span></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}