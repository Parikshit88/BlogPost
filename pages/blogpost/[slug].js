import React, { useState } from "react";
import * as fs from "fs";
import styles from "../../styles/BlogPost.module.css";

//Step1: Find the file according to the slug
//Step2: Populate them inside the page
const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        {blog && (
          <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        )}
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: "blog1" },
      },
      {
        params: { slug: "blog2" },
      },
      {
        params: { slug: "blog3" },
      },
    ],
    fallback: true, // false or "blocking"
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}
export default Slug;
