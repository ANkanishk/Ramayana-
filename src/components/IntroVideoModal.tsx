import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface IntroVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToStream: () => void;
}

export const IntroVideoModal: React.FC<IntroVideoModalProps> = ({
  isOpen,
  onClose,
  onNavigateToStream
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-[#090d18] border border-amber-500/40 rounded-2xl max-w-4xl w-full overflow-hidden shadow-[0_0_70px_rgba(220,38,38,0.3)] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-amber-500/20 flex items-center justify-between bg-gradient-to-r from-red-950/60 via-black to-[#090d18]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center font-black text-white text-xs">
              AnK
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-epic text-gold-gradient">
                AnK Creative Mind — 3D स्टूडियो इंट्रो
              </h3>
              <p className="text-[11px] text-stone-400 font-cinzel">
                OFFICIAL STUDIO INTRO ANIMATION
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <video
            src="/assets/aistudio/video_20261026_200916_2c2653a8.mp4"
            controls
            autoPlay
            className="w-full h-full object-contain"
          >
            आपका ब्राउज़र वीडियो टैग का समर्थन नहीं करता है।
          </video>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#060911] border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-stone-400 font-devanagari">
            AnK Creative Mind द्वारा विशेष 3D लोगो एनिमेशन एवं प्रस्तुति
          </p>

          <button
            onClick={() => {
              onClose();
              onNavigateToStream();
            }}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold rounded-lg flex items-center gap-1.5 cursor-pointer font-devanagari"
          >
            <span>मुख्य फिल्म स्ट्रीम पर जाएं</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
