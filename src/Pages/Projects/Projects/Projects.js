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
      <Row xs={1} md={3} className="g-4">
        {projects.map((project) => (
          <ProjectDetails key={project.id} project={project}></ProjectDetails>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
