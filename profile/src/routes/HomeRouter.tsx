import React, { useEffect, useRef, useState } from "react"
import Home from "../features/Home"
import NavBar from "../features/NavBar"
import Competence from "../features/competence/Competence"
import Skills from "../features/skill/Skills"
import Project from "../features/project/Project"
import Blog from "../features/blog/Blog"
import Contact from "../features/Contact"
import DownLoad from "../features/DownLoad"

import {motion} from "framer-motion"


const HomeRouter: React.FC = () => {
  const scrollHome = useRef<HTMLDivElement>(null)
  const scrollSkill = useRef<HTMLDivElement>(null)
  const scrollProject = useRef<HTMLDivElement>(null)
  const scrollBlog = useRef<HTMLDivElement>(null)

  const [current, setCurrent] = useState<string>('home')

  const setttings = [
    { id : "Competence", ref : "", component:Competence },
    { id : "skill", ref : scrollSkill, component:Skills },
    { id : "project", ref : scrollProject, component:Project },
    { id : "blog", ref : scrollBlog, component:Blog },
  ]

  useEffect(() => {
    const option ={
      root: null,
      rootMargin: '0px',
      threshold: 0.4
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-section")
          console.log(id)
          if (id) {
            setCurrent(id)
          }
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

  return <div className="w-full flex flex-col items-center px-3">
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
    {setttings.map(({id, ref, component:Component}) => (
      <motion.div 
        key={id}
        ref={ref as React.RefObject<HTMLDivElement>}
        data-section={id}
        initial={{ opacity: 0, y: 70 }} 
        whileInView={{ opacity: 1, y: 50 }} 
        transition={{ duration: 1.5, ease: "easeOut" }} 
        viewport={{ once: true,  amount: 0.4 }}
      >
        <Component />
      </motion.div>
    ))}
    <Contact />
    <DownLoad />
  </ div>
}
export default HomeRouter