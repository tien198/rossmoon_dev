import type { MenuItem } from "../types/menuItem";

type Props = {
    item: MenuItem
}

export default function NavPanel({ item }: Props) {
    return (
        <ul className="absolute top-0 left-full
            h-screen w-[33.3333vw] max-w-[441px]"
        >
            {item.categories?.map(i =>
                <li><a href={i.url||''}>{i.nameDisplay}</a></li>
            )}
        </ul>
    )
}