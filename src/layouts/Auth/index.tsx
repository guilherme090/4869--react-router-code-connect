import type { ReactNode } from 'react'
import styles from './auth.module.css'

type AuthLayoutProps = {
    children: ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {children}
            </div>
        </div>
    )
}