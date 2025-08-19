import { useState } from "react";
import type { MenuItem } from "../../types/menuItem";
import NavList from "./Nav.List";

import styles from './nav.module.scss'
import { CiMenuBurger } from "react-icons/ci";
// import NavProvider from "./store/navBarContext";


export default function Nav() {
    const menuItems = useGetMenuItems()
    const [isActive, setActive] = useState(false)

    const handleActive = () => setActive(prev => !prev)
    return (
        // <NavProvider>
        <>
            <button
                className="z-50 text-center absolute top-4 left-8  p-2 bg-white"
                onClick={handleActive}>
                <CiMenuBurger /> <span className="hidden">Menu</span>
            </button>
            <nav
                className={styles['nav'] + ' ' + (isActive ? styles['active'] : '')}
            >
                <NavList
                    items={menuItems}
                    isActive={isActive}
                />

                {/* Footer */}
                <div
                    className={
                        styles['nav__list--services']
                        + ' ' + (isActive ? styles['active'] : '')
                    }
                >
                    <p>Chúng tôi có thể giúp gì cho bạn?</p>
                    <p className="font-medium">+84 2838614107</p>
                </div>
            </nav>
        </>
        // </NavProvider>
    );
}








// hierachical struture with
//  3 level
function useGetMenuItems(): MenuItem[] {
    return [
        {
            display: 'cate',
            nameDisplay: "Quà tặng và dịch vụ cá nhân hóa",
            // 2
            categoryItems: [
                {
                    display: 'link',
                    nameDisplay: "Tất cả quà tặng",
                    url: 'none'
                },
                {
                    display: 'cate',
                    nameDisplay: "Quà tặng cho nữ",
                    // 3
                    categoryItems: [
                        {
                            display: 'link',
                            nameDisplay: "Sản phẩm mới",
                            url: 'none',
                        },
                    ]
                },
                {
                    display: 'cate',
                    nameDisplay: "Quà tặng cho nữ",
                    // 3
                    categoryItems: [
                        {
                            display: 'link',
                            nameDisplay: "Túi xách và ví",
                            url: 'none',
                        },
                        {
                            display: 'link',
                            nameDisplay: "Đồ Nữ",
                            url: 'none',
                        },
                    ]
                },
            ]
        },
        {
            display: 'cate',
            nameDisplay: "Sản phẩm mới",
            // 3
            categoryItems: [
                {
                    display: 'link',
                    nameDisplay: "Đồ Nữ",
                    url: 'none',
                },
                {
                    display: 'link',
                    nameDisplay: "Đồ Nam",
                    url: 'none',
                },
            ]
        },

        {
            display: 'link',
            nameDisplay: "Túi xách và ví",
            url: 'none',
        },
        {
            display: 'link',
            nameDisplay: "Đồ Nữ",
            url: 'none',
        },
        {
            display: 'link',
            nameDisplay: "Đồ Nam",
            url: 'none',
        },
        /*
    {
        display: 'link',
        nameDisplay: "Trang sức",
        url: 'none',
    },
    {
        display: 'link',
        nameDisplay: "Đồng hồ",
        url: 'none',
    },
    {
        display: 'link',
        nameDisplay: "Nước hoa",
        url: 'none',
    },
    {
        display: 'link',
        nameDisplay: "Rương, Phụ kiện du lịch và Trang trí nội thất",
        url: 'none',
    },
    {
        display: 'link',
        nameDisplay: "Dịch vụ",
        url: 'none',
    },
    {
        display: 'link',
        nameDisplay: "Maison Louis Vuitton",
        url: 'none',
    },
    */
    ];
}

