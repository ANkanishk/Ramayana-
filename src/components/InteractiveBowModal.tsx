import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Volume2, Target } from 'lucide-react';
import { shankhSound } from '../utils/shankhAudio';

interface InteractiveBowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveBowModal: React.FC<InteractiveBowModalProps> = ({ isOpen, onClose }) => {
  const [pullProgress, setPullProgress] = useState(40);
  const [isFired, setIsFired] = useState(false);
  const [fireCount, setFireCount] = useState(0);
  const [shlokaText, setShlokaText] = useState('ॐ रामाय नमः · कोदंड धनुष संधान');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const mantras = [
    'ॐ रामाय नमः · मर्यादा पुरुषोत्तम तेज',
    'रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः',
    'ब्रह्मास्त्राय विद्महे धनुर्धराय धीमहि',
    'जय श्री राम · धर्मो रक्षति रक्षितः',
    'अमोघ शर संधानम् · अधर्म का संहार'
  ];

  const handleShoot = async () => {
    if (isFired) return;
    setIsFired(true);
    setFireCount((prev) => prev + 1);

    // Pick a new mantra
    const nextMantra = mantras[(fireCount + 1) % mantras.length];
    setShlokaText(nextMantra);

    // Play shankh echo
    shankhSound.playShankh(3.5);

    // Reset after arrow fly
    setTimeout(() => {
      setIsFired(false);
    }, 1200);
  };

  // Sparkle burst canvas
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    const height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    interface Sparkle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }

    const sparks: Sparkle[] = [];
    for (let i = 0; i < 40; i++) {
      sparks.push({
        x: width * 0.5 + (Math.random() - 0.5) * 80,
        y: height * 0.5 + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 2 - 0.5,
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.8 + 0.2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      sparks.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.005;
        if (s.alpha <= 0) {
          s.x = width * 0.5 + (Math.random() - 0.5) * 60;
          s.y = height * 0.5 + (Math.random() - 0.5) * 60;
          s.alpha = Math.random() * 0.8 + 0.2;
        }

        ctx.fillStyle = '#F59E0B';
        ctx.globalAlpha = s.alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-[#0b101d] border border-amber-500/40 rounded-2xl max-w-xl w-full overflow-hidden shadow-[0_0_60px_rgba(245,158,11,0.3)] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-amber-500/20 flex items-center justify-between bg-gradient-to-r from-amber-950/40 to-black">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold font-epic text-gold-gradient">
              दिव्य कोदंड धनुष व ब्रह्मास्त्र संधान
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Bow Canvas Container */}
        <div className="relative p-6 flex flex-col items-center bg-[#070b14] overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

          {/* Shloka banner */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1 text-xs text-amber-200 font-devanagari mb-4 text-center">
            {shlokaText}
          </div>

          {/* SVG Bow & Arrow with interactive slider */}
          <div className="relative w-64 h-64 flex items-center justify-center my-2">
            <svg viewBox="0 0 300 300" className="w-full h-full filter drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              {/* Bow Limbs */}
              <path
                d="M 50,40 Q 10,150 50,260"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M 50,40 Q 10,150 50,260"
                fill="none"
                stroke="#FFFBEB"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Bowstring */}
              <path
                d={`M 50,40 Q ${50 + (isFired ? -15 : pullProgress * 0.9)},150 50,260`}
                fill="none"
                stroke="#FEF08A"
                strokeWidth="2.5"
              />

              {/* Arrow */}
              <g
                className={`transition-transform duration-500 ease-in ${
                  isFired ? 'translate-x-[500px] opacity-0' : 'translate-x-0 opacity-100'
                }`}
              >
                <line
                  x1={50 + (isFired ? 0 : pullProgress * 0.85)}
                  y1="150"
                  x2={220 + (isFired ? 0 : pullProgress * 0.85)}
                  y2="150"
                  stroke="#EA580C"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Arrow Head */}
                <polygon
                  points={`${220 + (isFired ? 0 : pullProgress * 0.85)},143 ${
                    245 + (isFired ? 0 : pullProgress * 0.85
                  )},150 ${220 + (isFired ? 0 : pullProgress * 0.85)},157`}
                  fill="#F59E0B"
                />
              </g>
            </svg>
          </div>

          {/* Pull string slider */}
          <div className="w-full max-w-xs space-y-1 mt-2 text-center">
            <div className="flex justify-between text-xs font-devanagari text-stone-400">
              <span>धनुष की प्रत्यंचा खींचें:</span>
              <span className="text-amber-300 font-bold">{pullProgress}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="95"
              value={pullProgress}
              disabled={isFired}
              onChange={(e) => setPullProgress(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Action Trigger */}
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={handleShoot}
              disabled={isFired}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-black font-bold rounded-xl shadow-lg shadow-amber-500/30 transition-all flex items-center gap-2 text-sm cursor-pointer"
            >
              <Target className="w-4 h-4" />
              <span>{isFired ? 'बाण छूट चुका है!' : 'बाण छोड़ें (Shoot Arrow)'}</span>
            </button>

            <button
              onClick={() => shankhSound.playShankh(4.0)}
              className="px-4 py-3 border border-amber-500/40 text-amber-200 rounded-xl hover:bg-amber-500/10 text-sm flex items-center gap-2 cursor-pointer"
            >
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span>शंख ध्वनि</span>
            </button>
          </div>

          {fireCount > 0 && (
            <p className="text-[11px] text-amber-400/80 font-devanagari mt-3">
              प्रहार संख्या: {fireCount} · धर्म का तेज प्रकाशित हुआ!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
