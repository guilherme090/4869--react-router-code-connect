import styles from './comment.module.css'
import { Avatar } from "../Avatar/index.tsx"

import type { CommentType } from '../../pages/Feed/data.ts'

export const Comment = ({ comment }: { comment: CommentType }) => {


    return (<div className={styles.comment}>
        <Avatar author={comment.author} />
        <strong>@{comment.author.name}</strong>
        <p>{comment.text}</p>
    </div>)
}