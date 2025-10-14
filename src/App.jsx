import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Resume from './Resume'

function Home() {
  return (
    <div className="home-root">
      <h1>Welcome</h1>
      <p>This is a small demo. Click the link below to open the resume.</p>
      <p>
        <Link to="/resume">Open Resume</Link>
      </p>
      <p>
        Shareable link (works when hosted): <code>{window.location.origin + window.location.pathname + 'resume'}</code>
      </p>
    </div>
  )
}

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </BrowserRouter>
  )
}
