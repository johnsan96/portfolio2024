import React from "react";
import styles from "./Projects.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/projects?populate=*")
      .then(({ data }) => { console.log(data); setProjects(data.data)})
      .catch((error) => setError(error));

      
  }, []);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project.attributes} />;
        })}
      </div>
    </section>
  );
};
