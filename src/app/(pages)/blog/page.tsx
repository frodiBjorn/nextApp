"use client";
import { Posts } from "@/components/Posts/Posts";

import styles from "./Blog.module.scss";
import { useAppSelector, useAppStore } from "@/redux/hooks/hooks";

const Blog = () => {
  const store = useAppStore();
  const postsList = useAppSelector((state) => state.posts.postsList);
  return (
    <div className={styles.blog}>
      <div className="container">
        <div className="content">
          <h1>Blog</h1>
          <Posts />
          {postsList.length}
        </div>
      </div>
    </div>
  );
};

export default Blog;
