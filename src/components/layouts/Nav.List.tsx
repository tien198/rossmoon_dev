import { IoIosArrowForward } from "react-icons/io";
import type { MenuItem } from "../types/menuItem";

import styles from './nav.module.scss'
import NavPanel from "./Nav.ListPanel";

type Props = {
    items: MenuItem[]
}

export default function NavList({ items }: Props) {
    return <ul className={styles['nav-list']}>
        {items.map((item, index) => (
            <li
                key={index}
            >
                <span>{item.nameDisplay}</span>
                <span><IoIosArrowForward color="#000" /></span>
                <NavPanel item={item}  />
            </li>
        ))}
    </ul>

}