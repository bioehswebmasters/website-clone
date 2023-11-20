import React from 'react'
import './App.css'
import Home from './pages/Home'
import BioEHSC from './pages/BioEHSC'
import Committees from './pages/Committees'
import CourseMap from './pages/CourseMap'
import Decal from './pages/Decal'
import Leadership from './pages/Leadership'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'; 
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BioEHSC" element={<BioEHSC />} />
        <Route path="/Committees" element={<Committees />} />
        <Route path="/CourseMap" element={<CourseMap />} />
        <Route path="/Decal" element={<Decal />} />
        <Route path="/Leadership" element={<Leadership />} />
      </Routes>
    </div>
  )
}

export default App
