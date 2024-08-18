import { forwardRef } from 'react';
import './skills.scss';

export const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ ref } className='skills-section'>
      <h3 className='section-heading'>
        My skills<span>.</span>
      </h3>
      <div className='skills-content'>
        <div>
          <span>
            <i className='devicon-react-plain' aria-hidden='true' />
          </span>
          <h4>React JS</h4>
        </div>
        <div>
          <span>
            <i className='devicon-bootstrap-plain' aria-hidden='true' />
          </span>
          <h4>Bootstrap</h4>
        </div>
        <div>
          <span>
            <i className='devicon-python-plain' aria-hidden='true' />
          </span>
          <h4>Python</h4>
        </div>
        <div>
          <span>
            <i className='devicon-graphql-plain' aria-hidden='true' />
          </span>
          <h4>GraphQL</h4>
        </div>
        <div>
          <span>
            <i className='devicon-nodejs-plain' aria-hidden='true' />
          </span>
          <h4>Node JS</h4>
        </div>
        <div>
          <span>
            <i className='devicon-docker-plain' aria-hidden='true' />
          </span>
          <h4>Docker</h4>
        </div>
        <div>
          <span>
            <i className='devicon-git-plain' aria-hidden='true' />
          </span>
          <h4>Git/GitHub</h4>
        </div>
        <div>
          <span>
            <i className='devicon-openapi-plain' aria-hidden='true' />
          </span>
          <h4>Generative AI (Python)</h4>
        </div>
      </div>
    </div>

  );
});
