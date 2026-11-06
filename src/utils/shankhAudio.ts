/**
 * Authentic Conch Shell (शंख ध्वनि - Shankha Dhwani) Synthesizer using Web Audio API
 * Generates natural horn harmonics, breath pressure curve, acoustic chamber resonances,
 * and subtle lip vibrato.
 */

class ShankhPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;

  private initContext(): AudioContext {
    if (!this.ctx || this.ctx.state === 'closed') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public playShankh(durationSeconds = 4.2): Promise<void> {
    return new Promise((resolve) => {
      try {
        const ctx = this.initContext();
        const now = ctx.currentTime;

        // Master gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, now);
        // Swell up like human blowing breath into conch
        masterGain.gain.exponentialRampToValueAtTime(0.7, now + 0.8);
        masterGain.gain.setValueAtTime(0.7, now + durationSeconds - 1.0);
        masterGain.gain.exponentialRampToValueAtTime(0.001, now + durationSeconds);

        // Conch fundamental frequency (~220Hz - 235Hz, Bb3 range)
        const fundamentalFreq = 226;

        // Vibrato LFO (natural human lip fluctuation 4.5Hz)
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(4.6, now);
        lfoGain.gain.setValueAtTime(4.5, now);
        lfo.connect(lfoGain);

        // Acoustic bandpass filter simulating conical spiral shell resonance
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(650, now);
        filter.Q.setValueAtTime(2.8, now);

        // Create 4 harmonic partials representing brass/conch overtone series
        // Fundamental, 2nd harmonic, 3rd harmonic, 4th harmonic
        const harmonics = [
          { mult: 1, gain: 0.55, type: 'sawtooth' as OscillatorType },
          { mult: 2, gain: 0.35, type: 'sine' as OscillatorType },
          { mult: 3, gain: 0.22, type: 'triangle' as OscillatorType },
          { mult: 4, gain: 0.12, type: 'sine' as OscillatorType },
        ];

        harmonics.forEach(({ mult, gain: harmGainVal, type }) => {
          const osc = ctx.createOscillator();
          const harmGain = ctx.createGain();

          osc.type = type;
          // Slight pitch glide upwards at start (breath attack)
          osc.frequency.setValueAtTime(fundamentalFreq * mult * 0.96, now);
          osc.frequency.exponentialRampToValueAtTime(fundamentalFreq * mult, now + 0.5);

          lfoGain.connect(osc.frequency);

          harmGain.gain.setValueAtTime(harmGainVal, now);
          osc.connect(harmGain);
          harmGain.connect(filter);

          osc.start(now);
          osc.stop(now + durationSeconds);
        });

        lfo.start(now);
        lfo.stop(now + durationSeconds);

        filter.connect(masterGain);
        masterGain.connect(ctx.destination);

        this.isPlaying = true;
        setTimeout(() => {
          this.isPlaying = false;
          resolve();
        }, durationSeconds * 1000);
      } catch (err) {
        console.warn('AudioContext playback error or blocked:', err);
        resolve();
      }
    });
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const shankhSound = new ShankhPlayer();
