import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('./project.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // console.log(projects);
  return (
    <div style={{ backgroundColor: '#06090F' }} className="p-5">
      <div className="text-center pb-3">
        <h2
          style={{ fontSize: '48px', paddingBottom: '20px' }}
          className="fw-bolder text-white"
        >
          <span>Some Of My Projects</span>
        </h2>
      </div>
      {/* <Header></Header> */}
      <Row xs={1} md={3} className="g-4">
        {projects.map((project) => (
          <ProjectDetails key={project.id} project={project}></ProjectDetails>
        ))}

        {/* <Col>
          <Card className="bg-dark">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/cN6LK0q/screenshot-book-and-travel-cd69c-web-app-2021-11-30-20-55-01.png"
            />
            <Card.Body className="text-white">
              <Card.Title>Book And Travel</Card.Title>
              <Card.Text>
                Drone selling website including Login Authentication and
                dashboard for users and admin.
                <Nav.Link
                  className="text-decoration-none "
                  as={Link}
                  to="/about"
                >
                  <Button variant="outline-warning">More..</Button>
                </Nav.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/J5XFM0K/screenshot-doctery-4f0d8-web-app-2021-11-30-20-53-41.png"
            />
            <Card.Body className="text-white">
              <Card.Title>DOCTERY</Card.Title>
              <Card.Text>
                Doctor Service website including Login Authentication and
                dashboard for users and admin.
                <Nav.Link
                  className="text-decoration-none "
                  as={Link}
                  to="/about"
                >
                  <Button variant="outline-warning">More..</Button>
                </Nav.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/f4h9kvY/screenshot-skill-point-assignment-9-netlify-app-2021-11-30-21-21-00.png"
            />
            <Card.Body className="text-white">
              <Card.Title>Skill Point</Card.Title>
              <Card.Text>
                Doctor Service website including Login Authentication and
                dashboard for users and admin.
                <Nav.Link
                  className="text-decoration-none "
                  as={Link}
                  to="/about"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-white"
                    href="https://sky-cloud-drone.web.app/"
                  >
                    <Button
                      className="shadow border rounded-3 px-3 fs-5"
                      variant="outline-warning"
                      size="sm"
                    >
                      Preview
                    </Button>
                  </a>
                </Nav.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/TMDPmBB/screenshot-honda-cbr-3rd-assignment-kawsar-robin-netlify-app-2021-11-30-21-12-04.png"
            />
            <Card.Body className="text-white">
              <Card.Title>Honda CBR</Card.Title>
              <Card.Text>
                Honda Company Bike website including Login Authentication and
                dashboard for users and admin.
                <Nav.Link
                  className="text-decoration-none "
                  as={Link}
                  to="/about"
                >
                  <Button variant="outline-warning">More..</Button>
                </Nav.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/8b932sz/screenshot-macbook-pro-assignment-no-5-netlify-app-2021-11-30-21-16-02.png"
            />
            <Card.Body className="text-white">
              <Card.Title>MacBook Pro</Card.Title>
              <Card.Text>
                MacBook Pro is a Booking app website including Login
                Authentication and dashboard for users and admin.
                <Nav.Link
                  className="text-decoration-none "
                  as={Link}
                  to="/about"
                >
                  <Button variant="outline-warning">More..</Button>
                </Nav.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default Projects;
