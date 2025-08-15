// import './hover.css'

import { useState } from "react";
import Navbar from "./components/layouts/Nav";


export default function App() {
  const [visible, setVisible] = useState(false)
  return <>
    <Navbar />
    <div className="text-right">
      <button onClick={() => setVisible(prev => !prev)}>click me</button>
      <div className={`bg-amber-700 p-5 transition-opacity ${visible ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>
    </div>

  </>
}

















// export default function App() {
//   return (
//     <nav className="navbar">
//       <ul className="menu">
//         <li><a href="#">Trang chủ</a></li>
//         <li>
//           <a>Sản phẩm ▾</a>
//           <ul className="submenu">
//             <li><a href="#">Điện thoại</a></li>
//             <li>
//               <a href="#">Laptop ▸</a>
//               <ul className="submenu">
//                 <li><a href="#">Macbook</a></li>
//                 <li><a href="#">Windows</a></li>
//               </ul>
//             </li>
//             <li><a href="#">Phụ kiện</a></li>
//           </ul>
//         </li>
//         <li><a href="#">Liên hệ</a></li>
//       </ul>
//     </nav>

//   )
// }


