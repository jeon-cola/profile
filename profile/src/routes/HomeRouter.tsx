import React from "react"
import {Route, Routes} from 'react-router-dom'
import Home from "../features/Home"


const HomeRouter: React.FC = () => {
  return <Routes>
    <Route path="/*" element={<Home/>}/>
  </Routes>
}
export default HomeRouter