import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the new topbar
import Home from './pages/Home';
import Elementary from './pages/Elementary';
import MiddleSchool from './pages/MiddleSchool';
import HighSchool from './pages/HighSchool';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        {/* Navbar stays here forever */}
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elementary" element={<Elementary />} />
          <Route path="/middle" element={<MiddleSchool />} />
          <Route path="/high" element={<HighSchool />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;