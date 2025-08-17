import JS from '../../components/skills/JS.png'
import TS from '../../components/skills/TS.png'
import ReactImg from "../../components/skills/React.png"
import Vue from "../../components/skills/Vue.png"
import Html from "../../components/skills/Html.png"
import Css from "../../components/skills/Css.png"
import Python from "../../components/skills/Python.png"
import Django from "../../components/skills/Django.png"
import Jenkins from "../../components/skills/Jenkins.png"
import Git from "../../components/skills/Git.png"
import Jira from "../../components/skills/Jira.png"
import Redux from "../../components/skills/Redux.png"
import Figma from "../../components/skills/Figma.png"
import Tailwind from "../../components/skills/Tailwind.png"
import AndroidStudio from "../../components/skills/Androidstudio.png"
import JectpackCompose from "../../components/skills/JectpackCompose.png"
import Retrofit from "../../components/skills/Retrofit.png"
import MPAndroidChart from "../../components/skills/MPAndroidChart.png"
import PWA from "../../components/skills/PWA.png"
import SKTTMAP from "../../components/skills/SKTTMAP.png"
 

export interface Skill {
  name: "JS" | "TS" | "React" | "Vue" | "Html" | "Css" | "Python" | "Django" | "Jenkins" | "Git" | "Jira" | "Redux" | "Figma" | "Tailwind" | "AndroidStudio" | "JectpackCompose" | "Retrofit" | "MPAndroidChart" | "PWA" | "SKTTMAP"  
}

const imageMap: Record<Skill["name"], string> = {
  JS,
  TS,
  React: ReactImg,
  Vue,
  Html,
  Css,
  Python,
  Django,
  Jenkins,
  Git,
  Jira,
  Redux,
  Figma,
  Tailwind,
  AndroidStudio,
  JectpackCompose,  
  Retrofit,
  MPAndroidChart, 
  PWA,
  SKTTMAP
}


const SkillsBox: React.FC<Skill> = ({name}) => {
  return (
    <div 
      className='relative flex justify-center items-center group'
    >
      <div className='absolute bottom-full mb-1 px-2 py-1 bg-[#EAEAEA] bg-opacity-70 rounded text-[#A19F9F] text-md opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
        {name}
      </div>

      <img 
        src={imageMap[name]} alt={name} 
        className='object-contain'       
      />


    </div>
  )
}

export default SkillsBox