import Typewriter from 'typewriter-effect';
import { SocialIcon } from 'react-social-icons';

import { ReactComponent as Desk } from './../../Assests/img/desk.svg';

import './home.scss';

export const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <Header />
        <Desk className="desk-image" />
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <div className="home-header">
      <h1 className="heading-name">DEEPEN PADWAL</h1>
      <p className="intro-text">
        <Typewriter
          options={ {
            strings: ['Software Engineer'],
            autoStart: true,
            loop: true,
          } }
        />
      </p>
      <SocialIcons />
    </div>
  );
};

const SocialIcons = () => {
  return (
    <div className="social">
      <SocialIcon
        className="social-icon"
        url="https://www.linkedin.com/in/padwaldeepen/"
        network="linkedin"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon
        className="social-icon"
        url="https://github.com/padwaldeepen"
        network="github"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon
        className="social-icon"
        url="mailto:padwaldeepen@gmail.com"
        network="email"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};
