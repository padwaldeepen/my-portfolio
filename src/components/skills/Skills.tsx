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

export const Skills: React.FC = () => {
  return (
    <div className='skills-container' id='skills'>
      <Container>
        <Row>
          <Col md={ 6 }>
            <div className='skill-category'>
              <h2>Languages & Databases</h2>
              <div className='skill-list'>
                {renderSkillItem(cssIcon, 'CSS')}
                {renderSkillItem(typescriptIcon, 'TypeScript')}
                {renderSkillItem(pythonIcon, 'Python')}
                {renderSkillItem(htmlIcon, 'HTML5')}
                {renderSkillItem(mysqlIcon, 'MySQL')}
              </div>
            </div>
          </Col>
          <Col md={ 6 }>
            <div className='skill-category'>
              <h2>Frameworks & Technologies</h2>
              <div className='skill-list'>{renderSkillItem(reactIcon, 'ReactJS')}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={ 6 }>
            <div className='skill-category'>
              <h2>Tools & Platforms</h2>
              <div className='skill-list'>{renderSkillItem(gitIcon, 'Git')}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const renderSkillItem = (iconSrc: string, skillName: string) => (
  <div className='skill-item'>
    <img className='icon-style round-image' src={ iconSrc } alt={ skillName } />
    <p>{skillName}</p>
  </div>
);
