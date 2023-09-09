import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.scss";

export const Home = () => {
  return (
    <section className="home-section" id="home">
      <Container fluid className="home-content">
        {" "}
        <Row>
          <Col md={ 7 } className="home-header">
            <h1 className="heading">Hi There!</h1>

            <h1 className="heading-name">
              I&#39;M <strong className="main-name">DEEPEN PADWAL</strong>
            </h1>

            <p className="intro-text">
              Welcome to my portfolio website. I am passionate about web
              development and design.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
