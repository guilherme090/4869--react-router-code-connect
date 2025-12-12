import type { ReactNode } from 'react'
import styles from './fieldset.module.css'

type FieldsetProps = {
    children: ReactNode
}

export const Fieldset = ({ children, ...props }: FieldsetProps) => {
    return (
        <fieldset className={styles.fieldset} {...props}>
            {children}
        </fieldset>
    )
}