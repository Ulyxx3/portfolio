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
      <div className="absolute inset-0 z-0 bg-black/80" /> {/* Darken layer significantly */}

      {/* Scanlines & Vignette - ensure pointer-events-none */}
      <div className="scanlines z-50 pointer-events-none" />
      <div className="vignette z-40 pointer-events-none" />

      {/* Main Container - Using absolute positioning for 'Window' feel */}

      {/* 1. MENU WINDOW (Center Left) */}
      <div className="absolute top-1/2 left-8 md:left-16 -translate-y-1/2 w-80 z-30 flex flex-col gap-8">

        <div className="mb-4">
          <h1 className="text-6xl font-quantico font-bold text-white tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            ULYX.X3
          </h1>
          <div className="text-repo-orange font-mono text-sm tracking-widest mt-2 px-1 bg-black/50 inline-block border border-repo-orange/30">
            SYSTEM: ONLINE
          </div>
        </div>

        <nav className="flex flex-col gap-2 relative bg-black/40 backdrop-blur-sm p-4 border border-white/10 rounded-lg">
          {/* Header for menu */}
          <div className="text-xs font-mono text-slate-500 mb-2 border-b border-white/10 pb-1">NAVIGATION // MAIN</div>

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`group w-full text-left transition-all duration-200 relative p-3 border border-transparent hover:bg-white/5
                  ${activeTab === item.id
                  ? 'bg-repo-blue/20 border-repo-orange text-white shadow-[0_0_15px_rgba(0,119,204,0.3)]'
                  : 'text-slate-400 hover:text-white hover:border-white/30'
                }`}
            >
              <div className="flex justify-between items-center relative z-10">
                <span className="text-2xl font-quantico font-bold tracking-wide">
                  {item.label}
                </span>
                {activeTab === item.id && (
                  <div className="w-2 h-2 bg-repo-orange animate-pulse" />
                )}
              </div>

              <div className={`text-[10px] font-mono tracking-widest mt-1 transition-colors ${activeTab === item.id ? 'text-repo-orange' : 'text-slate-600 group-hover:text-slate-400'}`}>
                  // {item.desc}
              </div>
            </button>
          ))}
        </nav>

        <div className="bg-black/40 backdrop-blur-sm p-4 border border-white/10 rounded-lg text-xs text-slate-500 font-mono">
          <div className="flex justify-between">
            <span>SERVER:</span>
            <span className="text-green-500">CONNECTED</span>
          </div>
          <div className="flex justify-between">
            <span>PING:</span>
            <span>12ms</span>
          </div>
        </div>
      </div>

      {/* 2. CONTENT WINDOW (Right of Menu) */}
      <div className="absolute top-1/2 left-[380px] md:left-[450px] right-8 md:right-16 -translate-y-1/2 h-[80vh] z-20 flex flex-col bg-black/80 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">

        {/* Window Header Bar */}
        <div className="h-12 border-b border-white/10 bg-gradient-to-r from-black via-slate-900 to-black flex items-center justify-between px-6 shrink-0 relative">
          {/* Decorative lines */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />

          <div className="flex items-center gap-3 text-repo-orange font-quantico tracking-wider text-sm md:text-base">
            <div className="w-3 h-3 bg-repo-orange rotate-45" />
            <span className="uppercase tracking-[0.2em]">{activeTab} // DATA_VIEW</span>
          </div>

          <div className="flex gap-2">
            <div className="w-12 h-2 bg-white/10" />
            <div className="w-2 h-2 bg-repo-blue" />
          </div>
        </div>

        {/* Window Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-thin scrollbar-thumb-repo-orange scrollbar-track-black/40 relative">
          {/* Subtle Grid Background inside window */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              {activeTab === 'home' && <Hero />}
              {activeTab === 'projects' && <Projects />}
              {activeTab === 'socials' && <Socials />}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </div>
  )
}

export default App
