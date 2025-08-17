import SkillsBox from "./SkillsBox"
import {motion} from "framer-motion"


const containerVariants = {
  hidden : {},
  visible : {
    transition: { staggerChildren: .2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y:0},
  visible: {opacity: 1, y:0}
}

const skillNames = [
    "JS" , "TS" , "React" , "Vue" , "Html" , "Css" , "Python" , "Django" , "Jenkins" , "Git" , "Jira" , "Figma" , "Redux" , "Tailwind"  
] as const

const Skills: React.FC = () => {
  return (
    <div className="mt-28">
      <h1 className="text-[#51B7F2] text-3xl lg:text-4xl font-bold">기술 스택</h1>

      <motion.div 
        className="grid grid-cols-4 gap-3 lg:gap-4 max-w-[300px] lg:max-w-sm mt-10 flex justify-center items-center"
        initial= "hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.4}}
        variants={containerVariants}
      >
        {skillNames.map((name) => (
          <motion.div
            key={name}
            variants={itemVariants}
          >
            <SkillsBox name={name}/>
          </motion.div>
        ))}
      </motion.div>
      
    </div>
  )
}

export default Skills