import type { ReactNode } from 'react'
import styles from './iconbutton.module.css'

type IconButtonProps = {
    disabled?: boolean
    children: ReactNode
}

export const IconButton = ({ children, ...rest }: IconButtonProps) => {
    return (<button {...rest} className={styles.btn}>
        {children}
    </button>)
}