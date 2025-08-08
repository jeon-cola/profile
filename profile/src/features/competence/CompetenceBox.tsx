import React from "react"
import competenceJS from '../../components/competence/competenceJS.png'
import competenceAndroid from '../../components/competence/competenceAndroid.png'
import competenceTool from '../../components/competence/competenceTool.png'

interface CompetenceBoxProps {
  img: "competenceJS" | "competenceAndroid" | "competenceTool";
  title: string;
  description: string;
}

const CompetenceBox: React.FC<CompetenceBoxProps>  = ({img, title, description})=> {
  const imageMap = {
    competenceJS,
    competenceAndroid,
    competenceTool
  }

  const imageSrc = imageMap[img]
  return (
    <div className="flex flex-col items-center w-[270px] gap-1 p-3">

      <div className="bg-[#EAEAEA] overflow-hidden w-full rounded-[20px] shadow-[0_4px_24px_0_rgba(0,0,0,0.35)]">
      <img src={imageSrc} alt="이미지" className="w-full h-full object-cover"/>
      </div>

      <h1 className="font-bold text-xl text-left w-full">{title}</h1>


      <div className="w-full text-left text-md text-[#A19F9F]">
        <p>{description}</p>
      </div>

    </div>
  )
}

export default CompetenceBox