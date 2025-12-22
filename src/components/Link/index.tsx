import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './link.module.css'
import { Link as RouterLink } from 'react-router'

type RouterLinkProps = {
    href: string
    children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = ({ children, href, ...props }: RouterLinkProps) => {
    const className = props.className || ''
    return (
        <RouterLink to={href} {...props} className={`${styles.link} ${className}`}>
            {children}
        </RouterLink>
    )
}