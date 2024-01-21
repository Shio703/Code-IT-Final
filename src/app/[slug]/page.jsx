import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

function singlePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt="user_img"
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>John Doe </span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="Image" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus maxime earum magni libero doloremque assumenda
              modi! Architecto, quas. Eligendi vero nesciunt excepturi magni
              minus beatae non id eos officiis quod!
            </p>
            <h2>Lorem, ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus maxime earum magni libero doloremque assumenda
              modi! Architecto, quas. Eligendi vero nesciunt excepturi magni
              minus beatae non id eos officiis quod!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus maxime earum magni libero doloremque assumenda
              modi! Architecto, quas. Eligendi vero nesciunt excepturi magni
              minus beatae non id eos officiis quod!
            </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
      <Menu />
      </div>
    </div>
  );
}

export default singlePage;
