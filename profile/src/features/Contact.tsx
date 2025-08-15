const Contact: React.FC = () => {
  return (
    <div className="mt-32 flex flex-col gap-4 mb-32">

      <h1 className="text-3xl lg:text-4xl font-bold text-[#51B7F2]">Contact</h1>
      
      <div className="flex gap-4 relative">
        <p className="text-xl lg:text-2xl font-bold">Email</p>
        <p className="text-xl lg:text-2xl font-bold text-[#A19F9F]">hghg990124@naver.com</p>
      </div>

      <div className="flex gap-4 justify-between">
        <p className="text-xl lg:text-2xl font-bold">GitHub</p>
        <p className="text-xl lg:text-2xl font-bold text-[#A19F9F]">jeon-cola</p>
      </div>
    </div>
  )
}

export default Contact