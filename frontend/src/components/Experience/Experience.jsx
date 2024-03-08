import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {

  const [error, setError] = useState(null);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/experiences")
      .then(({ data }) => setExperiences(data.data.reverse()))
      .catch((error) => setError(error));
  }, []);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div> */}
        <ul className={styles.history}>
          {experiences.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
               {/*  <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                /> */}
                <div className={styles.historyItemDetails}>
                  <h3>{historyItem.attributes.title}</h3>
                  <p>{historyItem.attributes.time}</p>
                  <ul>
                    {historyItem.attributes.Description.split("/").map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
