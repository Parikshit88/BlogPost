import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through them and Display them
const Blogs = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="blogs" style={{ padding: "0 370px" }}>
          <div className={styles.blogItemh3}>
            <Link href={"/blogpost/la-liga"}>
              <h2 align="center">Blog1</h2>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              corporis aspernatur est voluptate sed voluptatem fugiat iure quasi
              nihil consequuntur? Beatae fugit voluptate amet mollitia deserunt
              corporis ratione suscipit. Harum!
            </p>
          </div>
          <div className={styles.blogItemh3}>
            <h2 align="center">Blog2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              corporis aspernatur est voluptate sed voluptatem fugiat iure quasi
              nihil consequuntur? Beatae fugit voluptate amet mollitia deserunt
              corporis ratione suscipit. Harum!
            </p>
          </div>
          <div className={styles.blogItemh3}>
            <h2 align="center">Blog3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              corporis aspernatur est voluptate sed voluptatem fugiat iure quasi
              nihil consequuntur? Beatae fugit voluptate amet mollitia deserunt
              corporis ratione suscipit. Harum!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blogs;
