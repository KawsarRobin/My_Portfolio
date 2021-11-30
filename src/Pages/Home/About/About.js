import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <div style={{ backgroundColor: '#06090F', color: 'white' }} className="p-5">
      <Container>
        <div className="text-center pb-3">
          <h2
            style={{ fontSize: '48px', paddingBottom: '20px' }}
            className="fw-bolder"
          >
            <span>About Me</span>
            {/* <span className="text-center">
              <hr
                style={{
                  width: '40px',

                  color: 'white',
                  height: '5px',
                }}
              />
            </span> */}
          </h2>
        </div>
        <Row xs={1} md={2} className="g-5">
          <Slide left>
            <Col>
              <div className="">
                <img
                  className=" rounded rounded-5 img-fluid"
                  src={`https://the-shahriar.github.io/assets/img/illustration/dark_illustration.svg`}
                  alt=""
                />
              </div>
            </Col>
          </Slide>
          <Slide right>
            <Col>
              <div>
                <h3 style={{ color: '#ffa600' }}>Web Developer</h3>
                <p>
                  Hello, I'm Kowshar Robin. From Chittagong, Bangladesh. At
                  present I'm Studying on Bachelor of Business
                  Administration(BBA) at National University Bangladesh. Beside
                  This I'm Exploring my technological Skills with my enthusiasm.
                  More over I'm getting loved it.
                </p>

                {/* <HashLink as={Link} to="/explore">
                  <Button
                    className="shadow my-3 rounded-pill"
                    variant="outline-dark"
                  >
                    See Products
                  </Button>
                </HashLink> */}
              </div>
              <div>
                <h3 style={{ color: '#ffa600' }}>Personal Obsession</h3>
                <div className="fw-bolder d-flex justify-content-start fs-3 my-3 align-items-start">
                  <i class="fas fa-plane  mx-2"></i>
                  <i class="fas fa-laptop-code mx-2"></i>
                  <i class="fas fa-gamepad mx-2"></i>
                  <i class="fas fa-music mx-2"></i>
                  <i class="fas fa-bicycle mx-2"></i>
                </div>
                <p>
                  I am a deep learning enthusiast who is thoroughly passionate
                  about finding exciting insights from real-world information.
                  I'm always trying to enhance my qualities with new challenges.
                </p>
              </div>
            </Col>
          </Slide>
        </Row>
      </Container>
    </div>
  );
};

export default About;
