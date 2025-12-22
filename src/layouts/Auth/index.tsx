import styles from './auth.module.css'
import { Outlet } from 'react-router'

type AuthLayoutProps = {
  children?: React.ReactNode;
};

export const AuthLayout = ( { children} : AuthLayoutProps ) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Outlet />
            </div>
        </div>
    )
}