import TikkeulnyangImg from "../../components/projects/Tikkeulnyang.png"

const Tikkeulnyang = {
  title: "Tikkeulnyang",
  subTitle: "소비내역 기반 챌린지 생성을 통한 소비 습관 개선 웹 사이트",
  img : TikkeulnyangImg,
  link: "https://github.com/jeon-cola/tikkeulnyang",
  skills: ["React", "Tailwind", "Redux", "PWA"] as const,
  description: {
    title: "소비내역 기반 챌린지 생성을 통한 소비 습관 개선 웹 사이트",
    award : "",
    participants: "6명(FrontEnd - 3, BackEnd - 3)",
    term : "2025.02.24~2025.04.11",
    function: {
      0: {
        title: "버킷리스트 생성 및 저축",
        description: ["목표 달성을 위한 버킷리스트 생성", "연결된 계좌를 통해 간편 저축"]
      },
      1 : {
        title: "비밀번호 인증 시스템",
        description: ["사용자 설정 비밀번호를 통한 보안 검증", "Fisher-Yates 알고리즘 기반 숫자패드 랜덤 배치"]
      },
      2 : {
        title: "공유 가계부",
        description: ["React calendar 활용", "달력에 표시된 아이콘을 친구와 공유"]
      }, 
      3 : {
        title: "소비내역 기반 카드 추천",
        description: ["소비 내역 카테고리 기반 혜택이 많은 순으로 추천"]
      }
    },
    trouble: {
      0 : {
        title : "업무 재분배",
        situation : "프로젝트 후반, 일정에 비해 남은 작업량이 많아 프로젝트를 제시간에 완성하기 어려운 상황에 직면했습니다",
        cause : ["팀원이 담당한 React Calendar Custom에 예상보다 많은 시간이 소요"],
        slove: ["팀 내 업무 분담을 재조정하여, 제가 해당 기능 구현을 맡기로 결정 => 기존 담당자와 미완성 코드에 대한 리뷰를 통해 로직과 설계 패턴 파악"],
        result: ["코드 의도 분석 및 설계 패턴 이해를 바탕으로 남은 기능 구현 완료", "프로젝트 마감 기한을 준수"]
      }
    },
    improvement: ["복잡한 카드 정보를 한눈에 비교할 수 있는 랭킹 기반 UI 설계", "1위 카드 시각적 구분을 위한 컬러 코딩 및 뱃지 시스템", "복잡한 카드 혜택 조건을 직관적 아이콘으로 추상화"]
  }
}

export default Tikkeulnyang