import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Function to handle smooth scrolling
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <span className={styles.scrollLink} onClick={() => smoothScroll("about")}>About</span>
          </li>
          <li>
            <span className={styles.scrollLink} onClick={() => smoothScroll("experience")}>Experience</span>
          </li>
          <li>
            <span className={styles.scrollLink} onClick={() => smoothScroll("projects")}>Projects</span>
          </li>
          <li>
            <span className={styles.scrollLink} onClick={() => smoothScroll("contact")}>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};
