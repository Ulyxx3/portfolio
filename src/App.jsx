import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Socials from './components/Socials';
import bgImage from './assets/background.jpg';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { id: 'home', label: 'HOME', desc: 'OPERATOR STATUS' },
    { id: 'projects', label: 'PROJECTS', desc: 'MISSION MANIFEST' },
    { id: 'socials', label: 'SOCIALS', desc: 'COMMS FREQUENCY' },
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black font-rajdhani text-white selection:bg-repo-orange/30">

      {/* Background Image with Heavy Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 z-0 bg-black/70" /> {/* Darken layer */}

      {/* Scanlines & Vignette */}
      <div className="scanlines z-50 pointer-events-none" />
      <div className="vignette z-40 pointer-events-none" />

      {/* Main Container */}
      <main className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start justify-center">

        {/* Left Panel: Navigation */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-8 h-full justify-center">

          <div className="mb-8">
            <h1 className="text-6xl font-quantico font-bold text-white tracking-tighter">
              ULYX.X3
            </h1>
            <div className="text-repo-orange font-mono text-sm tracking-widest mt-2">SYSTEM: ONLINE</div>
          </div>

          <nav className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`group text-left transition-all duration-300 relative pl-4 border-l-4 
                  ${activeTab === item.id
                    ? 'border-repo-orange text-repo-orange translate-x-4'
                    : 'border-white/20 text-slate-400 hover:text-white hover:border-white hover:translate-x-2'
                  }`}
              >
                <div className="text-4xl font-quantico font-bold uppercase tracking-wide">
                  {item.label}
                </div>
                <div className={`text-xs font-mono tracking-widest transition-colors ${activeTab === item.id ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'}`}>
                  // {item.desc}
                </div>
              </button>
            ))}
          </nav>

          <footer className="mt-auto text-xs text-slate-600 font-mono">
            <div>BUILD: 2024.1.0</div>
            <div>SECURE CONNECTION ESTABLISHED</div>
          </footer>
        </div>

        {/* Right Panel: Content Window */}
        <div className="flex-1 w-full h-full max-h-[80vh] bg-black/60 backdrop-blur-md border border-white/10 flex flex-col relative overflow-hidden shadow-2xl">

          {/* Window Header */}
          <div className="h-14 border-b border-white/10 bg-black/40 flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-2 text-repo-orange font-quantico tracking-wider">
              <div className="w-2 h-2 bg-repo-orange animate-pulse" />
              <span className="uppercase">{activeTab} // DATA_VIEW</span>
            </div>
            <div className="flex gap-1">
              <div className="w-8 h-1 bg-white/20" />
              <div className="w-2 h-1 bg-repo-blue" />
            </div>
          </div>

          {/* Window Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-repo-orange scrollbar-track-black/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'home' && <Hero />}
                {activeTab === 'projects' && <Projects />}
                {activeTab === 'socials' && <Socials />}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </main>
    </div>
  )
}

export default App

