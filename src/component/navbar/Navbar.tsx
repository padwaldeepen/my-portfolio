import { Navbar, Nav, Container } from 'react-bootstrap';
import './navbar.scss';

export const CustomNavbar = () => {
  return (
    <Navbar expand="md" className="navbar-custom">
      <Container fluid>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1GmXKCLzgeONl-luzeztNqhHq59al-U7y/view"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
