import { RefObject } from 'react';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';
import './navbar.scss';

interface CustomNavbarProps {
  scrollToView: (elementRef: RefObject<HTMLDivElement>) => void;
  homeRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
}

export const CustomNavbar = (props: CustomNavbarProps) => {
  const { scrollToView, homeRef, skillsRef, aboutRef } = props;

  return (
    <Navbar expand='md' className='navbar-custom'>
      <Container fluid>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link onClick={ () => scrollToView(homeRef) }>Home</Nav.Link>
            <Nav.Link onClick={ () => scrollToView(aboutRef) }>About</Nav.Link>
            <Nav.Link onClick={ () => scrollToView(skillsRef) }>Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <SocialIcons />
    </Navbar>
  );
};

export const SocialIcons = () => {
  return (
    <div className='social'>
      <a
        className='social-icon'
        href='https://www.linkedin.com/in/padwaldeepen/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='bi bi-linkedin' />
      </a>
      <a
        className='social-icon'
        href='https://github.com/padwaldeepen'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='bi bi-github' />
      </a>
      <a
        className='social-icon'
        href='mailto:padwaldeepen@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='bi bi-envelope' />
      </a>
    </div>

  );
};
