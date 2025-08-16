import downloadIcon from "../components/download.png"

const DownLoad : React.FC = () => {
  const handleDownLoad = () => {
    const link = document.createElement('a')
    link.href = "/jeonhongsoek_portfolio.pdf"
    link.download = "/jeonhongsoek_portfolio.pdf"
    link.click()
  }

  return (
    <div className="flex flex-col justify-cetner items-center mb-20">

        <h1 className="text-3xl lg:text-4xl font-bold flex flex-col gap-2">
          <p className="text-[#51B7F2]">DownLoad</p>
          <p >PDF 형식으로 포트폴리오를 다운받으실 수 있습니다</p>
        </h1>

        <div 
          className="flex p-3 bg-[#EAEAEA] opacity-75 rounded-full justify-center items-center gap-2 w-[300px] h-[40px] mt-5 cursor-pointer hover:opacity-100 transition-all duration-250 "
          onClick={handleDownLoad}
        >
          <p className="font-bold">포트폴리오 다운로드</p>
          <img src={downloadIcon} alt="download icon" className="w-[37px] h-[37px]" />
        </div>
    </div>
  )
}

export default DownLoad