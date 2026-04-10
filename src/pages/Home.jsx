import { Link } from 'react-router-dom';
import { HiRocketLaunch, HiAcademicCap, HiLightBulb } from "react-icons/hi2";

export default function Home() {
  const sections = [
    { 
      path: '/elementary', 
      title: 'Grades 1-5', 
      icon: <HiRocketLaunch />, 
      border: 'border-orange-500', 
      accent: 'text-orange-500',
      desc: 'placeholder' 
    },
    { 
      path: '/middle', 
      title: 'Grades 6-8', 
      icon: <HiLightBulb />, 
      border: 'border-blue-600', 
      accent: 'text-blue-600',
      desc: 'placeholder' 
    },
    { 
      path: '/high', 
      title: 'Grades 9-12', 
      icon: <HiAcademicCap />, 
      border: 'border-indigo-700', 
      accent: 'text-indigo-700',
      desc: 'placehoder' 
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      
      <div className="w-full max-w-6xl">
        {/* HERO - Minimalist & High Contrast */}
        <header className="py-24 px-4 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-full text-slate-500 text-xs font-black uppercase tracking-widest mb-8">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            2026 Civil Award Entry
          </div>
          
          <h1 className="text-8xl font-black tracking-tighter text-slate-900 mb-6">
            AI FOR LEARNING
          </h1>
          
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            ion know what to put here.
          </p>
        </header>

        {/* GRID - Minimalist Cards */}
        <main className="px-4 pb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <Link 
                key={section.path} 
                to={section.path}
                className={`group p-8 rounded-[32px] bg-white border-2 border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-slate-50 ${section.accent} group-hover:bg-slate-900 group-hover:text-white transition-all duration-300`}>
                  {section.icon}
                </div>
                
                <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                  {section.title}
                </h2>
                
                <p className="text-slate-500 leading-relaxed font-medium mb-8">
                  {section.desc}
                </p>
                
                <div className={`text-sm font-black uppercase tracking-widest ${section.accent} flex items-center gap-2`}>
                  Enter Section 
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
      
      <footer className="w-full text-center py-10 mt-auto border-t border-slate-50 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
        Class of 2027 • Otay Ranch High School
      </footer>
    </div>
  );
}