import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoPlayerSection } from './components/VideoPlayerSection';
import { CastSection } from './components/CastSection';
import { KaandaTimeline } from './components/KaandaTimeline';
import { ProductionDetails } from './components/ProductionDetails';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { Footer } from './components/Footer';
import { OpeningSequence } from './components/OpeningSequence';
import { InteractiveBowModal } from './components/InteractiveBowModal';
import { IntroVideoModal } from './components/IntroVideoModal';
import { ThemeMode, getThemeConfig } from './utils/ramayana';

export default function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [themeMode, setThemeMode] = useState<ThemeMode>('ram');
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);
  const [bowModalOpen, setBowModalOpen] = useState(false);
  const [introModalOpen, setIntroModalOpen] = useState(false);

  useEffect(() => {
    // Check if ?autostart=1 query parameter is set to skip intro
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') {
      setShowOpening(false);
      setAutoPlayMusic(true);
    }
  }, []);

  const themeConfig = getThemeConfig(themeMode);

  const handleOpeningComplete = () => {
    setShowOpening(false);
    setAutoPlayMusic(true);
  };

  const handleStartMusic = () => {
    setAutoPlayMusic(true);
  };

  const scrollToStream = () => {
    const el = document.getElementById('stream');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${themeConfig.bgGradient} text-stone-100 transition-colors duration-700 relative`}
    >
      {/* 3D Bow & Arrow Opening Intro Sequence */}
      {showOpening && (
        <OpeningSequence
          onComplete={handleOpeningComplete}
          onStartMusic={handleStartMusic}
        />
      )}

      {/* Main Navigation Bar */}
      <Navbar
        themeMode={themeMode}
        onToggleTheme={setThemeMode}
        onOpenBowModal={() => setBowModalOpen(true)}
        onOpenIntroModal={() => setIntroModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          themeMode={themeMode}
          onOpenIntroModal={() => setIntroModalOpen(true)}
          onOpenBowModal={() => setBowModalOpen(true)}
        />

        {/* 4K Movie Video Player with Google Drive In-Page Embed & Intro Video */}
        <VideoPlayerSection />

        {/* Cast & Characters Section */}
        <CastSection />

        {/* Kaandas Timeline */}
        <KaandaTimeline />

        {/* Production & Global Scale Details */}
        <ProductionDetails />
      </main>

      {/* Footer */}
      <Footer
        onOpenIntroModal={() => setIntroModalOpen(true)}
        onOpenBowModal={() => setBowModalOpen(true)}
      />

      {/* Persistent Devotional Music Player with Shankh Trigger */}
      <AudioPlayerBar autoPlayTrigger={autoPlayMusic} />

      {/* Interactive Kodanda Bow Modal */}
      <InteractiveBowModal
        isOpen={bowModalOpen}
        onClose={() => setBowModalOpen(false)}
      />

      {/* AnK Creative Mind 3D Intro Video Modal */}
      <IntroVideoModal
        isOpen={introModalOpen}
        onClose={() => setIntroModalOpen(false)}
        onNavigateToStream={scrollToStream}
      />
    </div>
  );
}
