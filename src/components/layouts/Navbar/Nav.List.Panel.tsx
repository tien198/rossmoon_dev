import { useEffect, useState } from "react";
import type { MenuItem } from "../../types/menuItem";
import Item from "./Nav.List.Item";

import styles from './nav.module.scss'
import BackButton from "./Nav.List.BackButton";

type Props = {
    // isRoot indicate that this is root of Navbar
    isRoot?: boolean
    item: MenuItem
    layoutActive: boolean
    isActive?: boolean
    handleActivate?: () => void
}

export default function Panel({ isRoot = false, item, layoutActive = false, isActive = false, handleActivate }: Props) {

    const [laytAct, setLaytAct] = useState(false)
    useEffect(() => {
        if (!layoutActive)
            setLaytAct(false)
        else if (isActive)
            setLaytAct(true)

    }, [layoutActive, isActive])

    const [actIdx, setActIdx] = useState<number | null>(null)

    const activeCls = isActive && layoutActive ? styles['active'] : ''

    return (
        <div
            className={isRoot ? '' : styles['nav__list__panel'] + ' ' + activeCls}
        >
            <div className={`${styles['wrapper']} ${activeCls}`}>
                <ul className={`${styles['nav__list']} ${activeCls}`}>
                    {item.nameDisplay
                        &&
                        <BackButton
                            onClick={handleActivate!}
                        >
                            {item.nameDisplay}
                        </BackButton>}
                    {item.categoryItems?.map((i, idx) =>
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