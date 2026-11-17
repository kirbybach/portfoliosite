import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MorePage from './pages/MorePage'
import ReadingPage from './pages/ReadingPage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import ChristmasMode from './components/ChristmasMode'
import './styles/main.css'
import './styles/christmas.css'

function App() {
  return (
    <BrowserRouter>
      <ChristmasMode>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </ChristmasMode>
    </BrowserRouter>
  )
}

export default App
