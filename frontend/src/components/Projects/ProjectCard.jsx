import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, description, skills, imageSrc, demo, source, pictures},
}) => {
  return (
    <div className={styles.container}>
    {pictures.data && pictures.data.map(picture => (
        <img
          key={picture.id}
          src={"http://localhost:1337"+picture.attributes.url}
          alt={picture.attributes.name}
          className={styles.image}
        />
      ))}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    
    </div>
  );
};
