import type { ReactNode } from 'react'
import styles from './label.module.css'

type LabelType = {
    children: ReactNode
}

export const Label = ({ children, ...rest }: LabelType) => {
    return <label {...rest} className={styles.label}>
        {children}
    </label>
}