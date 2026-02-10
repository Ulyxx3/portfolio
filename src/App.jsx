import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Socials from './components/Socials';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { id: 'home', label: 'HOME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'socials', label: 'SOCIALS' },
  ];

  return (
    <div className="relative min-h-screen text-repo-blue font-rajdhani overflow-hidden selection:bg-repo-orange/30">

      {/* Global Effects */}
      <div className="scanlines" />
      <div className="vignette" />

      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(18,18,18,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.5)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />

      <main className="container mx-auto h-screen p-8 flex flex-col md:flex-row gap-8 relative z-10">

        {/* Left Menu Column */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-12 pt-12">

          {/* Header Title */}
          <div>
            <h1 className="text-6xl font-quantico font-bold text-repo-orange tracking-tighter opacity-90">
              ULYX
              <span className="text-repo-blue">.X3</span>
            </h1>
            <div className="h-1 w-24 bg-repo-orange mt-2" />
          </div>

          {/* Navigation Menu */}
          <nav className="flex flex-col gap-4">
            <h2 className="text-3xl font-quantico font-bold text-repo-orange mb-4 tracking-widest">
              MENU
            </h2>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`
                  text-left text-2xl font-bold py-2 px-6 transition-all duration-200 clip-path-polygon
                  ${activeTab === item.id
                    ? 'bg-repo-blue text-black border-l-4 border-repo-orange translate-x-4'
                    : 'text-gray-500 hover:text-white hover:translate-x-2'
                  }
                `}
                style={{
                  clipPath: activeTab === item.id ? 'polygon(0 0, 95% 0, 100% 100%, 0% 100%)' : 'none'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Status / Info */}
          <div className="mt-auto opacity-60">
            <div className="border border-repo-blue/30 p-4">
              <h3 className="text-repo-orange font-quantico mb-2">SYSTEM STATUS</h3>
              <div className="flex justify-between text-sm">
                <span>ONLINE</span>
                <span className="text-green-500">ACTIVE</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>VERSION</span>
                <span>2024.1.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="flex-1 relative border-l border-white/5 bg-black/40 backdrop-blur-sm p-8 md:p-12 overflow-hidden">

          {/* Decorative Top Bar */}
          <div className="absolute top-0 left-0 w-full h-16 border-b border-white/10 flex items-center justify-between px-8 bg-black/60">
            <span className="text-xl font-quantico text-repo-orange">
              {activeTab.toUpperCase()} // SECTION
            </span>
            <div className="flex gap-2">
              <div className="w-4 h-4 bg-repo-blue opacity-50" />
              <div className="w-4 h-4 bg-repo-orange opacity-50" />
            </div>
          </div>

          {/* Content Area */}
          <div className="mt-16 h-[calc(100%-4rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-repo-orange scrollbar-track-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
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

