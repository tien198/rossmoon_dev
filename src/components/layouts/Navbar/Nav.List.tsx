import type { MenuItem } from "../../types/menuItem";

import Panel from "./Nav.List.Panel";

type Props = {
    item: MenuItem
    isActive: boolean
}

export default function NavList({ item, isActive }: Props) {
    return <Panel item={item} layoutActive isActive={isActive} isRoot />
}