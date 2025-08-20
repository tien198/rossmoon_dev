import type { PropsWithChildren } from 'react'
import styles from './nav.module.scss'
import { IoIosArrowBack } from 'react-icons/io'

type Props = {
    onClick: () => void
} & PropsWithChildren

export default function BackButton(props: Props) {
    return (
        <li>
            <button
                className={`${styles['item']} ${styles['back-button']}`}
                onClick={props.onClick}
            >
                <IoIosArrowBack/>
                {props.children}
            </button>
        </li>
    )
}