import type { ReactNode } from 'react'
import styles from './asidelink.module.css'

type AsideLinkType = {
    href: string,
    children: ReactNode
}

const AsideLink = ({ href, children }: AsideLinkType) => {
    return (<a href={href} className={styles.asidelink}>
        {children}
    </a>)
}

export default AsideLink