import { HiLightBulb, HiMap, HiAcademicCap } from "react-icons/hi2";

export default function MiddleSchool() {
  const tools = [
    { title: "Concept Maps", desc: "AI-generated maps showing how different subjects connect.", icon: <HiMap />, color: "text-blue-600" },
    { title: "Analogy Lab", desc: "Stuck on a concept? AI explains it using things you already know.", icon: <HiLightBulb />, color: "text-yellow-500" },
    { title: "Quick Quiz", desc: "Test your knowledge with AI-generated challenge sets.", icon: <HiAcademicCap />, color: "text-red-500" }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl font-black tracking-tighter text-slate-900 mb-4">GRADES 6-8</h1>
          <p className="text-xl text-slate-500 font-medium">Deepen your understanding through connection and logic.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div key={tool.title} className="p-8 rounded-[32px] border-2 border-slate-50 hover:border-slate-200 transition-all cursor-pointer group">
              <div className={`text-4xl mb-6 ${tool.color} group-hover:scale-110 transition-transform`}>{tool.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-12 rounded-[32px] bg-slate-50 border-2 border-dashed border-slate-200 text-center text-slate-400 font-bold uppercase tracking-widest">
          Content Area: Visual Learning Tools Coming Soon
        </div>
      </div>
    </div>
  );
}