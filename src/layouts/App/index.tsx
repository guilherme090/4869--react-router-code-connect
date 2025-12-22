import { Aside } from "../../components/Aside/index.tsx"
import styles from './app.module.css'
import { Outlet } from "react-router"

export const AppLayout = () => {
    return (
        <div className={styles.app}>
            <Aside />
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    )
}