import { HiFingerPrint, HiEnvelopeOpen, HiUserGroup, HiMagnifyingGlass } from "react-icons/hi2";

export default function MiddleSchool() {
  const modules = [
    { title: "Phishing Radar", icon: <HiEnvelopeOpen />, desc: "Spotting deceptive emails and fake links." },
    { title: "Digital Identity", icon: <HiFingerPrint />, desc: "Managing your permanent online footprint." },
    { title: "Social Safety", icon: <HiUserGroup />, desc: "Protecting community data on social platforms." },
    { title: "Scam Detection", icon: <HiMagnifyingGlass />, desc: "Recognizing common online fraud tactics." }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <div className="w-20 h-1 bg-blue-600 mb-6"></div>
          <h1 className="text-7xl font-black tracking-tighter text-white uppercase">Cyber Guardians</h1>
          <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mt-4">Level 02 // Grades 6-8 Submission</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((m, i) => (
            <div 
              key={i} 
              className="p-10 rounded-[32px] bg-slate-950 border border-slate-900 hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-500 cursor-pointer group"
            >
              <div className="flex items-start gap-8">
                <div className="text-5xl text-slate-700 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-500">
                  {m.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase group-hover:text-blue-400 transition-colors">{m.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}