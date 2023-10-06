import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
//Step1: Find the file according to the slug
//Step2: Populate them inside the page
const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          officiis veniam velit odio architecto exercitationem iure animi
          molestias?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Animi debitis eaque ullam? Dolorum vero velit eos facere excepturi nam
          aut mollitia! Deleniti amet impedit omnis delectus nesciunt cum,
          rerum, quisquam iusto eveniet iste natus. Saepe, nihil dolore eum
          corrupti esse optio quibusdam soluta fugit.
        </div>
      </main>
    </div>
  );
};

export default slug;
