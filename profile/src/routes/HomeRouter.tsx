import React, { useEffect, useRef, useState } from "react"
import Home from "../features/Home"
import NavBar from "../features/NavBar"
import Competence from "../features/competence/Competence"
import Skills from "../features/skill/Skills"
import Project from "../features/project/Project"
import Blog from "../features/blog/Blog"
import Contact from "../features/Contact"


const HomeRouter: React.FC = () => {
  const scrollHome = useRef<HTMLDivElement>(null)
  const scrollSkill = useRef<HTMLDivElement>(null)
  const scrollProject = useRef<HTMLDivElement>(null)
  const scrollBlog = useRef<HTMLDivElement>(null)

  const [current, setCurrent] = useState<string>('home')

  useEffect(() => {
    const option ={
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-section")
          if (id) setCurrent(id)
        }
      })
    },option)

    const sections = [
      scrollHome.current,
      scrollSkill.current,
      scrollProject.current,
      scrollBlog.current
    ]

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }

  },[])

  return <>
  <div ref={scrollHome} data-section="home">
    <Home />
  </div>
    <NavBar 
      current = {current}
      onScrollHome = {() => scrollHome.current?.scrollIntoView({behavior: "smooth"})}
      onScrollSkill =  {() => scrollSkill.current?.scrollIntoView({behavior: "smooth"})}
      onScrollProject =  {() => scrollProject.current?.scrollIntoView({behavior: "smooth"})}
      onScrollBlog =  {() => scrollBlog.current?.scrollIntoView({behavior: "smooth"})}
    />
    <Competence />
    <div ref={scrollSkill} data-section="skill">
      <Skills />
    </div>
    <div ref={scrollProject} data-section="project">
      <Project />
    </div>
    <div ref={scrollBlog} data-section="blog">
      <Blog />
    </div>
    <Contact />
  </>
}
export default HomeRouter