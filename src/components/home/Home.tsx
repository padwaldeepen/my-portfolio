import Typewriter from 'typewriter-effect';
import { forwardRef } from 'react';

import './home.scss';

export const Home = forwardRef<HTMLDivElement>((props, ref) => {
  const role = [ 'Full-Stack Developer', 'Front-End Developer', 'Software Engineer' ];

  return (
    <section ref={ ref } className='home-section'>
      <h1 className='heading-name'>Hello<span>.</span></h1>
      <div className='group-role'>
        <h1 className='heading-name'>I am</h1>
        <p className='intro-text'>
          <Typewriter
            options={ {
              autoStart: true,
              loop: true,
              strings: role,
            } }
          />
        </p>
      </div>
      <h1 className='heading-name margin-left'>Deepen</h1>

    </section>
  );
});
