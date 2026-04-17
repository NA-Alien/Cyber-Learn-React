import { Link, useLocation } from 'react-router-dom';
import { HiShieldCheck, HiFingerPrint, HiLockClosed, HiCommandLine } from "react-icons/hi2";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Define colors based on the current path
  const getThemeColor = () => {
    if (location.pathname === '/elementary') return 'border-emerald-500/50';
    if (location.pathname === '/middle') return 'border-blue-500/50';
    if (location.pathname === '/high') return 'border-indigo-500/50';
    return 'border-slate-800';
  };

  const navLinks = [
    { path: '/elementary', label: '1-5', icon: <HiShieldCheck />, activeClass: 'bg-emerald-600' },
    { path: '/middle', label: '6-8', icon: <HiFingerPrint />, activeClass: 'bg-blue-600' },
    { path: '/high', label: '9-12', icon: <HiLockClosed />, activeClass: 'bg-indigo-600' },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b ${getThemeColor()} px-6 py-5 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group transition-transform active:scale-95">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white group-hover:bg-indigo-600 transition-all duration-300">
            <HiCommandLine className="text-xl" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase">
            Cyber <span className="text-indigo-500">Learn</span>
          </span>
        </Link>

        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 ease-in-out ${
                isActive(link.path) 
                  ? `${link.activeClass} text-white shadow-lg` 
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}