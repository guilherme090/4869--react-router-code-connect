import type { ReactNode } from "react"
import { Aside } from "../../components/Aside/index.tsx"
import styles from './app.module.css'

export const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.app}>
            <Aside />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}