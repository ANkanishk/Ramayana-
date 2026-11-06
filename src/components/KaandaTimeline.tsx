import React, { useState } from 'react';
import { KAANDAS, Kaanda } from '../utils/ramayana';
import { Scroll, Sparkles, ChevronRight, CheckCircle2, Bookmark } from 'lucide-react';

export const KaandaTimeline: React.FC = () => {
  const [activeKaanda, setActiveKaanda] = useState<Kaanda>(KAANDAS[0]);

  return (
    <section id="kaandas" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#060911] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-cinzel text-amber-400 uppercase tracking-widest mb-2">
            <Scroll className="w-4 h-4" />
            <span>छह महाकाव्य काण्ड (THE 6 SACRED CHAPTERS)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-epic text-gold-gradient tracking-wide mb-4">
            रामायण का कालजयी कथानक
          </h2>

          <p className="text-sm sm:text-base text-stone-300 font-devanagari max-w-2xl mx-auto">
            महर्षि वाल्मीकि विरचित पवित्र रामायण के छह काण्ड, जिनका रूपांतरण इस ऐतिहासिक
            सिनेमाई त्रयी में किया गया है।
          </p>
        </div>

        {/* Kaanda Navigation Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {KAANDAS.map((k, index) => {
            const isSelected = activeKaanda.id === k.id;
            const isPartOne = index <= 2; // Part 1 covers Bala, Ayodhya, Aranya

            return (
              <button
                key={k.id}
                onClick={() => setActiveKaanda(k)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                    : 'bg-[#0d1222] border-stone-800 hover:border-amber-500/40'
                }`}
              >
                {/* Part 1 movie indicator */}
                {isPartOne && (
                  <span className="text-[9px] uppercase tracking-wider text-amber-400 font-cinzel block mb-1">
                    भाग १: द राइज
                  </span>
                )}
                
                <h3 className={`text-sm font-bold font-devanagari ${isSelected ? 'text-amber-300' : 'text-stone-200'}`}>
                  {k.name}
                </h3>
                <p className="text-[11px] text-stone-400 font-cinzel mt-0.5">
                  {k.sanskrit}
                </p>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Kaanda Showcase Panel */}
        <div className="bg-[#0b101c] border border-amber-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Summary & Significance */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center font-bold text-amber-300 font-cinzel">
                  {KAANDAS.findIndex((k) => k.id === activeKaanda.id) + 1}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-epic text-amber-100">
                    {activeKaanda.name} ({activeKaanda.sanskrit})
                  </h3>
                  <p className="text-xs text-amber-400 font-cinzel uppercase tracking-wider">
                    {activeKaanda.id === 'bala' || activeKaanda.id === 'ayodhya' || activeKaanda.id === 'aranya'
                      ? 'वर्तमान फिल्म "रामायण: द राइज" में सम्मिलित'
                      : 'आगामी भाग "रामायण: द वॉर" (२०२७) में सम्मिलित'}
                  </p>
                </div>
              </div>

              <p className="text-base text-stone-300 font-devanagari leading-relaxed">
                {activeKaanda.desc}
              </p>

              {/* Significance Box */}
              <div className="bg-amber-950/30 border border-amber-500/20 rounded-xl p-4">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-cinzel tracking-wider uppercase mb-1">
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>दार्शनिक एवं आध्यात्मिक संदेश (SIGNIFICANCE)</span>
                </div>
                <p className="text-sm font-semibold text-amber-200 font-devanagari">
                  {activeKaanda.significance}
                </p>
              </div>
            </div>

            {/* Right: Key Milestones */}
            <div className="bg-[#070b14] border border-stone-800 rounded-xl p-6">
              <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 font-cinzel mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>मुख्य ऐतिहासिक घटनाएं</span>
              </h4>

              <div className="space-y-3 font-devanagari text-sm">
                {activeKaanda.keyEvents.map((evt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-stone-300">{evt}</span>
                  </div>
                ))}
              </div>

              {/* Trilogy Roadmap Hint */}
              <div className="mt-8 pt-4 border-t border-stone-800/80 text-[11px] text-stone-400">
                <span>सिनेमाई त्रयी: नमित मल्होत्रा एवं नितेश तिवारी द्वारा ३ भव्य भागों में निर्माण।</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
