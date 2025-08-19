import { useEffect, useState } from "react";
import type { MenuItem } from "../../types/menuItem";
import Item from "./Nav.List.Item";

import styles from './nav.module.scss'

type Props = {
    // isRoot indicate that this is root of Navbar
    isRoot?: boolean
    categories: MenuItem[]
    layoutActive: boolean
    active?: boolean
}

export default function Panel({ isRoot = false, categories, layoutActive = false, active = false }: Props) {

    const [laytAct, setLaytAct] = useState(false)
    useEffect(() => {
        if (!layoutActive)
            setLaytAct(false)
        else if (active)
            setLaytAct(true)

    }, [layoutActive, active])

    const [actIdx, setActIdx] = useState<number | null>(null)

    const activeCls = active && layoutActive ? styles['active'] : ''
    return (
        <div
            className={isRoot ? '' : styles['nav__list__panel'] + ' ' + activeCls}
        >
            <div className={`${styles['wrapper']} ${activeCls}`}>
                <ul className={`${styles['nav__list']} ${activeCls}`}>
                    {categories?.map((i, idx) =>
                        <Item
                            item={i} key={idx}
                            layoutActive={laytAct}
                            isActive={actIdx === idx}
                            active={
                                () => setActIdx(prev =>
                                    (prev === idx) ? null : idx
                                )
                            }
                        />

                    )}
                </ul>
            </div>
        </div>
    )
}