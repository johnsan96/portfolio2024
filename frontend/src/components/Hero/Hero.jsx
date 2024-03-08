import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {

/*   const [error, setError] = useState(null);
  const [about, setAbout] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/about")
      .then(({ data }) => setAbout(data.data))
      .catch((error) => setError(error));

      
  }, []); */


  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm John</h1>
        <p className={styles.description}>
        I'm a software developer living in Germany, but I often feel more like an explorer navigating through lines of code than just your typical developer.
        </p>
        <a href="mailto:johnpauldoctolero@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Doctolero2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
