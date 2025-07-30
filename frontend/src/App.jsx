import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Showcase from './pages/Showcase';
import Archive from './pages/Archive';
import AboutMe from './pages/AboutMe';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <div className='page-container'>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<AboutMe/>} />
          
          <Route path="/archive" element={<Archive />}/>
          <Route path="/archive/:projectId" element={<ProjectDetails />} />

          <Route path="/showcase" element={<Showcase />} />
        </Routes>

        <footer className="app-footer">
  | 2025 Matteo DeSimone | Built using React, PHP, & SQLite |
        </footer>

      </Router>
    </div>
  );
}

export default App;
