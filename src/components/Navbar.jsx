import { Link, useLocation } from 'react-router-dom';
import { HiHome, HiRocketLaunch, HiLightBulb, HiAcademicCap } from "react-icons/hi2";

export default function Navbar() {
  const location = useLocation();

  // Helper to highlight the active link
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/elementary', label: '1-5', icon: <HiRocketLaunch /> },
    { path: '/middle', label: '6-8', icon: <HiLightBulb /> },
    { path: '/high', label: '9-12', icon: <HiAcademicCap /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
            <HiHome className="text-xl" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900">
            AI <span className="text-blue-600">FOR LEARNING</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                isActive(link.path)
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Quick Help / Search (Award Polish) */}
        <div className="hidden md:block">
          <button className="px-4 py-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors border-2 border-slate-100 rounded-full">
            Resources
          </button>
        </div>
      </div>
    </nav>
  );
}