import { forwardRef } from 'react';
import './about.scss';

export const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ ref } className='about-section'>
      <h3 className='section-heading'>About me<span>.</span></h3>

      <p className='name'><span>Deepen</span>Padwal</p>
      <p className='about-me-text'>
        I am originally from Maharashtra, India. Growing up, I was always
        fascinated by technology's ability to turn ideas into reality, which led me to pursue software
        development. During my master's in Management Information Systems in the USA, I served as a
        Graduate Research Assistant (GRA) under my professor, deepening my skills in coding and
        application development. Currently, I'm with Tata Consultancy Services, collaborating closely
        with PwC on exciting projects. From optimizing processes to crafting user-friendly
        applications, I thrive on solving challenges and bringing ideas to life. Beyond work, I enjoy
        exploring books, playing Fortnite with friends, and delving into finance. I'm driven by
        continuous learning and believe in the power of collaboration. My goal is to advance in AWS
        and emerging technologies, while contributing positively to the tech community. Feel free to
        connect with me on LinkedIn or drop me an email.
      </p>

    </div>
  );
});
