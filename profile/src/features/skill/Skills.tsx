import SkillsBox from "./SkillsBox"


const skillNames = [
    "JS" , "TS" , "React" , "Vue" , "Html" , "Css" , "Python" , "Django" , "Jenkins" , "Git" , "Jira" , "Figma" , "Redux" , "Tailwind"  
] as const
const Skills: React.FC = () => {
  return (
    <div className="mt-28">
      <h1 className="text-[#51B7F2] text-3xl lg:text-4xl font-bold">기술 스택</h1>

      <div className="grid grid-cols-4 gap-4 max-w-sm mt-10">
        {skillNames.map((name) => (
          <SkillsBox name={name} key={name}/>
        ))}
      </div>
      
    </div>
  )
}

export default Skills