import React from "react"
import Home from "../features/Home"
import NavBar from "../features/NavBar"
import Competence from "../features/competence/Competence"


const HomeRouter: React.FC = () => {
  return <>
    <Home />
    <NavBar />
    <Competence />
  </>
}
export default HomeRouter