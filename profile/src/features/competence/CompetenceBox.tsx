import React, { useRef, useState } from "react"
import competenceJS from '../../components/competence/competenceJS.png'
import competenceAndroid from '../../components/competence/competenceAndroid.png'
import competenceTool from '../../components/competence/competenceTool.png'
import { transform } from "typescript";

interface CompetenceBoxProps {
  img: "competenceJS" | "competenceAndroid" | "competenceTool";
  title: string;
  description: string;
}

const CompetenceBox: React.FC<CompetenceBoxProps>  = ({img, title, description})=> {
  const imageMap = { competenceJS, competenceAndroid, competenceTool }
  const imageSrc = imageMap[img]

  const [style, setStyle] = useState<React.CSSProperties>({})
  const [shineStyle, setShineStyle] = useState<React.CSSProperties>({})
  const cardRef = useRef<HTMLDivElement>(null)

  const handlerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width /2
    const centerY = rect.height /2

    const rotateX = ((y - centerY) / centerY) * 10
    const rotateY = ((x - centerX) / centerX) * -10

    setStyle({
      transform : `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition : "transform 0.1s"
    })

    setShineStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.4), transparent 80%)`,
      mixBlendMode: "overlay"
    })
  }

  const handlerMouseLeave = () => {
    setStyle({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg)",
      transition : "transform 0.5s ease"
    })

    setShineStyle({})
  }

  return (
    <div className="flex flex-col items-center w-[270px] gap-1 p-3">

      <div 
        className="bg-[#EAEAEA] overflow-hidden w-full rounded-[20px] shadow-[0_4px_24px_0_rgba(0,0,0,0.3)] cursor-pointer"
        onMouseMove={handlerMouseMove}
        onMouseLeave={handlerMouseLeave}
        style={style}
        ref = {cardRef}
      >
      <img src={imageSrc} alt="이미지" className="w-full h-full object-cover"/>

      <div 
        className="absolute inset-0 pointer-event-none rounded-[20px]"
        style={shineStyle}
      ></div>
      </div>

      <h1 className="font-bold text-xl text-left w-full">{title}</h1>


      <div className="w-full text-left text-md text-[#A19F9F]">
        <p>{description}</p>
      </div>

    </div>
  )
}

export default CompetenceBox