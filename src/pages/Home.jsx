import { Link } from 'react-router-dom';
import { HiShieldCheck, HiFingerPrint, HiLockClosed } from "react-icons/hi2";

export default function Home() {
  const sections = [
    { 
      path: '/elementary', 
      title: 'Elementary', 
      icon: <HiShieldCheck />, 
      color: 'bg-emerald-600',
      desc: 'Foundations of privacy, strong passwords, and online safety for younger students.' 
    },
    { 
      path: '/middle', 
      title: 'Middle School', 
      icon: <HiFingerPrint />, 
      color: 'bg-blue-600',
      desc: 'Identifying phishing, social engineering, and managing a digital footprint.' 
    },
    { 
      path: '/high', 
      title: 'High School', 
      icon: <HiLockClosed />, 
      color: 'bg-indigo-600',
      desc: 'Advanced security ethics, network encryption, and professional defense tools.' 
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/50">
      <div className="max-w-6xl mx-auto px-6 py-32">
        
        <header className="text-center mb-24">
          <h1 className="text-9xl font-black tracking-tighter uppercase leading-none mb-8">
            Cyber <span className="text-indigo-600">Learn</span>
          </h1>
          <p className="text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
            A comprehensive cybersecurity curriculum designed to prepare students for the digital world.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((s) => (
            <Link key={s.path} to={s.path} className="group p-10 rounded-[32px] bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-all duration-300 shadow-2xl">
              <div className={`w-14 h-14 ${s.color} rounded-xl flex items-center justify-center text-3xl text-white mb-8 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h2 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">{s.title}</h2>
              <p className="text-slate-300 text-lg font-medium leading-relaxed mb-10">{s.desc}</p>
              
              <div className="text-sm font-black uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                Begin Training <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <footer className="py-20 text-center border-t border-slate-900">
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
          2026 Innovation Award Entry | Cyber Learn Platform
        </p>
      </footer>
    </div>
  );
}