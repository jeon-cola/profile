import SkillsBox, { Skill } from "../skill/SkillsBox"

interface ProjectBoxDescriptionProps {
    title: string
    award : string
    participants: string
    term : string
    function: {
      [key: number] : {
        title: string
        description: string[]
      }
    }
    trouble: {
      [key: number]: {
        title: string
        situation: string
        cause: string[]
        slove: string[]
        result: string[]
      }
    }
    improvement: string[]
  }

interface ProjectBoxProps {
  title: string
  subTitle: string
  img : string
  link: string
  skills: readonly Skill['name'][],
  description: ProjectBoxDescriptionProps
}

interface ProjectWrapperProps {
  project: ProjectBoxProps
}

const ProjectBox: React.FC<ProjectWrapperProps> = ({project}) => {
  return (
    <div className="flex flex-col gap-2 p-3 w-[400px] mt-10 rounded-[20px] border-2 shadow-[0_4px_24px_0_rgba(0,0,0,0.35)] relative">
        <img src={project.img} alt="project img" className="overflow-hidden rounded-[20px]" />


      <p className="text-3xl font-bold text-left">{project.title}</p>

      <div className="grid grid-cols-4 gap-3 scale-75 origin-left">
        {project.skills.map((skill) => (
          <SkillsBox name={skill} />
        ))}
      </div>

      <p className="absolute bottom-2 right-2 text-sm text-[#A19F9F]">자세히 보기</p>
    </div>
  )

}

export default ProjectBox