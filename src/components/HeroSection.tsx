import React from 'react';
import { Play, Film, Sparkles, Shield, ChevronDown } from 'lucide-react';
import { ThemeMode, getThemeConfig } from '../utils/ramayana';

interface HeroSectionProps {
  themeMode: ThemeMode;
  onOpenIntroModal: () => void;
  onOpenBowModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  themeMode,
  onOpenIntroModal,
  onOpenBowModal
}) => {
  const theme = getThemeConfig(themeMode);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Poster with Parallax Depth and Atmospheric Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-epic.jpg"
          alt="रामायण: द राइज महाकाव्य फिल्म पोस्टर"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered Vignettes for Ultra Cinema Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-black/70" />
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            themeMode === 'ravana'
              ? 'bg-gradient-to-r from-red-950/40 via-transparent to-orange-950/40 mix-blend-color-dodge'
              : 'bg-gradient-to-r from-blue-950/40 via-transparent to-amber-950/30'
          }`}
        />
      </div>

      {/* Floating Sanskrit Shloka Banner */}
      <div className="absolute top-8 left-0 right-0 z-10 flex justify-center px-4">
        <div className="bg-black/60 border border-amber-500/30 backdrop-blur-md px-5 py-1.5 rounded-full shadow-lg max-w-2xl text-center">
          <p className="text-xs md:text-sm text-amber-200/90 font-devanagari tracking-wider">
            {theme.shloka}
          </p>
        </div>
      </div>

      {/* Hero Centerpiece Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Studio Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-red-500/20 to-amber-500/10 border border-amber-500/40 backdrop-blur-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-xs uppercase tracking-widest text-amber-300 font-cinzel">
            AnK Creative Mind & DNEG प्रस्तुत करते हैं
          </span>
        </div>

        {/* Grand Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-epic tracking-tight leading-none mb-3">
          <span className={themeMode === 'ravana' ? 'text-fire-gradient' : 'text-gold-gradient'}>
            रामायण
          </span>
          <span className="block text-2xl sm:text-4xl lg:text-5xl font-cinzel text-amber-100 tracking-wider mt-1">
            PART 1 : THE RISE
          </span>
        </h1>

        {/* Sub-tagline */}
        <p className="text-base sm:text-xl text-stone-200 font-devanagari max-w-3xl leading-relaxed mb-6">
          {themeMode === 'ravana'
            ? 'दशानन रावण का अखंड पराक्रम, चंद्रहास खड्ग का भय और स्वर्ण लंका का साम्राज्य'
            : 'सत्य, धर्म और मर्यादा का अमर महाकाव्य — जब अधर्म के संहार हेतु मर्यादा पुरुषोत्तम ने उठाया कोदंड'}
        </p>

        {/* Cast & Crew Pill Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-amber-200/80 font-cinzel mb-8">
          <span>RANBIR KAPOOR</span>
          <span className="text-amber-500/40">·</span>
          <span>SAI PALLAVI</span>
          <span className="text-amber-500/40">·</span>
          <span>YASH</span>
          <span className="text-amber-500/40">·</span>
          <span>SUNNY DEOL</span>
          <span className="text-amber-500/40">·</span>
          <span>HANS ZIMMER & A.R. RAHMAN</span>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Main Action: Stream movie without redirect */}
          <a
            href="#stream"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-black font-bold rounded-xl shadow-[0_0_35px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-3 text-base cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Play className="w-5 h-5 fill-black" />
            <span className="font-devanagari">फिल्म / टीज़र स्ट्रीम देखें (बिना रीडायरेक्ट)</span>
          </a>

          {/* Intro Video Modal Button */}
          <button
            onClick={onOpenIntroModal}
            className="w-full sm:w-auto px-6 py-4 bg-[#121829]/80 hover:bg-[#1a233a] border border-amber-500/40 hover:border-amber-400 text-amber-200 font-medium rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <Film className="w-4 h-4 text-amber-400" />
            <span className="font-devanagari">AnK Creative Mind 3D इंट्रो</span>
          </button>

          {/* Interactive Bow Button */}
          <button
            onClick={onOpenBowModal}
            className="w-full sm:w-auto px-6 py-4 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/30 hover:border-amber-400 text-amber-300 font-medium rounded-xl transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="font-devanagari">दिव्य कोदंड धनुष चलाएं</span>
          </button>
        </div>

        {/* Release tag */}
        <div className="mt-10 flex items-center gap-2 text-xs font-devanagari text-stone-400">
          <Shield className="w-4 h-4 text-amber-400" />
          <span>भव्य विश्वव्यापी प्रदर्शन — दिवाली २०२६ (३डी एवं आईमैक्स)</span>
        </div>
      </div>

      {/* Down arrow scroll helper */}
      <a
        href="#stream"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-2 text-amber-400/70 hover:text-amber-300 transition-colors animate-bounce"
        aria-label="नीचे स्क्रॉल करें"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};
