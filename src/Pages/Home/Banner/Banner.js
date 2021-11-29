import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
  return (
    <div style={{ backgroundColor: '', fontWeight: '700' }}>
      <Container>
        <Row xs={1} md={2} className="gx-md-5 gx-sm-3 text-center py-5">
          <Slide left>
            <Col className="px-5 mb-5 text-start ">
              <h1 className="fw-bold">Kowshar Robin</h1>

              <p>
                I am a deep learning enthusiast who is thoroughly passionate
                about finding exciting insights from real-world information. I'm
                always trying to enhance my qualities with new challenges.
              </p>
              <br />
              <HashLink to="/explore">
                <Button
                  className="shadow border rounded-pill me-2 fw-bold"
                  variant="secondary"
                >
                  Download Resume
                </Button>
              </HashLink>
              <HashLink to="/dashboard">
                <Button
                  className="shadow fw-bold rounded-pill"
                  variant="secondary"
                >
                  Hire Me
                </Button>
              </HashLink>
            </Col>
          </Slide>
          <Slide right>
            <Col>
              <img
                style={{ clipPath: 'polygon(100% 0%, 0 0, 50% 70%)' }}
                src="https://i.ibb.co/H2NXZzQ/rsz-removalai-tmp-61125f0cc661b-jm7eyk-2-20210810185239201.jpg"
                alt=""
                className="img-fluid"
              />
            </Col>
          </Slide>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
