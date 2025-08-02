interface BlogProps {
  title : string
  img : string
  update : string
}

const BlogBox:React.FC<BlogProps> = ({title, img, update}) => {
  const date = update.split(" ").slice(0,4).join(" ")
  return (
    <div
  className="h-[380px] w-[350px] bg-center bg-cover bg-no-repeat relative cursor-pointer hover:scale-[1.04] transition-all duration-300 ease-in-out"
  style={{ backgroundImage: `url(${img})` }}
>
  <div className="absolute inset-0 bg-[#A19F9F] bg-opacity-50"></div>

  <div className="relative z-10 text-white p-4 text-left flex flex-col gap-2">
    <p className="font-bold text-3xl">{title}</p>
    <p className="text-xl">{date}</p>
  </div>

  <p className="text-white z-10 absolute bottom-2 right-2">자세히 보기</p>
</div>
  )
}

export default BlogBox