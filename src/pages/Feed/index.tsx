import { CardPost } from "../../components/CardPost/index.tsx";
import { posts } from "./data.ts";
import styles from "./feed.module.css";

export const Feed = () => {
  return (
    <main className={styles.grid}>
      {posts.map((post) => (
        <CardPost id={post.slug} post={post} />
      ))}
    </main>
  );
};
