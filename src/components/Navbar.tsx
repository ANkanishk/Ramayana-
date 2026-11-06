import React, { useState } from 'react';
import { Sparkles, Film, Flame, Sun, Menu, X, Shield, ArrowUpRight } from 'lucide-react';
import { ThemeMode } from '../utils/ramayana';
import { shankhSound } from '../utils/shankhAudio';

interface NavbarProps {
  themeMode: ThemeMode;
  onToggleTheme: (mode: ThemeMode) => void;
  onOpenBowModal: () => void;
  onOpenIntroModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  themeMode,
  onToggleTheme,
  onOpenBowModal,
  onOpenIntroModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isShankhRinging, setIsShankhRinging] = useState(false);

  const handleShankh = async () => {
    if (isShankhRinging) return;
    setIsShankhRinging(true);
    await shankhSound.playShankh(4.0);
    setIsShankhRinging(false);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-[#060911]/90 backdrop-blur-md border-b border-amber-600/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand & Studio Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenIntroModal}
            title="AnK Creative Mind 3D इंट्रो वीडियो देखें"
            className="group flex items-center gap-2 p-1.5 rounded-lg bg-gradient-to-r from-red-950/60 to-amber-950/60 border border-amber-500/30 hover:border-amber-400 transition-all cursor-pointer"
          >
            <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center font-black text-white text-xs tracking-tighter shadow-[0_0_10px_rgba(220,38,38,0.7)] group-hover:scale-105 transition-transform">
              AnK
            </div>
            <div className="text-left hidden sm:block">
              <span className="block text-[10px] uppercase tracking-widest text-amber-300/80 font-cinzel">
                Creative Mind
              </span>
              <span className="block text-xs font-bold text-white tracking-wide">
                स्टूडियो प्रस्तुति
              </span>
            </div>
          </button>

          <div className="h-6 w-px bg-amber-500/20 hidden sm:block" />

          {/* Title */}
          <a
            href="#hero"
            className="text-base sm:text-lg font-bold font-epic text-gold-gradient tracking-wide"
          >
            रामायण: द राइज
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-devanagari text-stone-300">
          <a href="#stream" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5 text-amber-400" />
            <span>फिल्म स्ट्रीम</span>
          </a>
          <a href="#cast" className="hover:text-amber-300 transition-colors">
            पात्र एवं कलाकार
          </a>
          <a href="#kaandas" className="hover:text-amber-300 transition-colors">
            महाकाव्य काण्ड
          </a>
          <a href="#production" className="hover:text-amber-300 transition-colors">
            निर्माण रहस्य
          </a>
          <button
            onClick={onOpenBowModal}
            className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>कोदंड धनुष</span>
            <span className="text-[10px] text-amber-400 font-cinzel">3D</span>
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Shankh sound button */}
          <button
            onClick={handleShankh}
            disabled={isShankhRinging}
            aria-label="शंख ध्वनि बजाएं"
            className="px-3 py-1.5 bg-gradient-to-r from-amber-600/30 to-orange-600/30 hover:from-amber-500/40 hover:to-orange-500/40 border border-amber-500/50 rounded-lg text-amber-200 text-xs flex items-center gap-1.5 shadow-[0_0_12px_rgba(245,158,11,0.2)] transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="font-devanagari hidden sm:inline">
              {isShankhRinging ? 'शंखनाद...' : 'शंख ध्वनि'}
            </span>
          </button>

          {/* Ram vs Ravana Theme Toggle */}
          <div className="flex items-center bg-black/40 border border-stone-700/60 rounded-lg p-0.5">
            <button
              onClick={() => onToggleTheme('ram')}
              className={`px-2.5 py-1 text-xs rounded font-medium flex items-center gap-1 transition-all cursor-pointer ${
                themeMode === 'ram'
                  ? 'bg-amber-500 text-black shadow-md font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title="श्री राम राज्य थीम (Golden Solar Aura)"
            >
              <Sun className="w-3 h-3" />
              <span className="hidden lg:inline font-devanagari">श्री राम</span>
            </button>
            <button
              onClick={() => onToggleTheme('ravana')}
              className={`px-2.5 py-1 text-xs rounded font-medium flex items-center gap-1 transition-all cursor-pointer ${
                themeMode === 'ravana'
                  ? 'bg-red-600 text-white shadow-md font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title="दशानन रावण साम्राज्य थीम (Crimson Fire Aura)"
            >
              <Flame className="w-3 h-3" />
              <span className="hidden lg:inline font-devanagari">रावण</span>
            </button>
          </div>

          {/* Direct Watch Stream Button */}
          <a
            href="#stream"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black text-xs font-bold rounded-lg shadow-lg hover:shadow-amber-500/30 transition-all font-devanagari"
          >
            <span>फिल्म देखें</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800/60"
            aria-label="मेन्यू खोलें"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e19] border-b border-amber-500/20 px-4 py-4 space-y-3 font-devanagari text-sm">
          <a
            href="#stream"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-amber-300 font-semibold py-1.5"
          >
            🎬 फिल्म व टीज़र स्ट्रीम (Google Drive 4K)
          </a>
          <a
            href="#cast"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-amber-200 py-1.5"
          >
            🎭 पात्र एवं कलाकार (रणबीर, यश, साई पल्लवी)
          </a>
          <a
            href="#kaandas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-amber-200 py-1.5"
          >
            📜 ६ महाकाव्य काण्ड
          </a>
          <a
            href="#production"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-amber-200 py-1.5"
          >
            🏛️ निर्माण रहस्य एवं बजट विवरण
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBowModal();
            }}
            className="w-full text-left text-amber-400 py-1.5 flex items-center justify-between"
          >
            <span>🏹 दिव्य कोदंड धनुष व बाण चलाएं</span>
            <span className="text-xs bg-amber-500/20 px-2 py-0.5 rounded">3D</span>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenIntroModal();
            }}
            className="w-full text-left text-red-400 py-1.5 flex items-center justify-between border-t border-stone-800 pt-2"
          >
            <span>🎥 AnK Creative Mind 3D इंट्रो वीडियो</span>
            <span className="text-xs bg-red-950 px-2 py-0.5 rounded">HD</span>
          </button>
        </div>
      )}
    </header>
  );
};
