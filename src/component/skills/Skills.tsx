import { Container, Row, Col } from 'react-bootstrap';

import './skills.scss';

export const Skills = () => {
  return (
    <div className="skills-container">
      <Container>
        <Row>
          <Col md={ 6 }>
            <div className="skill-category">
              <h2>Languages & Databases</h2>
              <div className="skill-list">
                {renderSkillItem('Assests/icons/js.png', 'JavaScript (ES6+)')}
                {renderSkillItem('Assests/icons/typescript.png', 'TypeScript')}
                {renderSkillItem('Assests/icons/python.png', 'Python')}
                {renderSkillItem('Assests/icons/html.png', 'HTML5')}
                {renderSkillItem('Assests/icons/mysql.png', 'MySQL')}
              </div>
            </div>
          </Col>
          <Col md={ 6 }>
            <div className="skill-category">
              <h2>Frameworks & Technologies</h2>
              <div className="skill-list">
                {renderSkillItem('Assests/icons/react.png', 'ReactJS')}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={ 6 }>
            <div className="skill-category">
              <h2>Tools & Platforms</h2>
              <div className="skill-list">
                {renderSkillItem('Assests/icons/git.png', 'Git')}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const renderSkillItem = (iconSrc: string, skillName: string) => (
  <div className="skill-item">
    <img className="icon-style round-image" src={ iconSrc } alt={ skillName } />
    <p>{skillName}</p>
  </div>
);
