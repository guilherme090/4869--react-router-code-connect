import type { FormHTMLAttributes, ReactNode } from 'react'
import styles from './form.module.css'

type FormProps = {
  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ children, ...props }: FormProps) => {
    return (
        <form className={styles.form} {...props}>
            {children}
        </form>
    )
}