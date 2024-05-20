import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import cssIcon from '../../assets/icons/css.png';
import typescriptIcon from '../../assets/icons/typescript.png';
import pythonIcon from '../../assets/icons/python.png';
import htmlIcon from '../../assets/icons/html.png';
import mysqlIcon from '../../assets/icons/mysql.png';
import reactIcon from '../../assets/icons/react.png';
import gitIcon from '../../assets/icons/git.png';

import './skills.scss';

const SkillItem: React.FC<{ iconSrc: string; skillName: string }> = ({ iconSrc, skillName }) => (
  <div className='skill-item'>
    <img className='skill-icon' src={ iconSrc } alt={ `Icon for ${ skillName }` } />
    <p>{skillName}</p>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <div className='skills-container' id='skills'>
      <Container>
        <Row>
          <Col md={ 6 }>
            <div className='skill-category'>
              <h2>Languages & Databases</h2>
              <div className='skill-list'>
                <SkillItem iconSrc={ cssIcon } skillName='CSS' />
                <SkillItem iconSrc={ typescriptIcon } skillName='TypeScript' />
                <SkillItem iconSrc={ pythonIcon } skillName='Python' />
                <SkillItem iconSrc={ htmlIcon } skillName='HTML5' />
                <SkillItem iconSrc={ mysqlIcon } skillName='MySQL' />
              </div>
            </div>
          </Col>
          <Col md={ 6 }>
            <div className='skill-category'>
              <h2>Frameworks & Technologies</h2>
              <div className='skill-list'>
                <SkillItem iconSrc={ reactIcon } skillName='ReactJS' />
              </div>
            </div>
            <div className='skill-category'>
              <h2>Tools & Platforms</h2>
              <div className='skill-list'>
                <SkillItem iconSrc={ gitIcon } skillName='Git' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
