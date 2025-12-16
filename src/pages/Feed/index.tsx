import { AppLayout } from "../../layouts/App/index.tsx"
import { CardPost } from "../../components/CardPost/index.tsx"
import { posts } from "./data.ts"
import styles from './feed.module.css'

export const Feed = () => {
    return (
        <AppLayout>
            <main className={styles.grid}>
                {posts.map(post => <CardPost key={post.slug} post={post} />)}
            </main>
        </AppLayout>
    )
}