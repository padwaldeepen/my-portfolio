import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';
import './navbar.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const CustomNavbar: FC = () => {
  return (
    <Navbar expand='md' className='navbar-custom'>
      <Container fluid>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/skills'>Skills</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
