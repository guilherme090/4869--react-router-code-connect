import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.css';

type ButtonProps = {
    children: ReactNode,
    outline?: boolean,
    href?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, outline, href, ...rest }: ButtonProps) => {
    if (href) {
        return (
            <a href={href} className={outline ? styles.outline : styles.btn}>
                {children}
            </a>
        );
    }

    return (
        <button className={outline ? styles.outline : styles.btn} {...rest}>
            {children}
        </button>
    );
}