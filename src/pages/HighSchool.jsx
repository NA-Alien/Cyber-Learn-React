import { HiChatBubbleLeftRight, HiDocumentText, HiBeaker } from "react-icons/hi2";

export default function HighSchool() {
  const tools = [
    { title: "Socratic Tutor", desc: "placeholder", icon: <HiChatBubbleLeftRight />, color: "text-indigo-600" },
    { title: "Exam Prep", desc: "placeholder", icon: <HiDocumentText />, color: "text-slate-700" },
    { title: "Lab Assistant", desc: "placeholder", icon: <HiBeaker />, color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl font-black tracking-tighter text-slate-900 mb-4">GRADES 9-12</h1>
          <p className="text-xl text-slate-500 font-medium">placeholder</p>
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
          placeholder
        </div>
      </div>
    </div>
  );
}