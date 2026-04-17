import { HiShieldCheck, HiFaceSmile, HiKey, HiEyeSlash } from "react-icons/hi2";

export default function Elementary() {
  const modules = [
    { 
      title: "Strong Secrets", 
      icon: <HiKey />, 
      desc: "How to make passwords that are super hard for robots to guess." 
    },
    { 
      title: "Online Strangers", 
      icon: <HiEyeSlash />, 
      desc: "Who to talk to (and who not to talk to) when you are playing games." 
    },
    { 
      title: "Being Kind", 
      icon: <HiFaceSmile />, 
      desc: "Why it's important to be a nice 'Digital Citizen' to your friends." 
    },
    { 
      title: "Stay Safe", 
      icon: <HiShieldCheck />, 
      desc: "The basic rules of the internet road for younger explorers." 
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 animate-in">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-16">
          <div className="w-20 h-1.5 bg-emerald-500 mb-6 rounded-full"></div>
          <h1 className="text-7xl font-black tracking-tighter text-white uppercase">Digital Detectives</h1>
          <p className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-sm mt-4">
            Level 01 // Grades 1-5 Submission
          </p>
        </header>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-6 pb-20">
          {modules.map((m, i) => (
            <div 
              key={i} 
              className="p-10 rounded-[40px] bg-slate-950 border border-slate-900 hover:border-emerald-500 hover:bg-emerald-500/5 transition-all duration-500 cursor-pointer group"
            >
              <div className="flex items-start gap-8">
                {/* Icon Container */}
                <div className="text-6xl text-slate-800 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-500">
                  {m.icon}
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-3xl font-black text-white mb-2 uppercase group-hover:text-emerald-400 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Call to Action for Kids */}
        <div className="text-center py-10 border-t border-slate-900">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
            Ready to start your first detective mission?
          </p>
        </div>
      </div>
    </div>
  );
}