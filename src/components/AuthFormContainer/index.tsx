import type { ReactNode } from 'react'
import styles from './authformcontainer.module.css'

type AuthFormContainerProps = {
    children: ReactNode,
    bannerSrc: string
}

export const AuthFormContainer = ({ children, bannerSrc }: AuthFormContainerProps) => {

    return (
        <div className={styles.container}>
            <figure>
                <img src={bannerSrc} alt="" />
            </figure>
            <div className={styles['form-wrapper']}>
                {children}
            </div>
        </div>
    )
}