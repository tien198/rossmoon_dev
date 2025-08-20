import type { PropsWithChildren } from 'react'
import styles from './nav.module.scss'

type Props = {
    onClick: () => void
} & PropsWithChildren

export default function BackButton(props: Props) {
    return (
        <li className={styles['']}>
            <button onClick={props.onClick}>
                {props.children}
            </button>
        </li>
    )
}