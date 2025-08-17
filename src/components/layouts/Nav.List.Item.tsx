'use client'

import { IoIosArrowForward } from "react-icons/io"
import type { MenuItem } from "../types/menuItem"

import styles from './nav.module.scss'
import Panel from "./Nav.List.Panel"
import { useState } from "react"

type Props = {
    item: MenuItem
}

// Recursion
export default function Item({ item }: Props) {
    const [active, setActive] = useState(false)

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
            <div
                className={styles['item']}
                onClick={() => setActive(prev => !prev)}
            >
                <span>{item.nameDisplay}</span>
                <span><IoIosArrowForward color="#000" /></span>
            </div>
            {/*
                Loop for categories item and 
                call Item (recursion) in every item
            */}
            {active &&
                <Panel categories={item.categoryItems!} active={active} />
            }
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