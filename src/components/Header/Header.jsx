import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.nav}>
        <NavLink to="/">
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </NavLink>
        <div className={styles.navbar}>
          <NavLink to="/">
            <span className={styles.nav__links}>Home</span> 
          </NavLink>
          <NavLink to="/">
            <span className={styles.nav__links}>Sign in</span> 
          </NavLink>
          <NavLink to="/">
            <span className={styles.nav__links}>Sign up</span> 
          </NavLink>
        </div>
      </section>

      <section className={styles.banner}>
        <h1>conduit</h1>
        <p>A place share your knowledge.</p>
      </section>
    </header>
  );
};

export default Header;
