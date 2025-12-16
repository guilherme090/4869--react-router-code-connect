import { Avatar } from "../Avatar/index.tsx"
import styles from './author.module.css'

import type { UserType } from "../../pages/Feed/data.ts"

export const Author = ({ author }: { author: UserType }) => {
    return (<ul className={styles.author}>
        <li>
            <Avatar author={author} />
        </li>
        <li>
            @{author.name}
        </li>
    </ul>)
}