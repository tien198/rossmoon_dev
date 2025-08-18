import type { MenuItem } from "../../types/menuItem";
import NavList from "./Nav.List";

import styles from './nav.module.scss'
// import NavProvider from "./store/navBarContext";


export default function Nav() {
    const menuItems = useGetMenuItems()
    return (
        // <NavProvider>
        <nav className={styles['nav']}>
            <div className={styles['wrapper']}>
                <NavList items={menuItems} />

                {/* <NavPanel item={menuItems[0]} /> */}
                {/* Footer */}
                <div className=" py-12 border-t border-t-gray-300">
                    <p>Chúng tôi có thể giúp gì cho bạn?</p>
                    <p className="font-medium">+84 2838614107</p>
                </div>
            </div>
        </nav>
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
            ]
        },
        {
            display: 'link',
            nameDisplay: "Sản phẩm mới",
            url: 'none',
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
    ];
}

