import styles from './avatar.module.css'

import type { UserType } from "../../pages/Feed/data.ts"

export const Avatar = ({ author }: { author: UserType }) => {
    const imgSrc = author.avatar

    return (
        <div className={styles.container}>
            {imgSrc && <img
                src={imgSrc}
                width={32}
                height={32}
                alt={`Avatar do(a) ${author.name}`}
            />}
        </div>
    )
}