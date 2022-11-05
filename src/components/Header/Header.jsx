import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src="/logo.png" alt="Logo" className={styles.logo} />
      </NavLink>
    </header>
  );
};

export default Header;
