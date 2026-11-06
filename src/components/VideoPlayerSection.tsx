import React, { useState } from 'react';
import {
  Maximize2,
  Tv,
  Film,
  Sparkles,
  ExternalLink,
  Info,
  CheckCircle2,
  Flame,
  Volume2
} from 'lucide-react';
import { getGoogleDriveEmbedUrl } from '../utils/ramayana';

interface VideoPlayerSectionProps {
  initialSource?: 'drive' | 'intro';
}

export const VideoPlayerSection: React.FC<VideoPlayerSectionProps> = ({ initialSource = 'drive' }) => {
  const [activeSource, setActiveSource] = useState<'drive' | 'intro'>(initialSource);
  const [aspectRatio, setAspectRatio] = useState<'21:9' | '16:9'>('16:9');
  const [theaterMode, setTheaterMode] = useState(false);
  const [driveLoadError, setDriveLoadError] = useState(false);

  const googleDriveLink =
    'https://drive.google.com/file/d/1N85LT8iMW8Fze5GBOm4xSNnrPoMWc3DQ/view?usp=drivesdk';
  const embedUrl = getGoogleDriveEmbedUrl(googleDriveLink);

  return (
    <section
      id="stream"
      className={`relative py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-700 ${
        theaterMode ? 'bg-[#020305] z-50' : 'bg-[#060911]'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-cinzel text-amber-400 uppercase tracking-widest mb-2">
            <Film className="w-4 h-4" />
            <span>आधिकारिक 4K सिनेमा प्लेयर · नो रीडायरेक्ट</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-epic text-gold-gradient tracking-wide mb-3">
            रामायण: द राइज — फिल्म व टीज़र स्ट्रीम
          </h2>

          <p className="text-sm sm:text-base text-stone-300 font-devanagari max-w-2xl mx-auto">
            बिना किसी रीडायरेक्ट के सीधे इसी पृष्ठ पर उच्च गुणवत्ता (High-Quality Rendering) एवं
            सिनेमाई इमर्शन के साथ वीडियो का आनंद लें।
          </p>
        </div>

        {/* Player Controls Bar */}
        <div className="bg-[#0e1424] border border-amber-500/30 rounded-t-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-xl">
          
          {/* Source Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-black/60 rounded-xl border border-stone-800">
            <button
              onClick={() => setActiveSource('drive')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-devanagari font-medium transition-all cursor-pointer flex items-center gap-2 ${
                activeSource === 'drive'
                  ? 'bg-amber-500 text-black shadow-md font-bold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>फिल्म / टीज़र (Google Drive)</span>
            </button>

            <button
              onClick={() => setActiveSource('intro')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-devanagari font-medium transition-all cursor-pointer flex items-center gap-2 ${
                activeSource === 'intro'
                  ? 'bg-red-600 text-white shadow-md font-bold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AnK Creative Mind 3D इंट्रो</span>
            </button>
          </div>

          {/* Quick Settings: Theater, Aspect Ratio, Fullscreen */}
          <div className="flex items-center gap-2 text-xs">
            {/* Aspect Ratio Switch */}
            <div className="hidden sm:flex items-center gap-1 bg-black/40 border border-stone-800 rounded-lg p-0.5">
              <button
                onClick={() => setAspectRatio('16:9')}
                className={`px-2 py-1 rounded text-[11px] ${
                  aspectRatio === '16:9' ? 'bg-stone-700 text-white' : 'text-stone-400'
                }`}
                title="16:9 आईमैक्स स्क्रीन"
              >
                16:9
              </button>
              <button
                onClick={() => setAspectRatio('21:9')}
                className={`px-2 py-1 rounded text-[11px] ${
                  aspectRatio === '21:9' ? 'bg-stone-700 text-white' : 'text-stone-400'
                }`}
                title="21:9 अल्ट्रावाइड सिनेमा"
              >
                21:9
              </button>
            </div>

            {/* Theater Mode Lights Toggle */}
            <button
              onClick={() => setTheaterMode(!theaterMode)}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer font-devanagari ${
                theaterMode
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                  : 'border-stone-700 text-stone-300 hover:text-white'
              }`}
              title="सिनेमा लाइट्स मोड चालू/बंद करें"
            >
              <Tv className="w-3.5 h-3.5" />
              <span>{theaterMode ? 'लाइट्स ऑन' : 'सिनेमा लाइट्स'}</span>
            </button>

            {/* Open in Drive fallback option */}
            <a
              href={googleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-stone-700 hover:border-amber-500/40 text-stone-400 hover:text-amber-200 rounded-lg flex items-center gap-1 transition-colors"
              title="गूगल ड्राइव में नए टैब में खोलें"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ड्राइव लिंक</span>
            </a>
          </div>
        </div>

        {/* Video Screen Frame */}
        <div
          className={`relative w-full bg-black border-x border-b border-amber-500/30 rounded-b-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-all duration-500 ${
            aspectRatio === '21:9' ? 'aspect-[21/9]' : 'aspect-video'
          }`}
        >
          {activeSource === 'drive' ? (
            /* Google Drive Embedded Player without redirect */
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <iframe
                src={embedUrl}
                title="Ramayana: The Rise - Movie Stream (Google Drive Embedded)"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0 z-10"
                onError={() => setDriveLoadError(true)}
              />

              {/* Ambient overlay guide */}
              <div className="absolute bottom-3 left-4 z-20 pointer-events-none bg-black/70 backdrop-blur-md px-3 py-1 rounded text-[11px] text-amber-300 font-devanagari border border-amber-500/20">
                ▶ इन-पेज 4K स्ट्रीम (Google Drive Player)
              </div>
            </div>
          ) : (
            /* AnK Creative Mind 3D Intro Video Player */
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              <video
                src="/assets/aistudio/video_20261026_200916_2c2653a8.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
                poster="/assets/images/hero-epic.jpg"
              >
                आपका ब्राउज़र वीडियो टैग का समर्थन नहीं करता है।
              </video>

              <div className="absolute top-3 right-4 z-20 bg-red-950/80 border border-red-500/40 text-red-200 px-3 py-1 rounded text-xs font-cinzel">
                AnK CREATIVE MIND · 3D INTRO
              </div>
            </div>
          )}
        </div>

        {/* Movie Info & Synopsis Card */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#0b101c] border border-amber-500/20 rounded-2xl p-6 sm:p-8">
          
          {/* Main Synopsis */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-cinzel tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>कथानक विवरण (SYNOPSIS)</span>
            </div>

            <h3 className="text-2xl font-bold font-epic text-amber-100">
              रामायण: द राइज (पार्ट १) — धर्म की प्रथम उद्घोषणा
            </h3>

            <p className="text-sm text-stone-300 font-devanagari leading-relaxed">
              नितेश तिवारी के निर्देशन में बनी यह त्रयी (Trilogy) की प्रथम कड़ी है। कथा भगवान राम के जन्म,
              ऋषि विश्वामित्र के साथ सिद्धाश्रम में राक्षसों के संहार, जनकपुरी में शिव धनुष भंग और
              माता सीता के साथ पावन परिणय से प्रारंभ होती है। इसके पश्चात अयोध्या काण्ड में राज्याभिषेक का
              षड्यंत्र, चौदह वर्षों का वनवास, पंचवटी में शूर्पणखा का मानमर्दन, और अंततः खर-दूषण के संहार
              के पश्चात दशानन रावण द्वारा रचे गए कपटी स्वर्णमृग जाल तथा सीता हरण तक की महागाथा को
              अभूतपूर्व हॉलीवुड-स्तरीय 3D VFX के साथ प्रस्तुत किया गया है।
            </p>

            {/* Highlights bullet tags */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-devanagari">
              <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-200 rounded-lg">
                ✓ शिव धनुष 'पिनाक' व कोदंड
              </span>
              <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-200 rounded-lg">
                ✓ विश्वामित्र का दिव्य धनुर्विद्या ज्ञान
              </span>
              <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-200 rounded-lg">
                ✓ पंचवटी वनवास एवं सीता हरण
              </span>
              <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-200 rounded-lg">
                ✓ रावण की स्वर्ण लंका का प्रथम वैभव
              </span>
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="bg-[#060a14] border border-stone-800 rounded-xl p-5 space-y-3.5 text-xs">
            <h4 className="font-semibold text-amber-300 uppercase tracking-wider font-cinzel border-b border-stone-800 pb-2">
              फिल्म तकनीकी विवरण
            </h4>

            <div className="flex justify-between py-1 border-b border-stone-800/60">
              <span className="text-stone-400 font-devanagari">निर्देशक:</span>
              <span className="text-stone-200 font-medium">नितेश तिवारी</span>
            </div>

            <div className="flex justify-between py-1 border-b border-stone-800/60">
              <span className="text-stone-400 font-devanagari">निर्माता:</span>
              <span className="text-stone-200 font-medium">नमित मल्होत्रा, यश</span>
            </div>

            <div className="flex justify-between py-1 border-b border-stone-800/60">
              <span className="text-stone-400 font-devanagari">प्रस्तुति:</span>
              <span className="text-amber-400 font-medium">AnK Creative Mind</span>
            </div>

            <div className="flex justify-between py-1 border-b border-stone-800/60">
              <span className="text-stone-400 font-devanagari">संगीत स्कोर:</span>
              <span className="text-stone-200 font-medium">Hans Zimmer, A.R. Rahman</span>
            </div>

            <div className="flex justify-between py-1 border-b border-stone-800/60">
              <span className="text-stone-400 font-devanagari">वीएफएक्स स्टूडियो:</span>
              <span className="text-stone-200 font-medium">DNEG (ऑस्कर विजेता)</span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-stone-400 font-devanagari">प्रारूप (Format):</span>
              <span className="text-amber-300 font-medium">IMAX 3D, Dolby Cinema</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
