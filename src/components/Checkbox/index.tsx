import styles from './checkbox.module.css'
import type { InputHTMLAttributes, ReactNode } from 'react'

type CheckboxType = {
    label: ReactNode
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ label, ...rest }: CheckboxType) => {
    return (
        <label className={styles.container}>
            <input type="checkbox" {...rest} className={styles.checkbox} />
            {label}
        </label>
    )
}