import React from "react"
import Home from "../features/Home"
import NavBar from "../features/NavBar"
import Competence from "../features/competence/Competence"
import Skills from "../features/skill/Skills"
import Project from "../features/project/Project"
import Blog from "../features/blog/Blog"
import Contact from "../features/Contact"


const HomeRouter: React.FC = () => {
  return <>
    <Home />
    <NavBar />
    <Competence />
    <Skills />
    <Project />
    <Blog />
    <Contact />
  </>
}
export default HomeRouter