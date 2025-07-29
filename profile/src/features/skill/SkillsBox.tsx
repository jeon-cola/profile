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

interface Skill {
  name: "JS" | "TS" | "React" | "Vue" | "Html" | "Css" | "Python" | "Django" | "Jenkins" | "Git" | "Jira" | "Redux" | "Figma" | "Tailwind";  
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
  Tailwind
}

const SkillsBox: React.FC<Skill> = ({name}) => {
  return (
    <div className='flex justify-center items-center'>
      <img src={imageMap[name]} alt={name} className='object-contain' />
    </div>
  )
}

export default SkillsBox