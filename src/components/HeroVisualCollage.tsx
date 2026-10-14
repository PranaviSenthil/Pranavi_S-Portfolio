import React from 'react';
import { motion } from 'framer-motion';
import { Award, Camera, Mic, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/personal';

export const HeroVisualCollage: React.FC = () => {
  return (
    <div className="relative w-full max-w-[460px] mx-auto select-none py-6 sm:py-8">
      {/* Background soft ambient halo */}
      <div className="absolute inset-4 bg-gradient-to-tr from-[#D95D39]/8 via-[#EDE7DF] to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Layer 1: Background Foundation Sketchbook Card (Rotated slightly) */}
      <motion.div
        initial={{ opacity: 0, rotate: -4, y: 15 }}
        animate={{ opacity: 1, rotate: -3, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="paper-card rounded-2xl p-5 sm:p-6 bg-[#FDFCFB] border border-[#E7E3DC] shadow-paper"
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE6] mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D95D39]" />
            <span className="text-xs font-semibold text-[#121316]">Project 01 &bull; Perimeter Security</span>
          </div>
          <span className="text-[11px] font-serif italic text-[#D95D39]">
            Kongu 30-Hr Hackathon Winner
          </span>
        </div>

        {/* Visual representation of the AI Video Analytics */}
        <div className="relative h-32 rounded-xl bg-[#F4F0EA] border border-[#E7E3DC] overflow-hidden flex flex-col justify-between p-3.5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium text-[#5A606D] bg-white px-2 py-0.5 rounded shadow-xs">
              <Camera className="w-3 h-3 text-[#D95D39]" />
              <span>LIVE FEED &bull; CAM 04</span>
            </span>
            <span className="text-[10px] font-serif italic text-[#757C8C]">
              Boundary analysis
            </span>
          </div>

          {/* Simulated bounding box */}
          <div className="mx-auto my-auto w-3/4 h-12 border-2 border-dashed border-[#D95D39]/70 rounded-lg flex items-center justify-between px-3 bg-[#D95D39]/5">
            <span className="text-[10px] font-mono text-[#D95D39] font-bold">
              BOUNDARY_ZONE [VERIFIED]
            </span>
            <span className="text-[10px] font-mono text-[#121316] bg-white px-1.5 py-0.5 rounded shadow-xs">
              CONF: 94.2%
            </span>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#757C8C]">
            <span>COV: 1080P &bull; 30 FPS</span>
            <span>EVENT: LOGGED</span>
          </div>
        </div>

        <div className="mt-3.5 flex items-center justify-between text-xs text-[#5A606D]">
          <span>Python &bull; OpenCV &bull; Stream Processing</span>
          <span className="font-serif italic text-[#121316]">March 2026</span>
        </div>
      </motion.div>

      {/* Layer 2: Foreground Layered Card (Sana AI Voice preview, offset and rotated right) */}
      <motion.div
        initial={{ opacity: 0, rotate: 3, y: 25 }}
        animate={{ opacity: 1, rotate: 2, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="paper-card rounded-2xl p-4 sm:p-5 bg-white border border-[#E7E3DC] shadow-paper-hover -mt-10 sm:-mt-12 ml-6 sm:ml-12 relative z-10"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] border border-[#E7E3DC] flex items-center justify-center">
              <Mic className="w-3.5 h-3.5 text-[#D95D39]" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#121316] block">Sana AI</span>
              <span className="text-[10px] text-[#757C8C]">Voice &amp; reminder workflows</span>
            </div>
          </div>
          <span className="text-[10px] font-medium text-[#2A2D35] bg-[#F4F0EA] px-2 py-0.5 rounded-full">
            In Progress
          </span>
        </div>

        {/* Dialogue Bubble */}
        <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7E3DC] text-xs text-[#3D414B] mb-2 font-sans">
          &ldquo;Remind me to check the machine diagnostic logs at 4:00 PM.&rdquo;
        </div>

        {/* Audio Waveform bar representation */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1">
            {[45, 80, 30, 95, 60, 100, 50, 75, 40, 90, 55, 30].map((val, i) => (
              <span
                key={i}
                style={{ height: `${val * 0.2}px` }}
                className="w-1 bg-[#D95D39]/80 rounded-full"
              />
            ))}
          </div>
          <span className="text-[10px] font-serif italic text-[#757C8C]">
            Speech-to-text inference
          </span>
        </div>
      </motion.div>

      {/* Layer 3: Personal Monogram Seal & Note Tag (Organic badge) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute -bottom-2 -left-2 sm:left-0 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#121316] text-[#FAF8F5] shadow-lg"
      >
        <div className="w-6 h-6 rounded-full bg-[#D95D39] text-[#FAF8F5] flex items-center justify-center font-serif text-xs font-bold">
          PS
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-medium leading-tight">Sri Krishna College of Engg</span>
          <span className="text-[9px] text-[#949BAA]">B.Tech CS &amp; Design &bull; 2028</span>
        </div>
      </motion.div>

      {/* Handwritten-style sticky note */}
      <motion.div
        initial={{ opacity: 0, rotate: 6 }}
        animate={{ opacity: 1, rotate: 5 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="absolute -top-3 -right-2 sm:right-2 z-20 px-3 py-1.5 rounded-lg bg-[#FEF9E7] border border-[#F1E5BC] shadow-xs text-[11px] font-serif italic text-[#63511D]"
      >
        &ldquo;Building, testing, shipping.&rdquo;
      </motion.div>
    </div>
  );
};
