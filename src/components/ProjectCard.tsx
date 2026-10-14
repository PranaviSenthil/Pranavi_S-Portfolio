import React, { useState } from 'react';
import {
  ExternalLink,
  ArrowRight,
  ShieldAlert,
  Mic,
  Activity,
  RotateCcw,
  Sparkles,
  Camera,
  Volume2,
} from 'lucide-react';
import { Project } from '../data/projects';
import { TiltCard } from './TiltCard';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpenModal,
}) => {
  const [perimeterBreachTriggered, setPerimeterBreachTriggered] = useState(false);
  const [sanaVoicePlaying, setSanaVoicePlaying] = useState(false);
  const [telemetryAnomalyTriggered, setTelemetryAnomalyTriggered] = useState(false);

  const paddedIndex = String(index + 1).padStart(2, '0');

  // Interactive In-Card Live Simulators in Black & Copper Aesthetic
  const renderInteractivePreview = () => {
    // 1. Perimeter Security Interactive Computer Vision Simulator
    if (project.id === 'video-analytics-perimeter-security') {
      return (
        <div className="relative rounded-2xl bg-[#090706] border border-[#E07A43]/25 p-4 mb-5 overflow-hidden group/sim shadow-inner">
          {/* Top Camera Header */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#A89F91] pb-2.5 mb-2.5 border-b border-[#E07A43]/15">
            <div className="flex items-center gap-1.5 text-[#FFA25B]">
              <Camera className="w-3.5 h-3.5 text-[#E07A43]" />
              <span>CAM_04 // LIVE SURVEILLANCE FEED</span>
            </div>
            <span className="flex items-center gap-1 text-[#E07A43]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] animate-ping" />
              <span>30 FPS</span>
            </span>
          </div>

          {/* Simulated Video Stream Area */}
          <div className="relative h-32 bg-[#0E0A08] rounded-xl border border-[#E07A43]/15 flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(#E07A43 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />

            {/* Boundary Zone line */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-16 border-2 border-dashed border-[#E07A43]/50 rounded-lg flex items-center justify-center">
              <span className="text-[9px] font-mono text-[#FFA25B] font-semibold tracking-widest uppercase">
                RESTRICTED_PERIMETER_ZONE
              </span>
            </div>

            {/* Simulated Target & Bounding Box */}
            <div
              className={`absolute transition-all duration-700 ${
                perimeterBreachTriggered
                  ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110'
                  : 'top-3 left-6 scale-90'
              }`}
            >
              <div
                className={`p-1.5 rounded border-2 transition-colors duration-300 flex flex-col items-center ${
                  perimeterBreachTriggered
                    ? 'border-[#FF4444] bg-[#FF4444]/20 shadow-[0_0_15px_rgba(255,68,68,0.5)] animate-pulse'
                    : 'border-[#E07A43] bg-[#E07A43]/15'
                }`}
              >
                <span className="text-[8px] font-mono font-bold text-white uppercase">
                  {perimeterBreachTriggered ? 'BREACH DETECTED: 98.4%' : 'MONITORING'}
                </span>
                <span className="text-[7px] font-mono text-[#E6DCD2]">
                  {perimeterBreachTriggered ? 'COORD [X:412, Y:208]' : 'ID: TARGET_01'}
                </span>
              </div>
            </div>
          </div>

          {/* Simulator Controls */}
          <div className="flex items-center justify-between pt-3 text-xs">
            <span className="text-[10px] text-[#A89F91] font-mono">
              STATUS:{' '}
              {perimeterBreachTriggered ? (
                <strong className="text-[#FF4444]">ALARM TRIGGERED</strong>
              ) : (
                <span className="text-[#FFA25B]">ZONE SECURE</span>
              )}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setPerimeterBreachTriggered(!perimeterBreachTriggered);
              }}
              className="px-3 py-1 rounded-lg btn-copper text-white text-[11px] font-mono flex items-center gap-1.5 transition-all active:scale-95 shadow-sm cursor-pointer"
            >
              <ShieldAlert className="w-3 h-3 text-white" />
              <span>{perimeterBreachTriggered ? 'Reset Zone' : 'Simulate Intrusion'}</span>
            </button>
          </div>
        </div>
      );
    }

    // 2. Sana AI Interactive Speech Equalizer & Prompt Simulator
    if (project.id === 'sana-ai') {
      return (
        <div className="relative rounded-2xl bg-[#090706] border border-[#E07A43]/25 p-4 mb-5 overflow-hidden shadow-inner">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#A89F91] pb-2.5 mb-2.5 border-b border-[#E07A43]/15">
            <div className="flex items-center gap-1.5 text-[#FFA25B]">
              <Mic className="w-3.5 h-3.5 text-[#E07A43]" />
              <span>SPEECH SYNTHESIS ENGINE</span>
            </div>
            <span className="text-[#A89F91]">VOICE LOOP</span>
          </div>

          {/* Interactive Equalizer Waves */}
          <div className="h-20 bg-[#0E0A08] rounded-xl border border-[#E07A43]/15 p-3 flex flex-col justify-between">
            <div className="flex items-center justify-center gap-1.5 h-8">
              {[40, 75, 100, 60, 90, 45, 80, 95, 50, 70, 85, 60].map((h, i) => (
                <span
                  key={i}
                  style={{
                    height: sanaVoicePlaying ? `${h}%` : '20%',
                    transition: 'height 0.2s ease',
                  }}
                  className={`w-1.5 rounded-full ${
                    sanaVoicePlaying
                      ? 'bg-gradient-to-t from-[#C8652D] via-[#E07A43] to-[#FFA25B] animate-pulse shadow-[0_0_8px_#E07A43]'
                      : 'bg-[#2A201A]'
                  }`}
                />
              ))}
            </div>

            <p className="text-[10px] font-mono text-[#E6DCD2] text-center truncate">
              {sanaVoicePlaying
                ? '“Context verified: Audit scheduled for 16:00 IST.”'
                : 'Click play to simulate conversational inference'}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between pt-3 text-xs">
            <span className="text-[10px] text-[#A89F91] font-mono">
              STATE: {sanaVoicePlaying ? 'AUDIO_SYNTHESIS' : 'STANDBY'}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSanaVoicePlaying(!sanaVoicePlaying);
              }}
              className="px-3 py-1 rounded-lg btn-copper text-white text-[11px] font-mono flex items-center gap-1.5 transition-all active:scale-95 shadow-sm cursor-pointer"
            >
              <Volume2 className="w-3 h-3 text-white" />
              <span>{sanaVoicePlaying ? 'Pause Audio' : 'Play Voice Query'}</span>
            </button>
          </div>
        </div>
      );
    }

    // 3. Bearing Fault Detection Interactive Vibration Telemetry
    if (project.id === 'industrial-fault-monitoring' || project.id === 'bearing-fault-detection') {
      return (
        <div className="relative rounded-2xl bg-[#090706] border border-[#E07A43]/25 p-4 mb-5 overflow-hidden shadow-inner">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#A89F91] pb-2.5 mb-2.5 border-b border-[#E07A43]/15">
            <div className="flex items-center gap-1.5 text-[#FFA25B]">
              <Activity className="w-3.5 h-3.5 text-[#E07A43]" />
              <span>VIBRATION SENSOR TELEMETRY</span>
            </div>
            <span className="text-[#A89F91]">12,000 Hz</span>
          </div>

          <div className="h-20 bg-[#0E0A08] rounded-xl border border-[#E07A43]/15 p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-[#A89F91]">ACCELERATION:</span>
              <span
                className={`font-bold ${
                  telemetryAnomalyTriggered ? 'text-[#FF4444] animate-pulse' : 'text-[#FFA25B]'
                }`}
              >
                {telemetryAnomalyTriggered ? '3.82g [PEAK FAULT]' : '0.14g [NOMINAL]'}
              </span>
            </div>

            {/* Simulated Telemetry Bar */}
            <div className="w-full bg-[#1C1511] rounded-full h-2.5 overflow-hidden border border-[#E07A43]/15">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  telemetryAnomalyTriggered
                    ? 'w-[94%] bg-gradient-to-r from-[#E07A43] to-[#FF4444] shadow-[0_0_10px_#FF4444]'
                    : 'w-[18%] bg-gradient-to-r from-[#C8652D] to-[#E07A43]'
                }`}
              />
            </div>

            <span className="text-[9px] font-mono text-[#A89F91]">
              {telemetryAnomalyTriggered
                ? 'CLASSIFIER: Outer Race Defect Confirmed'
                : 'CLASSIFIER: Baseline Harmonic State'}
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 text-xs">
            <span className="text-[10px] text-[#A89F91] font-mono">
              DIAGNOSTIC: {telemetryAnomalyTriggered ? 'ALERT' : 'OK'}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setTelemetryAnomalyTriggered(!telemetryAnomalyTriggered);
              }}
              className="px-3 py-1 rounded-lg bg-[#18120F] hover:bg-[#251A14] text-[#FAF6F0] text-[11px] font-mono flex items-center gap-1.5 transition-all active:scale-95 border border-[#E07A43]/30 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3 text-[#E07A43]" />
              <span>{telemetryAnomalyTriggered ? 'Clear Fault' : 'Induce Anomaly'}</span>
            </button>
          </div>
        </div>
      );
    }

    // Default visual header in Black & Copper
    return (
      <div className="relative h-28 rounded-2xl bg-gradient-to-br from-[#18120F] via-[#120E0C] to-[#0D0907] border border-[#E07A43]/20 p-4 mb-5 flex flex-col justify-between overflow-hidden shadow-inner">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-[#FFA25B] font-semibold">{project.category}</span>
          <span className="text-xs text-[#8E8275] font-mono">ENGINEERED</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E07A43]" />
          <span className="text-xs text-[#A89F91] font-sans truncate">{project.technologies.slice(0, 3).join(' • ')}</span>
        </div>
      </div>
    );
  };

  return (
    <TiltCard
      className="copper-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer group bg-[#120E0C] border border-[#E07A43]/20"
      onClick={() => onOpenModal(project)}
    >
      <div>
        {/* Top Header: Index & Category */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xl font-bold text-[#E07A43]">
              {paddedIndex}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43]/40" />
            <span className="text-xs font-mono text-[#A89F91] uppercase tracking-wider">
              {project.categoryGroup}
            </span>
          </div>

          <span
            className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
              project.currentStatus === 'Completed'
                ? 'bg-[#E07A43]/15 border-[#E07A43]/40 text-[#FFA25B] font-medium'
                : project.currentStatus === 'Prototype'
                ? 'bg-[#C8652D]/15 border-[#C8652D]/40 text-[#E0A880] font-medium'
                : 'bg-[#8B3A0F]/15 border-[#8B3A0F]/40 text-[#D89B75] font-medium'
            }`}
          >
            {project.currentStatus}
          </span>
        </div>

        {/* Hackathon Ribbon if applicable */}
        {project.achievement && (
          <div className="mb-4 px-3 py-1.5 rounded-xl bg-[#1C140F] border border-[#E07A43]/35 flex items-center gap-2 text-xs text-[#FFA25B]">
            <span>🏆</span>
            <span className="font-semibold truncate">{project.achievement}</span>
          </div>
        )}

        {/* Title in Serif */}
        <h3 className="font-serif text-2xl font-bold text-[#FAF6F0] mb-2.5 group-hover:text-[#FFA25B] transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#A89F91] font-sans leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Interactive In-Card Simulator Area */}
        {renderInteractivePreview()}

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#18120F] text-[#E6DCD2] border border-[#E07A43]/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Action Links */}
      <div className="pt-4 border-t border-[#E07A43]/15 flex items-center justify-between text-xs">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(project);
          }}
          className="inline-flex items-center gap-1.5 font-semibold text-[#FFA25B] hover:text-white transition-colors group/btn cursor-pointer"
        >
          <span>Inspect Architecture</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#E07A43]" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-xl border border-[#E07A43]/25 bg-[#16110E] text-[#A89F91] hover:text-[#FAF6F0] hover:border-[#E07A43]/60 hover:bg-[#1E1612] transition-all"
              title="GitHub Source"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-xl border border-[#E07A43]/25 bg-[#16110E] text-[#A89F91] hover:text-[#FFA25B] hover:border-[#E07A43]/60 hover:bg-[#1E1612] transition-all"
              title="Live Demo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </TiltCard>
  );
};
