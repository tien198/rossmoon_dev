'use client'

import { IoIosArrowForward } from "react-icons/io"
import type { MenuItem } from "../../types/menuItem"

import styles from './nav.module.scss'
import Panel from "./Nav.List.Panel"
import { useContext } from "react"
import { ListPanelContext } from "./store/panelContext"

type Props = {
    item: MenuItem
    idx: number
    layoutActive: boolean
}

// Recursion
export default function Item({ item, idx, layoutActive }: Props) {
    const { state, setActIndex, setSelectedIndex } = useContext(ListPanelContext)

    const isActive = state.actIdx === idx
    const isSelected = state.selectedIdx === idx


    const isSelectedCls = (isActive || isSelected)
        ? styles['is-selected']
        // only disable item when there is another item was active
        : (state.actIdx === null && state.selectedIdx === null)
            ? ''
            : styles['disabled']

    // base case
    if (item.display == 'link')
        return (
            <li>
                <a
                    className={`${styles['item']} ${isSelectedCls}`}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onMouseLeave={() => setSelectedIndex(idx)}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {item.nameDisplay}
                </a>
            </li>
        )



    // recursive case
    return (
        <li className={styles['nav__list__item']} >
            <button
                className={`${styles['item']} ${isSelectedCls}`}
                onClick={() => {
                    setActIndex(idx)
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
                onMouseLeave={() => setSelectedIndex(idx)}
            >
                <span>{item.nameDisplay}</span>
                <span><IoIosArrowForward color="#000" /></span>
            </button>
            {/*
                Loop for categories item and 
                call Item (recursion) in every item
            */}
            <Panel
                item={item}
                layoutActive={isActive}
                isActive={isActive && layoutActive}
                handleActivate={() => setActIndex(idx)}
            />
        </li>
    )
}


// Câu chuyện ĐỆ QUY:
/*
    STAR
    + Situation: Cần lặp qua dữ liệu để render các item trong Navbar, các item lại có cấu trúc phân cấp lồng nhau.
    + Task: phân tích xem nên gõ chay HTML hay dùng lập trình để 
    + Action: Sử dụng đệ quy, để duyệt qua các item có cấu trúc lồng nhau.
    + Result: Hoàn thiện
*/