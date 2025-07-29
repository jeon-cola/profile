import React from "react"
import Home from "../features/Home"
import NavBar from "../features/NavBar"
import Competence from "../features/competence/Competence"
import Skills from "../features/skill/Skills"


const HomeRouter: React.FC = () => {
  return <>
    <Home />
    <NavBar />
    <Competence />
    <Skills />
  </>
}
export default HomeRouter