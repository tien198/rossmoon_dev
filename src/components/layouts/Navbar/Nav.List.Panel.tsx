import type { MenuItem } from "../../types/menuItem";
import Item from "./Nav.List.Item";

import styles from './nav.module.scss'

type Props = {
    categories: MenuItem[]
    layoutActive: boolean
    active?: boolean
}

export default function Panel({ categories, layoutActive = false, active = false }: Props) {
    const activeCls = active ? styles['active'] : ''
    return (
        <div
            className={styles['nav__list__panel'] + ' ' + activeCls}
        >
            <div className={styles['wrapper']}>
                <ul className={styles['nav__list']}>
                    {categories?.map((i, idx) =>
                        <Item item={i} layoutActive={layoutActive} key={idx} />
                    )}
                </ul>
            </div>
        </div>
    )
}