import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';
import './navbar.scss';
import { FC } from 'react';

export const CustomNavbar:FC = () => {
  return (
    <Navbar expand='md' className='navbar-custom'>
      <Container fluid>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/skills'>Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
