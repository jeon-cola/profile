import { useState } from "react"
import logo from "../components/logo.png"
import logo2 from "../components/logo_2.png"

const NavBar:React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="sticky top-0 z-50">
      <div className="w-[600px] h-[65px] bg-[#EAEAEA] rounded-[50px] flex justify-center items-center shadow-[0_4px_24px_0_rgba(0,0,0,0.35)] my-5">
        <button className="w-20 h-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={isHovered ? logo :logo2} alt="logo" className="w-full h-full object-contain py-1 "/>
        </button>
        <button className={`text-[#A19F9F] text-3xl px-6 hover:text-[#51B7F2] transition-colors duration-300`}>기술</button>
        <button className={`text-[#A19F9F] text-3xl px-6 hover:text-[#51B7F2] transition-colors duration-300`}>프로젝트</button>
        <button className={`text-[#A19F9F] px-6 text-3xl hover:text-[#51B7F2] transition-colors duration-300`}>블로그</button>
      </div>
    </div>
  )
}
export default NavBar