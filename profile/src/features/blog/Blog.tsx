
import BlogBox from "./BlogBox"


const Blog: React.FC =() => {
  return(
    <div>

      <h1 className="font-bold text-3xl lg:text-4xl flex flex-col gap-2 mt-32 mb-[0px]">
        <p className="text-[#51B7F2]">블로그</p>
        <p>CS 공부 정리는 블로그에서 확인할 수 있습니다</p>
      </h1>

      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6 mt-10">
        <BlogBox title="[JavaScript] Built-in Object (빌트인 객체)" img="https://velog.velcdn.com/images/hongsj/post/c27b5d74-0f5f-4ee9-aade-96957b3dbcf0/image.png" update="2025년 6월 28일" link="https://velog.io/@hongsj/JavaScript-ES6-%EB%AC%B8%EB%B2%95"/>
        <BlogBox title="[알고리즘] 위상 정렬 ( Topology Sort )" img="https://velog.velcdn.com/images/hongsj/post/3d994418-9191-44d4-9ef2-14f09f22496b/image.png" update="2025년 6월 27일" link="https://velog.io/@hongsj/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%9C%84%EC%83%81-%EC%A0%95%EB%A0%AC-Topology-Sort"/>
        <BlogBox title="[자료구조]Heap" img="https://velog.velcdn.com/images/hongsj/post/733bfc4b-f844-4ab8-b6d2-6c8786fb0b6e/image.png" update="2025년 6월 26일" link="https://velog.io/@hongsj/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0Heap"/>
      </div>

    </div>
  )
}

export default Blog