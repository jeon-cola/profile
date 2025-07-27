import logo from "../components/logo.png"

const NavBar:React.FC = () => {
  return (
    <div className="w-[600px] h-[80px] bg-[#EAEAEA] rounded-[50px] flex justify-center items-center shadow-[0_4px_24px_0_rgba(0,0,0,0.35)]">
      <button className="w-20 h-14">
        <img src={logo} alt="logo" className="w-full h-full object-contain"/>
      </button>
      <button className="text-[#A19F9F] text-3xl px-6 hover:text-[#51B7F2] transition-colors duration-300">기술</button>
      <button className="text-[#A19F9F] text-3xl px-6 hover:text-[#51B7F2] transition-colors duration-300">프로젝트</button>
      <button className="text-[#A19F9F] px-6 text-3xl hover:text-[#51B7F2] transition-colors duration-300">블로그</button>
    </div>
  )
}
export default NavBar