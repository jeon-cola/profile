import logo from '../components/logo.png'
import NavBar from './NavBar'

const Home:React.FC = () => {
  return<div>

    {/*  로고 이미지 */}
    <div className='flex justify-center items-center'>
      <img src={logo} alt="logo" className='mt-12 mb-7 w-[250px] h-[170px]'/>
    </div>

    {/* 소개 문구 */}
    <div>
      <p className='font-bold text-4xl'>안녕하세요</p>
      <p className='font-bold text-4xl' >프론트엔드 개발자</p>
      <p className='font-bold text-4xl'><span className='text-[#51B7F2]'>전홍석</span>입니다</p>
    </div>

    {/*  목표 */}
    <div className='mt-14 text-left'>
      <p className='text-2xl text-[#D9D9D9]'>사용자 경험의 답을 찾는</p>
      <p className='text-2xl text-[#D9D9D9]'>프론트엔드 개발자가 되기 위해 노력하고 있습니다</p>
    </div>

    <NavBar />

  </div>
}

export default Home
