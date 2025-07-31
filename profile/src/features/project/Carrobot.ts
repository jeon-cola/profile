import CarroBotImg from "../../components/projects/CarroBot.png"

const Carrobot = {
  title: "CarroBot",
  subTitle: "AI 개인 운반 로봇",
  img : CarroBotImg,
  link: "https://github.com/jeon-cola/CarroBot",
  skills: ["AndroidStudio", "JectpackCompose", "Retrofit", "SKTTMAP"] as const,
  description: {
    title: "AI 개인 운반 로봇",
    award : "SAMSUNG 청년 AI SW ACADEMY 우수상",
    participants:"6명(FrontEnd - 1, BackEnd - 1, Embedded - 4)",
    term : "2025.01.13~2025.02.21",
    function: {
        0: {
          title: "안드로이드 앱 UI/UX 설계 및 개발",
          description: [""]
        },
        1 : {
          title: "실시간 위치 기반 내비게이션 구현",
          description: ["skt tmap 기반 보행자 길 네비게이션", "로봇 위치 실시간 표시"]
        },
        2 : {
          title: "Socket 기반 실시간 카메라 스트리밍",
          description: ["socket 기반 jpg 데이터 수신", "연속된 jpg 데이터 mjpeg 방식으로 연속 재생"]
        }

    },
    trouble: {
      0 : {
        title : "라이브 카메라 불안정",
        situation : "실시간 로봇 카메라를 앱에 연동하는 과정에서 외부 네트워크 불안정으로 인해 소켓 연결이 자주 끊기는 문제가 발생했습니다",
        cause : ["소켓 서버와 클라이언트 간의 연결이 일정 시간 동안 유지되지 않으면 자동으로 타임아웃 및 연결 종료가 발생했습니다"],
        slove: ["소켓 통신에 타임아웃 기반 연결 상태 감지 로직을 추가하고, 연결이 끊길 경우 자동으로 재연결을 시도하는 매커니즘을 구현했습니다"],
        result: ["외부 네트워크가 일시적으로 불안정해도 연결이 자동으로 복구되어, 사용자 입장에서 보다 안정적인 라이브 스트리밍 환경을 제"]
      },
      1 : {
        title : "지도 뷰포트 최적화",
        situation : "경로를 검색하면 경로 크기에 맞지 않게 지도가 보여 사용자 경험이 저하되었습니다.",
        cause : ["지도 중심 및 줌 레벨을 거리 기반으로 조절하는 로직이 없었던 것이 문제였습니다"],
        slove: ["두 지점 사이의 거리를 Haversine 공식을 활용해 (m단위) 를 계산", "거리 범위에 따라 적절한 줌 레벨을 자동으로 지정", "출발지와 도착지의 중간 좌표를 계산하여 지도 중심 위치로 설정"],
        result: ["가까운 거리는 상세히, 먼 거리는 전체 경로가 한 눈에 보이도록 자동 조절되어 사용자가 직관적으로 경로를 확인할 수 있는 지도 환경 구현"]
      }
    },
    improvement: ["직관적인 로봇 조종 인터페이스 설계", "실시간 카메라 화면과 컨트롤의 효율적 레이아웃"]
  }
} 
export default Carrobot