import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Nav, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const FinalProject = () => {
  const { id } = useParams();
  console.log(id);
  const [projects, setProjects] = useState([]);
  const [matchedProject, setMatchedProject] = useState([]);

  useEffect(() => {
    fetch('/project.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  console.log(projects);

  useEffect(() => {
    const FindService = projects.find(
      (project) => project.id === JSON.parse(id)
    );

    setMatchedProject(FindService);
    console.log(FindService);
  }, [projects, id]);

  return (
    <div style={{ backgroundColor: '#06090F', color: 'white' }} className="p-5">
      <div className="text-center pb-3">
        <h2
          style={{ fontSize: '48px', paddingBottom: '20px' }}
          className="fw-bolder text-white secondaryColor"
        >
          <span>{matchedProject?.name}</span>
        </h2>
      </div>
      <Row xs={12} md={1}>
        <Col>
          <Row md={3} className="g-4">
            <div style={{ borderRadius: '10px' }}>
              <img src={matchedProject?.img1} alt="" className="w-100 p-3   " />
            </div>
            <div style={{ borderRadius: '10px' }}>
              <img src={matchedProject?.img2} alt="" className="w-100 p-3  " />
            </div>
            <div style={{ borderRadius: '10px' }}>
              <img src={matchedProject?.img3} alt="" className="w-100 p-3 " />
            </div>
          </Row>
        </Col>
        <Col>
          <Row xs={12} md={2}>
            <Col>
              <Card.Body>
                <Card.Text className="text-align-justify">
                  {matchedProject?.desk}
                </Card.Text>
              </Card.Body>
            </Col>
            <Col>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white"
                href={matchedProject?.live}
              >
                <Button
                  className="shadow border rounded-3 m-2 px-3 fs-5"
                  variant="outline-warning"
                >
                  <i class="fas fa-ribbon"></i> Live Preview
                </Button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white"
                href={matchedProject?.client}
              >
                <Button
                  className="shadow border rounded-3 px-3 m-2 fs-5"
                  variant="outline-warning"
                >
                  <i class="fab fa-github"></i> GitHub Code
                </Button>
              </a>
              {matchedProject?.server && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                  href={matchedProject?.server}
                >
                  <Button
                    className="shadow border rounded-3 px-3 m-2 fs-5"
                    variant="outline-warning"
                  >
                    <i class="fab fa-github"></i> GitHub Server
                  </Button>
                </a>
              )}
              <Nav.Link
                className="text-decoration-none d-lg-inline"
                as={Link}
                to="/"
              >
                <Button className=" pe-3 fs-5" variant="outline-warning">
                  <i class="fas fa-home"></i> Back Home
                </Button>
              </Nav.Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FinalProject;
