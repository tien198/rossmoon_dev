import { IoIosArrowForward } from "react-icons/io";



export default function App() {
  const menuItems = useGetMenuItems()
  return (
    <div className="w-full ">
      {/* Menu items */}
      <ul className="flex flex-col gap-4 my-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-4 py-3 cursor-pointer
              text-2xl"
          >
            <span className="text-gray-800">{item.display}</span>
            <span className="text-gray-400"><IoIosArrowForward color="000" /></span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="px-4 py-4 text-sm border-t">
        <p>Chúng tôi có thể giúp gì cho bạn?</p>
        <p className="font-medium">+84 2838614107</p>
      </div>
    </div>
  );
}

















function useGetMenuItems() {
  return [
    {
      display: "Quà tặng và dịch vụ cá nhân hóa",
      url: 'none',
    },
    {
      display: "Sản phẩm mới",
      url: 'none',
    },
    {
      display: "Túi xách và ví",
      url: 'none',
    },
    {
      display: "Đồ Nữ",
      url: 'none',
    },
    {
      display: "Đồ Nam",
      url: 'none',
    },
    {
      display: "Trang sức",
      url: 'none',
    },
    {
      display: "Đồng hồ",
      url: 'none',
    },
    {
      display: "Nước hoa",
      url: 'none',
    },
    {
      display: "Rương, Phụ kiện du lịch và Trang trí nội thất",
      url: 'none',
    },
    {
      display: "Dịch vụ",
      url: 'none',
    },
    {
      display: "Maison Louis Vuitton",
      url: 'none',
    },
  ];
}