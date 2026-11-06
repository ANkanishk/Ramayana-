import React from 'react';
import { Award, Music2, Cpu, Globe2, Film, Layers, Sparkles } from 'lucide-react';

export const ProductionDetails: React.FC = () => {
  return (
    <section id="production" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080d19] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-cinzel text-amber-400 uppercase tracking-widest mb-2">
            <Award className="w-4 h-4" />
            <span>विश्वस्तरीय निर्माण एवं भव्यता</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-epic text-gold-gradient tracking-wide mb-4">
            सिनेमाई इतिहास का सबसे बड़ा महाकाव्य
          </h2>

          <p className="text-sm sm:text-base text-stone-300 font-devanagari max-w-2xl mx-auto">
            ₹८३५+ करोड़ के ऐतिहासिक बजट, ७-बार ऑस्कर विजेता DNEG वीएफएक्स और विश्वविख्यात
            संगीतकारों का अद्भुत संगम।
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Pillar 1: Direction & Vision */}
          <div className="bg-[#0c1222] border border-amber-500/20 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-400">
              <Film className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-200 font-devanagari mb-1">
              नितेश तिवारी का निर्देशन
            </h3>
            <p className="text-xs text-amber-400/90 font-cinzel mb-3">
              DIRECTED BY NITESH TIWARI
            </p>
            <p className="text-xs text-stone-300 font-devanagari leading-relaxed">
              'दंगल' और 'छिछोरे' जैसी ब्लॉकबस्टर फिल्मों के निर्देशक नितेश तिवारी ने इस महाकाव्य के
              प्रत्येक श्लोक और प्रसंग पर ५ वर्षों तक गहन शोध और भावनात्मक आलेख तैयार किया है।
            </p>
          </div>

          {/* Pillar 2: Producers & Visionaries */}
          <div className="bg-[#0c1222] border border-amber-500/20 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-4 text-red-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-200 font-devanagari mb-1">
              नमित मल्होत्रा एवं यश
            </h3>
            <p className="text-xs text-amber-400/90 font-cinzel mb-3">
              PRODUCED BY NAMIT MALHOTRA & YASH
            </p>
            <p className="text-xs text-stone-300 font-devanagari leading-relaxed">
              प्राइम फोकस व DNEG के ग्लोबल सीईओ नमित मल्होत्रा एवं रॉकिंग स्टार यश (मॉन्स्टर माइंड
              क्रिएशन्स) ने भारतीय संस्कृति को वैश्विक मंच पर सर्वोच्च सम्मान दिलाने का संकल्प लिया है।
            </p>
          </div>

          {/* Pillar 3: Music Titans */}
          <div className="bg-[#0c1222] border border-amber-500/20 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-400">
              <Music2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-200 font-devanagari mb-1">
              हंस ज़िमर एवं ए.आर. रहमान
            </h3>
            <p className="text-xs text-amber-400/90 font-cinzel mb-3">
              ORIGINAL SCORE & SOUNDTRACK
            </p>
            <p className="text-xs text-stone-300 font-devanagari leading-relaxed">
              हॉलीवुड के लीजेंड हैंस ज़िमर (द लायन किंग, ड्यून, ग्लैडिएटर) और भारत के गौरव ए.आर. रहमान
              ने मिलकर प्राचीन वैदिक वाद्य, शंखनाद और सिम्फनी ऑर्केस्ट्रा का कालजयी संगीत रचा है।
            </p>
          </div>

          {/* Pillar 4: Oscar-Winning VFX */}
          <div className="bg-[#0c1222] border border-amber-500/20 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-4 text-orange-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-200 font-devanagari mb-1">
              DNEG विजुअल इफेक्ट्स
            </h3>
            <p className="text-xs text-amber-400/90 font-cinzel mb-3">
              7-TIME OSCAR WINNING VFX STUDIO
            </p>
            <p className="text-xs text-stone-300 font-devanagari leading-relaxed">
              स्वर्ण लंका का अभेद्य वैभव, राम सेतु का निर्माण, दिव्य ब्रह्मास्त्र और कोदंड बाणों का
              अलौकिक तेज — सब कुछ अत्याधुनिक वर्चुअल प्रोडक्शन और 3D फोटो-रियलिज्म में तैयार।
            </p>
          </div>

        </div>

        {/* Global Release Roadmap */}
        <div className="bg-gradient-to-r from-amber-950/40 via-[#0d1424] to-red-950/40 border border-amber-500/30 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-amber-400 font-cinzel">
              <Globe2 className="w-4 h-4" />
              <span>GLOBAL THEATRICAL ROADMAP</span>
            </div>
            <h4 className="text-2xl font-bold font-epic text-gold-gradient">
              २ भागों में भव्य विश्वव्यापी प्रदर्शन
            </h4>
            <p className="text-sm text-stone-300 font-devanagari max-w-xl">
              पार्ट १: 'द राइज' दिवाली २०२६ को विश्वभर के आईमैक्स व ३डी थिएटर्स में रिलीज होगी। इसके पश्चात
              पार्ट २: 'द वॉर' दिवाली २०२७ को प्रदर्शित होगी।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 text-center">
            <div className="p-4 bg-black/60 border border-amber-500/40 rounded-xl">
              <span className="block text-[10px] text-amber-400 font-cinzel uppercase">
                PART 1 : THE RISE
              </span>
              <span className="text-lg font-bold text-white font-devanagari">
                दिवाली २०२६
              </span>
            </div>

            <div className="p-4 bg-black/60 border border-stone-700 rounded-xl">
              <span className="block text-[10px] text-stone-400 font-cinzel uppercase">
                PART 2 : THE WAR
              </span>
              <span className="text-lg font-bold text-stone-300 font-devanagari">
                दिवाली २०२७
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
