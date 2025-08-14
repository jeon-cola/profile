import ProjectBox from "./ProjectBox"

import Carrobot from "./Carrobot"
import Sleephony from "./Sleephony"
import Tikkeulnyang from "./Tikkeulnyang"

const Project : React.FC = () => {
  return (
    <div className="mt-32 ">

      <h1 className="font-bold text-3xl lg:text-4xl flex flex-col gap-2">
        <p className="text-[#51B7F2]">프로젝트</p>
        <p>프로젝트 세부 사항을 확인해보세요</p>
      </h1>

      <div className="flex flex-col lg:flex-row lg:gap-7">
        <ProjectBox project={Sleephony}/>
        <ProjectBox project={Tikkeulnyang}/>
        <ProjectBox project={Carrobot}/>
      </div>

    </div>
  )
}

export default Project