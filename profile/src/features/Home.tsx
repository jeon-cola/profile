import logo from '../components/logo.png'
import {motion} from "framer-motion"

const Home:React.FC = () => {
  return<div>

    {/*  로고 이미지 */}
    <motion.div 
      className='flex justify-center items-center'
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity:1, scale:1}}
      transition={{duration: 1.2, ease: "easeOut"}}
    >
      <img src={logo} alt="logo" className='mt-[140px]  lg:mt-12 mb-5 lg:mb-5 w-[200px] lg:w-[250px] lg:h-[170px]'/>
    </motion.div>

    {/* 소개 문구 */}
    <motion.h1 
      className="font-bold text-3xl lg:text-4xl "
      initial="hidden"
      animate ="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.3}}
      }}
    >
      {["안녕하세요", "프론트엔드 개발자", "전홍석입니다"].map((text, idx) =>(
        <motion.p
          key={idx}
          initial={{ opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{ duration:0.8, ease:"easeOut"}}
        >
          {text.includes("전홍석") ? <><span className='text-[#51B7F2]'>전홍석</span>입니다</> : text}
        </motion.p>
      ))}
    </motion.h1>

    {/*  목표 */}
    <motion.div 
      className="mt-14 mb-10 text-left  text-lg lg:text-2xl text-[#D9D9D9]"
      initial={{opacity:0, y:30}}
      animate={{opacity:1, y:0}}
      transition={{ duration: 1, delay:.5, ease:"easeOut"}}
    >
      <p >사용자 경험의 답을 찾는</p>
      <p >프론트엔드 개발자가 되기 위해 노력중 입니다</p>
    </motion.div>

  </div>
}

export default Home