import { Author } from "../Author/index.tsx"
import styles from './cardpost.module.css'

import { ThumbsUpButton } from "./ThumbsUpButton.tsx"
import { IconChat } from "../icons/IconChat.tsx"
import { IconButton } from "../IconButton/index.tsx"
import type { postType } from "../../pages/Feed/data.ts"

export type CardPostType = {
    key: string,
    post: postType
}

export const CardPost = ( { key, post }: CardPostType ) => {
    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <figure className={styles.figure}>
                    <img
                        src={post.cover}
                        alt={`Capa do post de titulo: ${post.title}`}
                    />
                </figure>
            </header>
            <section className={styles.body}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <a href="#">Ver detalhes</a>
            </section>
            <footer className={styles.footer}>
                <div className={styles.actions}>
                    <div className={styles.action}>
                        <ThumbsUpButton loading={false} />
                        <p>
                            {post.likes}
                        </p>
                    </div>
                    <div className={styles.action}>
                        <IconButton>
                            <IconChat />
                        </IconButton>
                        <p>
                            {post.comments.length}
                        </p>
                    </div>
                </div>
                <Author author={post.author} />
            </footer>
        </article>
    )
}