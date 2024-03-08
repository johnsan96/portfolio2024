import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {

  const [error, setError] = useState(null);
  const [about, setAbout] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/about")
      .then(({ data }) => setAbout(data.data))
      .catch((error) => setError(error));

  }, []);


  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/*  <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ship.png")} alt="Cursor icon" className={styles.heroImg}/>
            <div className={styles.aboutItemText}>
              <p>
                {about ?
                  about.attributes.about
                  : "no Text specified ... :("}
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
