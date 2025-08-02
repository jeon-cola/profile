import {ProjectWrapperProps } from "./ProjectBox"
import SkillsBox from "../skill/SkillsBox"
import closeImg from "../../components/close.png"
import { useEffect, useState } from "react"
import GitHub from "../../components/skills/GitHub.png"
import axios from "axios"

interface ProjectDetailProps extends ProjectWrapperProps {
  isOpen: boolean
  onClose: () => void
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({project, isOpen, onClose}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      fetchGitHubData()
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto' 
    }
  },[isOpen])

  const [git, setGit] = useState("")
  async function fetchGitHubData()  {
    try {
      const response = await axios.get(`https://api.github.com/repos/jeon-cola/${project.title}`)
      const data = response.data.updated_at.split("T")[0]
      setGit(data || "No description available")
      console.log(data)
    } catch (error) {
      console.error("Error fetching GitHub data:", error)
      setGit("Error fetching data")
    }

  }
  
  if (!isOpen) return null

  return (
    <div className="fixed bg-[#D9D9D9] bg-opacity-50 z-50 inset-0 flex flex-col items-center justify-center">

      <div 
        className="bg-white p-6 rounded-[20px] shadow-md w-[800px] h-[650px] relative text-left flex flex-col gap-7 overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <img src={closeImg} alt="닫힘 버튼" onClick={onClose} className="w-[80px] absolute top-0 right-0 cursor-pointer"/>
        
        <h1 className="text-[#51B7F2] text-4xl font-bold mb-2">{project.title}</h1>

        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">🚀 프로젝트 소개</p>
          <p className="text-xl text-[#A19F9F] ">{project.subTitle}</p>
        </div>

        {(project.description.award.length > 1) &&
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">🏆 수상 내역</p>
            <p className="text-xl text-[#A19F9F] ">{project.description.award}</p>
          </div>
        }

        <div className="flex flex-between gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">📅  시기</p>
            <p className="text-xl text-[#A19F9F] ">{project.description.term}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">👨‍💻  참여인원</p>
            <p className="text-xl text-[#A19F9F] ">{project.description.participants}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-2xl font-bold">🛠️ 기술 스택</p>
          <div className="flex w-[400px] h-[90px] origin-left">
            {project.skills.map((skill) => (
              <SkillsBox 
                key={skill} 
                name={skill} 
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">⚡ 담당 기능</p>
          {Object.entries(project.description.function).map(([key, value]) => (
            <div className="text-xl text-[#A19F9F] ml-3">
              {value.title}
              {value.description.length > 1 && (
                value.description.map((text) => (
                  <p className="ml-6">{text}</p>
                ))
              )}
            </div>
          ))
          }
        </div>

        
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">🔧  문제 해결 경험</p>
          {Object.entries(project.description.trouble).map(([keyboard, value]) => (
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">{value.title}</p>

              <div className="ml-5 flex flex-col gap-2">
                
                <p className="text-xl font-bold">📍 문제 상황</p>
                <p className="text-xl text-[#A19F9F]">{value.situation}</p>

                <p className="text-xl font-bold">🔍 원인 분석</p>
                {value.cause.map((text) => (
                  <p className="text-xl text-[#A19F9F]">{text}</p>
                ))}

                <p className="text-xl font-bold">💡 해결 방안</p>
                {value.slove.map((text) => (
                  <p className="text-xl text-[#A19F9F]">{text}</p>
                ))}

                <p className="text-xl font-bold">✅ 결과</p>
                {value.result.map((text) => (
                  <p className="text-xl text-[#A19F9F]">{text}</p>
                ))}

              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">🎨  UX/UI 개선</p>
          {project.description.improvement.map((text) => (
            <p className="text-xl text-[#A19F9F] ml-3">{text}</p>
          ))}
        </div>

        <div className="flex flex-col gap-2">
            
          <div className="flex gap-2 items-center">
            <img src={GitHub} alt="githubimg" className="w-[50px] h-[50px]" />
            <p className="text-2xl font-bold">GitHub</p>
          </div>

          <div className="flex border-2 rounded-[20px] p-3 gap-4 cursor-pointer"
            onClick={ () => window.open(project.link, "_blank")}
          >
            <img src="https://github.com/jeon-cola.png" alt="github img" className="w-[50px] h-[50px] rounded-full"/>

            <div>
              <p className="text-lg font-bold">{project.title}</p>
              <div className="flex gap-2">
                <p className="text-[#A19F9F]">마지막 업데이트</p>
                <p className="text-[#A19F9F]">{git}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetail