import BlogBox from "./BlogBox"

const Blog: React.FC =() => {
  return(
    <div>

      <h1 className="font-bold text-4xl flex flex-col gap-2 mt-32 mb-[0px]">
        <p className="text-[#51B7F2]">블로그</p>
        <p>CS 공부 정리는 블로그에서 확인할 수 있습니다</p>
      </h1>

      <div className="flex gap-6 mt-10">
        <BlogBox title="[JavaScript] Built-in Object (빌트인 객체)" img="https://velog.velcdn.com/images/hongsj/post/5813e29d-2013-4af7-8ac6-f7550aedc20e/image.png" update="Tue, 29 Jul 2025 13:53:58 GMT"/>
        <BlogBox title="[JavaScript] Built-in Object (빌트인 객체)" img="https://velog.velcdn.com/images/hongsj/post/5813e29d-2013-4af7-8ac6-f7550aedc20e/image.png" update="Tue, 29 Jul 2025 13:53:58 GMT"/>
        <BlogBox title="[JavaScript] Built-in Object (빌트인 객체)" img="https://velog.velcdn.com/images/hongsj/post/5813e29d-2013-4af7-8ac6-f7550aedc20e/image.png" update="Tue, 29 Jul 2025 13:53:58 GMT"/>
      </div>
    </div>
  )
}

export default Blog