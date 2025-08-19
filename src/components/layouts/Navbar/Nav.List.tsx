import type { MenuItem } from "../../types/menuItem";

import styles from './nav.module.scss'
import Item from "./Nav.List.Item";
import { useState } from "react";
import Panel from "./Nav.List.Panel";

type Props = {
    items: MenuItem[]
    isActive: boolean
}

export default function NavList({ items, isActive }: Props) {

    const [actIdx, setActIdx] = useState<number | null>(null)


    return <Panel categories={items} layoutActive active={isActive} isRoot />


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