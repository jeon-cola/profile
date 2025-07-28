import CompetenceBox from "./CompetenceBox"

const Competence: React.FC = () => {
  return <div>

    <h1 className="font-bold text-4xl">
      <p className="text-[#51B7F2]">핵심 역량</p>
      <p>끊임없이 배우고, 함께 성장하는 것을 즐깁니다</p>
    </h1>

    <div className="flex gap-10 mt-7 items-stretch">
      <CompetenceBox img="competenceJS" title="프론트엔드 개발" description="React.js , Vue 를 활용한 프론트엔드 개발 경험 및 JavaScript(Es6+) 에  능숙합니다."/>
      <CompetenceBox img="competenceAndroid" title="Android, Wear OS 개발" description="Kotlin, JetpackCompose 를 활용한 어플리케이션 및 wear os 개발 경험했습니다"/>
      <CompetenceBox img="competenceTool" title="커뮤니케이션 및 협업" description="GitLab, Jira, Notion, Figma 등 협업 도구 사용 경헙이 있습니다. 기획, 디지인, 백엔드 다양한 경험을 통해 원활한 커뮤니케이션이 가능합니다"/>
    </div>
  </div>
}

export default Competence