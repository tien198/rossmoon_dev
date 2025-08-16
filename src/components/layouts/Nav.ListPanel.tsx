import type { MenuItem } from "../types/menuItem";

import styles from './nav.module.scss'

type Props = {
    item: MenuItem
    active?: boolean
}

export default function NavPanel({ item, active = false }: Props) {
    
    return (
        <div className={`${styles['wrapper']} ${styles['list-panel']} ${active && styles['active']}`}
        >
            <ul className={styles['nav-list']}>
                {item.categories?.map(i =>
                    <li><a href={i.url || ''}>{i.nameDisplay}</a> <span>also</span></li>
                )}
            </ul>
        </div>
    )
}