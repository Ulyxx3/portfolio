import Background from './components/Background';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Socials from './components/Socials';

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden selection:bg-sky-500/30">
      <Background />

      <main className="container mx-auto px-4 relative z-10 space-y-32">
        <Hero />
        <Projects />
        <Socials />
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm relative z-10">
        <p>© {new Date().getFullYear()} ULYXX3. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
