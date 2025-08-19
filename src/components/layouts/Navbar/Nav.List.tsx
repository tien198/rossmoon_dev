import type { MenuItem } from "../../types/menuItem";

import styles from './nav.module.scss'
import Item from "./Nav.List.Item";
import { useState } from "react";

type Props = {
    items: MenuItem[]
}

export default function NavList({ items }: Props) {

    const [actIdx, setActIdx] = useState<number | null>(null)

    return <>
        <ul className={styles['nav__list']}>
            {items.map((item, idx) => (
                <Item item={item} key={idx}
                    layoutActive
                    isActive={actIdx === idx} active={() => setActIdx(prev => (prev === idx) ? null : idx)}
                />
            ))}
        </ul>
    </>

}