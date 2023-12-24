import React from "react";
import styles from "./cardList.module.css";
import Pagination from "@/components/pagination/Pagination"

const Header = () => {
  return <div className={styles.container}><Pagination/></div>;
};

export default Header;
