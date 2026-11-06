import React from 'react';
import { Sparkles, ArrowUp, Film, Volume2 } from 'lucide-react';
import { shankhSound } from '../utils/shankhAudio';

interface FooterProps {
  onOpenIntroModal: () => void;
  onOpenBowModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenIntroModal, onOpenBowModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060b] border-t border-amber-600/30 text-stone-400 pt-16 pb-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Shanti Mantra Header */}
        <div className="text-center pb-12 border-b border-stone-800/80 mb-12">
          <p className="text-base sm:text-xl font-bold font-devanagari text-amber-200 tracking-wide mb-2">
            ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।<br />
            सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥
          </p>
          <p className="text-xs text-amber-400/80 font-devanagari">
            ॐ शान्तिः शान्तिः शान्तिः · धर्म की जय हो, अधर्म का नाश हो, प्राणियों में सद्भावना हो!
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Studio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center font-black text-white text-xs">
                AnK
              </div>
              <span className="text-lg font-bold font-epic text-gold-gradient">
                AnK Creative Mind
              </span>
            </div>
            <p className="text-xs text-stone-300 font-devanagari leading-relaxed max-w-md">
              भारतीय पौराणिक धरोहर, संस्कृति एवं अत्याधुनिक 3D सिनेमाई अनुभव का समर्पित मंच।
              'रामायण: द राइज' महाकाव्य फिल्म की विशेष आधिकारिक वेबसाइट।
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenIntroModal}
                className="px-3 py-1.5 bg-red-950/70 border border-red-500/40 text-red-200 text-xs rounded hover:bg-red-900/60 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Film className="w-3.5 h-3.5" />
                <span>3D इंट्रो वीडियो</span>
              </button>
              <button
                onClick={() => shankhSound.playShankh(4.0)}
                className="px-3 py-1.5 bg-amber-950/70 border border-amber-500/40 text-amber-200 text-xs rounded hover:bg-amber-900/60 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                <span>शंख ध्वनि</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-2 text-xs font-devanagari">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-cinzel mb-3">
              वेबसाइट अनुभाग
            </h4>
            <a href="#hero" className="block hover:text-amber-300 transition-colors">
              मुख्य पृष्ठ (Hero)
            </a>
            <a href="#stream" className="block hover:text-amber-300 transition-colors">
              फिल्म व टीज़र स्ट्रीम
            </a>
            <a href="#cast" className="block hover:text-amber-300 transition-colors">
              पात्र एवं कलाकार विवरण
            </a>
            <a href="#kaandas" className="block hover:text-amber-300 transition-colors">
              ६ महाकाव्य काण्ड
            </a>
            <a href="#production" className="block hover:text-amber-300 transition-colors">
              निर्माण एवं वीएफएक्स
            </a>
          </div>

          {/* Column 3: Legal & Credits */}
          <div className="space-y-2 text-xs font-devanagari">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-cinzel mb-3">
              सिनेमाई सहभागिता
            </h4>
            <p className="text-stone-300">प्राइम फोकस स्टूडियोज</p>
            <p className="text-stone-300">मॉन्स्टर माइंड क्रिएशन्स (यश)</p>
            <p className="text-stone-300">DNEG विजुअल इफेक्ट्स</p>
            <p className="text-stone-300">AnK Creative Mind</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-stone-500">
            © {new Date().getFullYear()} AnK Creative Mind · रामायण: द राइज (Ramayana: The Rise). सर्वाधिकार सुरक्षित।
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-stone-900 hover:bg-amber-500/20 text-stone-400 hover:text-amber-300 border border-stone-800 transition-all flex items-center gap-1.5 cursor-pointer font-devanagari"
          >
            <span>शीर्ष पर जाएं</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
