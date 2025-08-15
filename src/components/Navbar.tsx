import { IoIosArrowForward } from "react-icons/io";
import type { MenuItem } from "./types/menuItem";


export default function Navbar() {
    const menuItems = useGetMenuItems()
    return (
        <div className="w-full text-gray-800 text-2xl">
            {/* Menu items */}
            <ul className="flex flex-col gap-4 my-4">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center px-4 py-3 cursor-pointer"
                    >
                        <span>{item.nameDisplay}</span>
                        <span><IoIosArrowForward color="000" /></span>
                    </li>
                ))}
            </ul>

            {/* Footer */}
            <div className="px-4 py-12 border-t">
                <p>Chúng tôi có thể giúp gì cho bạn?</p>
                <p className="font-medium">+84 2838614107</p>
            </div>
        </div>
    );
}











function useGetMenuItems(): MenuItem[] {
    return [
        {
            display: 'cate',
            nameDisplay: "Quà tặng và dịch vụ cá nhân hóa",
            categories: [
                {
                    display: 'a',
                    nameDisplay: "Tất cả quà tặng",
                    url: 'none'
                },
                {
                    display: 'cate',
                    nameDisplay: "Quà tặng cho nữ",
                    categories: [

                    ]
                },
            ]
        },
        {
            display: 'a',
            nameDisplay: "Sản phẩm mới",
            url: 'none',
        },
        {
            display: 'a',
            nameDisplay: "Túi xách và ví",
            url: 'none',
        },
        {
            display: 'a',
            nameDisplay: "Đồ Nữ",
            url: 'none',
        },
        {
            display: 'a',
            nameDisplay: "Đồ Nam",
            url: 'none',
        },
        {
            display: 'a',
            nameDisplay: "Trang sức",
            url: 'none',
        },
        {
            display: 'a',
            nameDisplay: "Đồng hồ",
            url: 'none',
        },
        {
            display: 'a',
            nameDisplay: "Nước hoa",
            url: 'none',
        },
        {
            display: 'a',
            nameDisplay: "Rương, Phụ kiện du lịch và Trang trí nội thất",
            url: 'none',
        },
        {
            display: 'a',
            nameDisplay: "Dịch vụ",
            url: 'none',
        },
        {
            display: 'a',
            nameDisplay: "Maison Louis Vuitton",
            url: 'none',
        },
    ];
}

