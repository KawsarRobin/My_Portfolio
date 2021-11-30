import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <div style={{ backgroundColor: '#010000', color: 'white' }}>
      <Container>
        <Row xs={1} md={1} className="gx-md-5 gx-sm-3 text-center py-5">
          <Slide left>
            <Col className="px-5 mb-5 text-center ">
              <h1 style={{ fontSize: '64px' }} className="fw-bold my-3">
                Kowshar Robin
              </h1>
              <h2 className="my-3">
                <Typewriter
                  style={{ color: '#FFA600' }}
                  options={{
                    strings: ['React Developer', 'MERN Stack Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>

              <h5 className="my-3">Every Exparts Are Once A Begainer.</h5>
              <div
                style={{ color: '#FFA600' }}
                className="fw-bolder d-flex justify-content-center fs-3 my-3 align-items-center"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FFA600' }}
                  className="secondaryColor"
                  href="https://github.com/KawsarRobin/"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FFA600' }}
                  className="secondaryColor"
                  href="https://www.linkedin.com/in/kawsar-robin/"
                >
                  <i class="fab fa-linkedin mx-3"></i>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FFA600' }}
                  className="secondaryColor"
                  href="https://www.facebook.com/niax.robin"
                >
                  <i className="fab fa-facebook "></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FFA600' }}
                  className="secondaryColor"
                  href="https://www.linkedin.com/in/kawsar-robin/"
                >
                  <i className="fab fa-instagram mx-3"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FFA600' }}
                  className="secondaryColor"
                  href="https://www.linkedin.com/in/kawsar-robin/"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>

              <br />

              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white"
                href="https://cutt.ly/xTCkXtI"
              >
                <Button
                  className="shadow border rounded-pill px-3 fs-5"
                  variant="outline-warning"
                >
                  <i class="fas fa-cloud-download-alt"></i> Download Resume
                </Button>
              </a>
            </Col>
          </Slide>
          <Slide right>
            {/* <Col>
              <img
                style={{ clipPath: 'polygon(100% 0%, 0 0, 50% 70%)' }}
                src="https://i.ibb.co/H2NXZzQ/rsz-removalai-tmp-61125f0cc661b-jm7eyk-2-20210810185239201.jpg"
                alt=""
                className="img-fluid"
              />
            </Col> */}
          </Slide>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
