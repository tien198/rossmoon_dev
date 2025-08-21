'use client'

import { IoIosArrowForward } from "react-icons/io"
import type { MenuItem } from "../../types/menuItem"

import styles from './nav.module.scss'
import Panel from "./Nav.List.Panel"
import { useContext } from "react"
import { ListPanelContext } from "./store/navBarContext"

type Props = {
    item: MenuItem
    idx: number
    layoutActive: boolean
    // isActive: boolean
    // active: () => void
}

// Recursion
export default function Item({ item, idx, layoutActive }: Props) {
    const { actIdx, setActIdx } = useContext(ListPanelContext)

    const isActive = actIdx === idx
    const handleActive = () => setActIdx(prev =>
        (prev === idx) ? null : idx
    )


    // base case
    if (item.display == 'link')
        return (
            <li>
                <a
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
        <li className={styles['nav__list__item']}>
            <button
                className={`${styles['item']} ${isActive ? 'border-b border-gray-700' : ''}`}
                onClick={() => {
                    handleActive()
                }}
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
                handleActivate={handleActive}
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