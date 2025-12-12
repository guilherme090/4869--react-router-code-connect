import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './link.module.css'

type LinkProps = {
    children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = ({ children, ...props }: LinkProps) => {
    const className = props.className || ''
    return (
        <a {...props} className={`${styles.link} ${className}`}>
            {children}
        </a>
    )
}