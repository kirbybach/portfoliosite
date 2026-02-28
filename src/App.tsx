import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MorePage from './pages/MorePage'
import ReadingPage from './pages/ReadingPage'
import ProjectsPage from './pages/ProjectsPage'
import './styles/main.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/more" element={<MorePage />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
