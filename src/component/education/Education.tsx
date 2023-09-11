import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './education.scss';

const data = [
  {
    title: 'August 2018 - Jun 2020',
    cardTitle: 'Master of Science (M.S.) in Management Information Systems',
    cardSubtitle: 'Auburn University at Montgomery',
  },
  {
    title: 'May 2016',
    cardTitle: 'Bachelor of Engineering (B.E.) in Information Technology',
    cardSubtitle: 'University of Mumbai',
  },
];

export const Education = () => {
const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index:any) => {
    setSelectedCard(index);
  };

  return (
    <div className="education-container">
      <Container>
        <Row className="align-items-center justify-content-center">
          {data.map((item, index) => (
            <Col sm={ 12 } md={ 6 } key={ index }>
              <div
                className={ `education-card ${
                  selectedCard === index ? 'active' : ''
                }` }
                onClick={ (index) => handleCardClick(index) }
              >
                <div className="education-card-content">
                  <h3>{item.cardTitle}</h3>
                  <p className="mb-0">{item.cardSubtitle}</p>
                  <p>{item.title}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};