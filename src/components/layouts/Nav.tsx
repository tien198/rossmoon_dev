import type { MenuItem } from "../types/menuItem";
import NavList from "./Nav.List";
import NavPanel from "./Nav.ListPanel";




export default function Navbar() {
    const menuItems = useGetMenuItems()
    return (
        <nav className="fixed overflow-auto text-gray-800 text-2xl border-r border-r-gray-400  z-0
            h-screen w-[33.3333vw] max-w-[441px]"
        >
            <NavList items={menuItems} />
            <NavPanel item={menuItems[0]} />
            {/* Footer */}
            <div className=" px-4 py-12 border-t border-t-gray-400">
                <p>Chúng tôi có thể giúp gì cho bạn?</p>
                <p className="font-medium">+84 2838614107</p>
            </div>
        </nav>
    );
}











function useGetMenuItems(): MenuItem[] {
    return [
        {
            display: 'cate',
            nameDisplay: "Quà tặng và dịch vụ cá nhân hóa",
            categories: [
                {
                    display: 'link',
                    nameDisplay: "Tất cả quà tặng",
                    url: 'none'
                },
                // {
                //     display: 'cate',
                //     nameDisplay: "Quà tặng cho nữ",
                //     categories: [

                //     ]
                // },
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

