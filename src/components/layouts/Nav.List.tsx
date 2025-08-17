import type { MenuItem } from "../types/menuItem";

import styles from './nav.module.scss'
import Item from "./Nav.List.Item";

type Props = {
    items: MenuItem[]
}

export default function NavList({ items }: Props) {

    return <ul className={styles['nav__list']}>
        {items.map((item, idx) => (
            <Item item={item} key={idx} />
        ))}
    </ul>

}