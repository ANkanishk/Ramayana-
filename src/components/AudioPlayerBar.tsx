import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Music,
  BookOpen,
  X,
  Volume1,
  Sparkles
} from 'lucide-react';
import { formatAudioTime } from '../utils/ramayana';
import { shankhSound } from '../utils/shankhAudio';

interface AudioPlayerBarProps {
  autoPlayTrigger?: boolean;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({ autoPlayTrigger }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(320); // ~5m 20s
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [isShankhPlaying, setIsShankhPlaying] = useState(false);
  const [autoPlayBlocked, setAutoPlayBlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [volume]);

  // Attempt auto play when trigger becomes true
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setAutoPlayBlocked(false);
        })
        .catch((err) => {
          console.warn('Autoplay prevented by browser security policy:', err);
          setAutoPlayBlocked(true);
        });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setAutoPlayBlocked(false);
        })
        .catch((err) => {
          console.warn('Playback error:', err);
        });
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    if (val === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume > 0 ? volume : 0.8;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const restartSong = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    audioRef.current.play();
    setIsPlaying(true);
  };

  const triggerShankh = async () => {
    if (isShankhPlaying) return;
    setIsShankhPlaying(true);
    await shankhSound.playShankh(4.2);
    setIsShankhPlaying(false);
  };

  return (
    <>
      {/* Hidden Audio element pointing to user's mp3 */}
      <audio
        ref={audioRef}
        src="/assets/aistudio/Jai_Jai_Ram__From_Ramayana__92b8bccc.mp3"
        preload="auto"
      />

      {/* Autoplay prompt alert if blocked by browser policy */}
      {autoPlayBlocked && !isPlaying && (
        <div className="fixed top-20 right-4 z-40 bg-gradient-to-r from-amber-900/90 to-amber-950/90 border border-amber-500/50 text-amber-200 px-4 py-3 rounded-lg shadow-2xl backdrop-blur-md max-w-sm flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Music className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
            <span>पवित्र भजन 'जय जय राम' चालू करने के लिए टैप करें</span>
          </div>
          <button
            onClick={togglePlay}
            className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded cursor-pointer shrink-0"
          >
            प्ले करें
          </button>
        </div>
      )}

      {/* Lyrics Modal / Drawer */}
      {showLyrics && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#0f1422] border border-amber-500/40 rounded-xl p-6 max-w-xl w-full text-stone-200 shadow-[0_0_50px_rgba(245,158,11,0.2)] max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/20 mb-4">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-amber-200 font-devanagari">
                  जय जय राम (रामायण भजन बोल)
                </h3>
              </div>
              <button
                onClick={() => setShowLyrics(false)}
                className="p-1 hover:bg-amber-500/20 rounded text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto space-y-4 text-center font-devanagari text-sm md:text-base leading-relaxed pr-2 text-amber-100/90">
              <p className="font-semibold text-amber-300 text-lg">
                जय जय राम जय जय राम, मेरी पूजा मेरे राम।<br />
                जय जय राम जय जय राम, जय जय राम।<br />
                मेरे राम जय जय राम, चारों धाम मेरे राम।<br />
                मेरे राम मेरे राम, जय जय राम॥
              </p>
              <div className="w-16 h-px bg-amber-500/30 mx-auto" />
              <p className="italic text-amber-200/80">
                अच्युतं केशवं कृष्ण दामोदरं,<br />
                राम नारायणं जानकी वल्लभम्।<br />
                राम नारायणं जानकी वल्लभम्॥
              </p>
              <div className="w-16 h-px bg-amber-500/30 mx-auto" />
              <p>
                हम पे इतनी कृपा बस विधाता रहे,<br />
                राम का नाम होंठों पे आता रहे।<br />
                जगत के अंधियारे हमको घेरे सारे,<br />
                हम जो मन में डरते हैं तब जपते हैं राम सीताराम॥
              </p>
              <div className="w-16 h-px bg-amber-500/30 mx-auto" />
              <p>
                हमारे तुम स्वामी, तुम हो अन्तर्यामी,<br />
                सबके सुख दुःख जानो, अपना मानो हे राम।<br />
                राम तुम्हारे बिना जग में हमारा कोई नहीं है रखवारा॥
              </p>
              <div className="w-16 h-px bg-amber-500/30 mx-auto" />
              <p>
                इस तन मन के जीवन के कारण हो तुम,<br />
                हर चिंता के दुःख के निवारण हो तुम।<br />
                जग का हंसना भी तुम, जग का रोना भी तुम,<br />
                तेरे चरणों में है सर झुका॥
              </p>
              <div className="w-16 h-px bg-amber-500/30 mx-auto" />
              <p className="font-semibold text-amber-300">
                तू ही तो प्रीत है, मेरे मन का तू ही संगीत है राम!<br />
                तू है जो चन्दन तो पानी हूँ मैं, राम तेरे दरस की दीवानी हूँ मैं॥
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#090d18]/95 border-t border-amber-600/30 backdrop-blur-lg px-4 py-2.5 shadow-[0_-5px_25px_rgba(0,0,0,0.7)] text-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          
          {/* Track Info & Shankh Button */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            <div className="flex items-center gap-3">
              {/* Spinning / Animated vinyl style icon */}
              <div
                className={`w-10 h-10 rounded-full border border-amber-400/50 bg-amber-950 flex items-center justify-center shrink-0 ${
                  isPlaying ? 'shadow-[0_0_15px_rgba(245,158,11,0.5)]' : ''
                }`}
              >
                <Music
                  className={`w-5 h-5 text-amber-400 ${
                    isPlaying ? 'animate-bounce' : ''
                  }`}
                />
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs md:text-sm font-semibold text-amber-200 font-devanagari">
                    जय जय राम (रामायण साउन्डट्रैक)
                  </span>
                  {isPlaying && (
                    <span className="flex items-center gap-0.5 h-3">
                      <span className="w-1 h-2 bg-amber-400 animate-pulse" />
                      <span className="w-1 h-3 bg-amber-300 animate-pulse delay-75" />
                      <span className="w-1 h-1.5 bg-amber-500 animate-pulse delay-150" />
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-stone-400">
                  हंस ज़िमर · ए.आर. रहमान संगीत रचना
                </p>
              </div>
            </div>

            {/* Quick Shankh Sound Button on mobile / small screen */}
            <button
              onClick={triggerShankh}
              disabled={isShankhPlaying}
              title="पवित्र शंखनाद करें"
              className="md:hidden px-2.5 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 text-xs rounded flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{isShankhPlaying ? 'शंखनाद...' : 'शंखध्वनि'}</span>
            </button>
          </div>

          {/* Controls & Progress bar */}
          <div className="flex flex-col items-center w-full max-w-xl gap-1">
            <div className="flex items-center gap-4">
              <button
                onClick={restartSong}
                title="प्रारंभ से बजाएं"
                className="text-stone-400 hover:text-amber-300 transition-colors p-1"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'संगीत रोकें' : 'संगीत चालू करें'}
                className="w-9 h-9 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black flex items-center justify-center font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
              </button>

              <button
                onClick={() => setShowLyrics(!showLyrics)}
                title="गीत के बोल (Lyrics) देखें"
                className={`text-xs px-2.5 py-1 rounded border transition-colors flex items-center gap-1 ${
                  showLyrics
                    ? 'bg-amber-500 text-black border-amber-400'
                    : 'text-amber-300 border-amber-500/30 hover:border-amber-400'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">बोल</span>
              </button>

              {/* Desktop Shankh button */}
              <button
                onClick={triggerShankh}
                disabled={isShankhPlaying}
                title="पवित्र शंखनाद की ध्वनि बजाएं"
                className="hidden md:flex px-3 py-1 bg-gradient-to-r from-amber-600/30 to-orange-600/30 hover:from-amber-500/40 hover:to-orange-500/40 border border-amber-500/40 text-amber-200 text-xs rounded items-center gap-1.5 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{isShankhPlaying ? 'शंखनाद गूंज रहा है...' : 'शंखनाद (Shankh)'}</span>
              </button>
            </div>

            {/* Time slider */}
            <div className="flex items-center gap-2 w-full text-[11px] text-stone-400">
              <span className="w-10 text-right">{formatAudioTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration || 320}
                step="0.5"
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <span className="w-10">{formatAudioTime(duration)}</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="hidden md:flex items-center gap-2 text-stone-300">
            <button onClick={toggleMute} className="hover:text-amber-400 transition-colors">
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-stone-500" />
              ) : volume < 0.5 ? (
                <Volume1 className="w-4 h-4 text-amber-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-amber-400" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

        </div>
      </div>
    </>
  );
};
