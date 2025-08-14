import { useState } from "react"
import logo from "../components/logo.png"
import logo2 from "../components/logo_2.png"

interface NavBarProps {
  current: string,
  onScrollHome : () => void,
  onScrollSkill : () => void,
  onScrollProject : () => void,
  onScrollBlog : () => void,
}

const NavBar:React.FC <NavBarProps>= ({current, onScrollHome, onScrollSkill, onScrollProject, onScrollBlog}) => {
  const [isHovered, setIsHovered] = useState(false)

  const getButtonClass = (section: string) => `
  text-xl lg:text-3xl  px-3 lg:px-6 hover:text-[#51B7F2] transition-colors duration-300
   ${current === section ? "text-[#51B7F2]" : "text-[#A19F9F]"}
  `

  return (
    <div className="sticky top-0 z-50">
      <div className="w-[350px] h-[50px]  lg:w-[600px] lg:h-[65px] bg-[#EAEAEA] opacity-95 rounded-[50px] flex justify-center items-center shadow-[0_4px_24px_0_rgba(0,0,0,0.35)] my-5">
        <button className="w-15 h-10 lg:w-20 lg:h-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onScrollHome}
        >
          <img src={(isHovered || current === "home") ? logo :logo2} alt="logo" className="w-full h-full object-contain py-1 "/>
        </button>
        <button 
          className={getButtonClass("skill")}
          onClick={onScrollSkill}
          >기술</button>
        <button 
          className={getButtonClass("project")}
          onClick={onScrollProject}
          >프로젝트</button>
        <button 
          className={getButtonClass("blog")}
          onClick={onScrollBlog}
          >블로그</button>
      </div>
    </div>
  )
}
export default NavBar