
import { SocialIcons } from '../navbar/Navbar';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h4>Contact Me</h4>
          <ul>
            <li><a href='mailto:example@example.com'>padwaldeepen@gmail.com</a></li>
            <li>Florida, USA</li>
          </ul>
        </div>
        <div className='footer-section'>
          <h4>Follow Me</h4>
          <div className='social-icons'>
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} Deepen Padwal. All rights reserved.</p>
      </div>
    </footer>
  );
};
