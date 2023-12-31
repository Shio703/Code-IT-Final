import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/twitter.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>&lt;703/&gt;</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link  className={styles.link} href="/">HomePage</Link>
        <Link  className={styles.link} href="/">Contact</Link>
        <Link  className={styles.link} href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Header;
