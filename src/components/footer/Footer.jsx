import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className={styles.logoImg}
          />
          <h1 className={styles.logoText}>Blog &lt;703/&gt;</h1>
        </div>
        <p className={styles.desc}>
          Project by Shio Zhamurashvili (Gurjaani Tech Park) <br />
          Happy New Year🎄🎆<br />
          (This is not end of this project i promise:))
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={20} height={20} />
          <Image src="/instagram.png" alt="" width={20} height={20} />
          <Image src="/twitter.png" alt="" width={20} height={20} />
          <Image src="/youtube.png" alt="" width={20} height={20} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">YouTube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
