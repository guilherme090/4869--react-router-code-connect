import type { ReactNode } from 'react'
import styles from './asidelink.module.css'
import { Link } from 'react-router'

type AsideLinkType = {
    href: string,
    children: ReactNode
}

const AsideLink = ({ href, children }: AsideLinkType) => {
    return (<Link to={href} className={styles.asidelink}>
        {children}
    </Link>)
}

export default AsideLink