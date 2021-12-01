import React from 'react';
import { Button, Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectDetails = ({ project }) => {
  const { name, imgMain, id } = project;
  console.log(id);
  return (
    <Col>
      <Card className="bg-dark">
        <Card.Img variant="top" src={imgMain} />
        <Card.Body>
          <Card.Title className="text-white">{name}</Card.Title>
          <Card.Text className="text-white">
            <Nav.Link
              className="text-decoration-none "
              as={Link}
              to={`/projects/${id}`}
            >
              <Button size="sm" variant="outline-warning">
                Read More
              </Button>
            </Nav.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectDetails;
