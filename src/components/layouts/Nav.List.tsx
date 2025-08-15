import { IoIosArrowForward } from "react-icons/io";
import type { MenuItem } from "../types/menuItem";

type Props = {
    items: MenuItem[]
}

export default function NavList({ items }: Props) {
    return <ul className="flex flex-col gap-3 py-4 ">
        {items.map((item, index) => (
            <li
                key={index}
                className="flex justify-between items-center px-4 py-3 cursor-pointer"
            >
                <span>{item.nameDisplay}</span>
                <span><IoIosArrowForward color="#000" /></span>
            </li>
        ))}
        <ul className="visi"></ul>
    </ul>

}