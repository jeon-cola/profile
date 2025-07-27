import React from "react"
import {Route, Routes} from "react-router-dom"
import HomeRouter from "./HomeRouter"

const Router: React.FC = () => {
  return <Routes>
      <Route path="/" element={<HomeRouter/>}/>
    </Routes>

}

export default Router