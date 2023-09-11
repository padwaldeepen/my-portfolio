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
                <div className="skill-item">
                  <img
                    className="icon-style round-image"
                    src="Assests/icons/js.png" 
                    alt="JavaScript (ES6+)"
                  />
                  <p>JavaScript (ES6+)</p>
                </div>
                <div className="skill-item">
                  <img
                    className="icon-style round-image"
                    src="Assests/icons/typescript.png" 
                    alt="TypeScript"
                  />
                  <p>TypeScript</p>
                </div>
                <div className="skill-item">
                  <img
                    className="icon-style round-image"
                    src="Assests/icons/python.png" 
                    alt="Python"
                  />
                  <p>Python</p>
                </div>
                <div className="skill-item">
                  <img
                    className="icon-style round-image"
                    src="Assests/icons/html.png" 
                    alt="HTML5"
                  />
                  <p>HTML5</p>
                </div>
                <div className="skill-item">
                  <img
                    className="icon-style round-image"
                    src="Assests/icons/mysql.png" 
                    alt="MySQL"
                  />
                  <p>MySQL</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={ 6 }>
            <div className="skill-category">
              <h2>Frameworks & Technologies</h2>
              <div className="skill-list">
                <div className="skill-item">
                  <img
                    className="icon-style round-image"
                    src="Assests/icons/react.png"
                    alt="ReactJS" 
                  />
                  <p>ReactJS</p>
                </div>
             
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={ 6 }>
            <div className="skill-category">
              <h2>Tools & Platforms</h2>
              <div className="skill-list">
                <div className="skill-item">
                  <img
                    className="icon-style round-image"
                    src="Assests/icons/git.png"
                    alt="Git" 
                  />
                  <p>Git</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
