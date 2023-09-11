import Typewriter from 'typewriter-effect';
import { SocialIcon } from 'react-social-icons';
import './home.scss';

export const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <div className="home-header">
          <h1 className="heading">Hi There!</h1>
          <h1 className="heading-name">
            I'M <span className="main-name">DEEPEN PADWAL</span>
          </h1>
          <p className="intro-text">
            Welcome to my portfolio website where I transform ideas into beautiful, interactive, and{' '}
            <span className="highlight-text">user-centric</span> web experiences.{' '}
            <Typewriter
              options={ {
                strings: [
                  'Front-End Development',
                  'UI/UX Design',
                  'Creating Engaging User Experiences',
                ],
                autoStart: true,
                loop: true,
              } }
            />
          </p>
          <div className="social">
            <SocialIcon
              className="social-icon"
              url="https://www.linkedin.com/in/padwaldeepen/"
              network="linkedin"
              target="_blank"
              rel="noopener"
            />
            <SocialIcon
              className="social-icon"
              url="https://github.com/padwaldeepen"
              network="github"
              target="_blank"
              rel="noopener"
            />
            <SocialIcon
              className="social-icon"
              url="mailto:padwaldeepen@gmail.com"
              network="email"
              target="_blank"
              rel="noopener"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

