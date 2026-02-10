import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BackgroundEffects from './components/BackgroundEffects';
import TitleScreen from './pages/TitleScreen';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SocialsPage from './pages/SocialsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const handleBack = () => {
    setCurrentView('home');
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <BackgroundEffects />

      <AnimatePresence mode="wait">
        {currentView === 'home' && (
          <TitleScreen key="home" onNavigate={handleNavigate} />
        )}
        {currentView === 'about' && (
          <AboutPage key="about" onBack={handleBack} />
        )}
        {currentView === 'projects' && (
          <ProjectsPage key="projects" onBack={handleBack} />
        )}
        {currentView === 'socials' && (
          <SocialsPage key="socials" onBack={handleBack} />
        )}
        {currentView === 'contact' && (
          <ContactPage key="contact" onBack={handleBack} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
