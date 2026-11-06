import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Sparkles, ArrowRight, Play } from 'lucide-react';
import { shankhSound } from '../utils/shankhAudio';

interface OpeningSequenceProps {
  onComplete: () => void;
  onStartMusic: () => void;
}

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({ onComplete, onStartMusic }) => {
  const [bowTension, setBowTension] = useState(0);
  const [isShooting, setIsShooting] = useState(false);
  const [showShankhBanner, setShowShankhBanner] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Check URL query parameter ?autostart=1
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') {
      onComplete();
      return;
    }

    // Auto-draw bow tension animation
    const interval = setInterval(() => {
      setBowTension((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Golden particle burst canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
      life: number;
    }

    const particles: Particle[] = [];
    const colors = ['#F59E0B', '#FBBF24', '#D97706', '#EA580C', '#FEF08A'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -Math.random() * 1.5 - 0.3,
        radius: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.5;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (Math.sin(p.life * 0.05) * 0.4 + 0.6);
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleShootAndEnter = async () => {
    if (isShooting) return;
    setIsShooting(true);
    setShowShankhBanner(true);

    // Play shankh horn sound & trigger music
    shankhSound.playShankh(4.5);
    onStartMusic();

    // Release arrow animation transition
    setTimeout(() => {
      onComplete();
    }, 1800);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070d] text-white overflow-hidden transition-all duration-700 ${
        isShooting ? 'scale-105 opacity-0' : 'opacity-100'
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Radial spiritual halo */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-amber-600/10 via-orange-500/15 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl px-6 text-center flex flex-col items-center">
        {/* Studio Tag */}
        <div className="flex items-center gap-2 mb-3 text-xs tracking-[0.3em] uppercase text-amber-300 font-cinzel animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>AnK Creative Mind प्रस्तुत करता है</span>
          <Sparkles className="w-4 h-4 text-amber-400" />
        </div>

        {/* Epic Title */}
        <h1 className="text-4xl md:text-7xl font-bold font-epic text-gold-gradient tracking-wide mb-3 transition-transform duration-500 hover:scale-102">
          रामायण: द राइज
        </h1>

        <p className="text-sm md:text-lg text-amber-100/80 font-devanagari tracking-wider mb-6">
          रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः
        </p>

        {/* Animated Kodanda Bow & Arrow SVG */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 my-2 flex items-center justify-center">
          {/* Sun Yantra Wheel in background */}
          <div className="absolute inset-4 rounded-full border border-amber-500/20 border-dashed animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-10 rounded-full border border-amber-400/15" />

          {/* Kodanda Bow Representation */}
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full filter drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]"
          >
            {/* Bow Limbs */}
            <path
              d="M 60,40 Q 15,150 60,260"
              fill="none"
              stroke="url(#bowGoldGrad)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 60,40 Q 15,150 60,260"
              fill="none"
              stroke="#FEF08A"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Bow Ornaments */}
            <circle cx="60" cy="40" r="7" fill="#D97706" stroke="#FEF08A" strokeWidth="2" />
            <circle cx="60" cy="260" r="7" fill="#D97706" stroke="#FEF08A" strokeWidth="2" />
            <circle cx="37" cy="150" r="8" fill="#B45309" stroke="#FDE047" strokeWidth="2" />

            {/* Bowstring with dynamic pull tension */}
            <path
              d={`M 60,40 Q ${60 + (isShooting ? -20 : bowTension * 0.9)},150 60,260`}
              fill="none"
              stroke="#FEF08A"
              strokeWidth="2.5"
            />

            {/* Brahmastra / Golden Arrow */}
            <g
              className={`transition-all duration-700 ease-out ${
                isShooting ? 'translate-x-[600px] opacity-0' : 'translate-x-0'
              }`}
            >
              {/* Arrow Shaft */}
              <line
                x1={isShooting ? 50 : 60 + bowTension * 0.85}
                y1="150"
                x2={isShooting ? 250 : 220 + bowTension * 0.85}
                y2="150"
                stroke="url(#arrowFlame)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Arrow Head */}
              <polygon
                points={`${isShooting ? 250 : 220 + bowTension * 0.85},142 ${
                  isShooting ? 275 : 245 + bowTension * 0.85
                },150 ${isShooting ? 250 : 220 + bowTension * 0.85},158 ${
                  isShooting ? 245 : 215 + bowTension * 0.85
                },150`}
                fill="#F59E0B"
                stroke="#FFFBEB"
                strokeWidth="1.5"
              />

              {/* Fletching */}
              <path
                d={`M ${isShooting ? 55 : 65 + bowTension * 0.85},143 L ${
                  isShooting ? 45 : 55 + bowTension * 0.85
                },150 L ${isShooting ? 55 : 65 + bowTension * 0.85},157`}
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
              />
            </g>

            {/* Gradients */}
            <defs>
              <linearGradient id="bowGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="30%" stopColor="#F59E0B" />
                <stop offset="70%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#78350F" />
              </linearGradient>
              <linearGradient id="arrowFlame" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#FFFBEB" />
              </linearGradient>
            </defs>
          </svg>

          {/* Glowing flame aura behind arrow tip */}
          <div
            className="absolute w-12 h-12 rounded-full bg-amber-400/40 blur-md pointer-events-none transition-all duration-300"
            style={{
              left: `${Math.min(75, 45 + bowTension * 0.25)}%`,
              top: '46%'
            }}
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <button
            onClick={handleShootAndEnter}
            disabled={isShooting}
            className="px-8 py-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-black font-semibold rounded-lg shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all flex items-center gap-3 text-base cursor-pointer transform hover:scale-105 active:scale-95"
          >
            <Volume2 className="w-5 h-5" />
            <span>{isShooting ? 'शंखनाद एवं बाण प्रहार...' : 'शंखनाद करें एवं प्रवेश करें'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              onStartMusic();
              onComplete();
            }}
            className="px-6 py-3 border border-amber-500/40 hover:border-amber-400 text-amber-200 text-sm font-medium rounded-lg hover:bg-amber-500/10 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 text-amber-400" />
            <span>सीधा प्रवेश (Skip Intro)</span>
          </button>
        </div>

        {/* Shankh notice */}
        {showShankhBanner && (
          <p className="mt-4 text-xs text-amber-300 font-devanagari animate-pulse">
            ॐ शंखनाद गूंज रहा है... धर्म की जय हो!
          </p>
        )}

        {/* Subtle credits */}
        <div className="mt-8 text-xs text-stone-500 font-cinzel tracking-widest">
          DIRECTED BY NITESH TIWARI · PRODUCED BY NAMIT MALHOTRA & YASH
        </div>
      </div>
    </div>
  );
};
