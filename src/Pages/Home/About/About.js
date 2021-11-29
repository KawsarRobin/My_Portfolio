import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const About = () => {
  return (
    <div className="p-5">
      <Container>
        <div className="text-center pb-3">
          <h2 className="fw-bolder ">
            <span className="text-primary">About Me</span>
          </h2>
          <p className="text-secondary">
            Know About Me to build your trust and get the best of me.
          </p>
        </div>
        <Row xs={1} md={2} className="g-5">
          <Slide left>
            <Col>
              <div className="">
                <img
                  className=" rounded rounded-5 img-fluid"
                  src={`https://i.ibb.co/H2NXZzQ/rsz-removalai-tmp-61125f0cc661b-jm7eyk-2-20210810185239201.jpg`}
                  alt=""
                />
              </div>
            </Col>
          </Slide>
          <Slide right>
            <Col>
              <div>
                <p>
                  I am a deep learning enthusiast who is thoroughly passionate
                  about finding exciting insights from real-world information.
                  I'm always trying to enhance my qualities with new challenges.
                </p>

                <HashLink as={Link} to="/explore">
                  <Button
                    className="shadow my-3 rounded-pill"
                    variant="outline-dark"
                  >
                    See Products
                  </Button>
                </HashLink>
              </div>
            </Col>
          </Slide>
        </Row>
      </Container>
    </div>
  );
};

export default About;
