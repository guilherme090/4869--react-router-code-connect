import { Comment } from "../Comment/index.tsx"
import styles from './commentlist.module.css'

import type { CommentType } from "../../pages/Feed/data.ts"

export const CommentList = ({ comments }: { comments: CommentType[] }) => {
    return (
        <section className={styles.comments}>
            <h2>
                Comentários
            </h2>
            <ul>
                {comments.map( comment => <li key={comment.id}>
                    <Comment comment={comment} key={comment.id}/>
                </li> )}
            </ul>
        </section>
    )
}