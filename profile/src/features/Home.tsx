import logo from '../components/logo.png'

const Home:React.FC = () => {
  return<div>

    {/*  로고 이미지 */}
    <div className='flex justify-center items-center'>
      <img src={logo} alt="logo" className='mt-[140px]  lg:mt-12 mb-5 lg:mb-5 w-[200px] lg:w-[250px] lg:h-[170px]'/>
    </div>

    {/* 소개 문구 */}
    <h1 className="font-bold text-3xl lg:text-4xl ">
      <p>안녕하세요</p>
      <p >프론트엔드 개발자</p>
      <p ><span className="text-[#51B7F2]">전홍석</span>입니다</p>
    </h1>

    {/*  목표 */}
    <div className="mt-14 mb-10 text-left  text-lg lg:text-2xl text-[#D9D9D9]">
      <p >사용자 경험의 답을 찾는</p>
      <p >프론트엔드 개발자가 되기 위해 노력중 입니다</p>
    </div>

  </div>
}

export default Home