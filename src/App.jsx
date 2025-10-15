import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Resume from './Resume'
import './App.css'

export default function App(){
  return (
    <BrowserRouter basename="/my-resume"> 
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}
