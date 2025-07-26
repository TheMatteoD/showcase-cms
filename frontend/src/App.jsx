import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Showcase from './pages/Showcase';
import Archive from './pages/Archive';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Showcase/>} />
          <Route path="/archive" element={<Archive />}/>
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
