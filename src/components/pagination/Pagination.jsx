import React from "react";
import styles from "./pagination.module.css";

const Header = () => {
  return <div className={styles.container}>
    <button className={styles.button}>Previous</button>
    <button className={styles.button}>Next</button>
  </div>;
};

export default Header;
