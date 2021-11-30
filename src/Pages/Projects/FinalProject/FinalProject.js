import React, { useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const FinalProject = () => {
  const { id } = useParams();
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
  }, [projects]);

  return (
    <Row xs={12}>
      <Card>
        <Card.Img variant="top" src={matchedProject?.img1} />
        <Card.Body>
          <Card.Title>{matchedProject?.name}</Card.Title>
          <Card.Text>{matchedProject?.desk}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default FinalProject;
