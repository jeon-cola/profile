import SleephonyImg from "../../components/projects/Sleephony.png";

const Sleephony = {
  title: "Sleephony",
  subTitle: "생체 데이터 기반  AI 수면 단계 분석 및 음향 제공 프로젝트",
  img : SleephonyImg,
  video : "/sleephony.mp4",
  link: "https://github.com/jeon-cola/Sleephony",
  skills: ["AndroidStudio", "JectpackCompose", "Retrofit", "MPAndroidChart"] as const,
  description: {
    title: "Wear os 를 통한 생체 데이터 기반 AI 수면 단계 분석 및 음향 제공 어플리케이션",
    award : "SAMSUNG 청년 AI SW ACADEMY 우수상",
    participants:"6명(FrontEnd - 2, BackEnd - 2, AI -1, Infra -1)",
    term : "2025.04.14~2025.05.23",
    function: {
        0: {
          title: "Wear OS 기기에서 실시간 생체 데이터 수집",
          description: [""]
        },
        1 : {
          title: "Wear os 기기 와 application 알람 연동",
          description: [""]
        },
        2 : {
          title: "사용자 수면 패턴 시각화 대시보드",
          description: [""]
        }

    },
    trouble: {
      0 : {
        title : "배터리 효율성 개선",
        situation : "Wear OS에서 수면 단계 측정을 위해 생체 데이터를 수집하던 중, 시간당 약 16%의 배터리 소모가 발생했습니다. 평균 수면 시간이 6시간이라는 점을 고려하면 전체 배터리의 96%를 소모하는 비효율적인 상태였습니다",
        cause : ["생체 데이터 (가속도계, 심박수, 체온) 를 1초 마다 Application에 SendMessage로 전송","SendMessage는 호출 횟수가 많을수록 시스템 자원을 소모하여 배터리 효율에 악영향"],
        slove: ["1초 단위로 수집한 생체 데이터를 임시로 Wear OS 메모리에 저장", "저장된 데이터를 2분 30초 단위로 압축 전송", "SendMessage 호출  횟수를 최소화하여 배터리 소모 절감"],
        result: ["배터리 소모율 :  시간당 16% ⇒ 시간당 5%로 개선"]
      }
    },
    improvement: ["수면 데이터 시각화: 수면 단계를 직관적인 컬러 차트로 표현", "개인화된 대시보드:  사용자별 수면 패턴 분석 결과를 한눈에 확인 가능"]
  }
}

export default Sleephony