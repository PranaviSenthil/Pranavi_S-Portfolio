import React, { useEffect } from 'react';
import { X, ExternalLink, Trophy, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { Project } from '../data/projects';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#070605]/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Card in Luxury Black & Copper */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#110D0B] border border-[#E07A43]/30 p-6 sm:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.95)] z-10 my-8 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Soft Copper Ambient Glow behind modal */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#E07A43]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full border border-[#E07A43]/25 bg-[#18120F] text-[#A89F91] hover:text-[#FAF6F0] hover:border-[#E07A43]/60 transition-colors z-20 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#1C1410] border border-[#E07A43]/30 text-[#FFA25B] font-medium">
            {project.categoryGroup}
          </span>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#18120F] border border-[#E07A43]/20 text-[#E6DCD2]">
            Status: {project.currentStatus}
          </span>
          {project.achievement && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1E1610] border border-[#E07A43]/40 text-[#FFA25B] flex items-center gap-1.5 shadow-[0_0_12px_rgba(224,122,67,0.2)]">
              <Trophy className="w-3.5 h-3.5 text-[#E07A43]" />
              <span>{project.achievement}</span>
            </span>
          )}
        </div>

        {/* Title & Category in Serif */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF6F0] mb-2 tracking-tight">
          {project.title}
        </h2>
        <p className="text-xs font-mono text-[#FFA25B] font-semibold mb-6">
          {project.category}
        </p>

        {/* Full Overview */}
        <div className="space-y-6 text-sm text-[#A89F91] font-sans leading-relaxed border-t border-[#E07A43]/15 pt-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFA25B] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E07A43]" />
              <span>Project Overview</span>
            </h4>
            <p className="text-[#E6DCD2] text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Problem & Contribution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#16110E] border border-[#E07A43]/20">
              <h5 className="text-xs font-mono text-[#FFA25B] uppercase tracking-wider mb-2 font-bold">
                Problem Addressed
              </h5>
              <p className="text-xs text-[#A89F91] leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#16110E] border border-[#E07A43]/20">
              <h5 className="text-xs font-mono text-[#E07A43] uppercase tracking-wider mb-2 font-bold">
                My Core Contribution
              </h5>
              <p className="text-xs text-[#A89F91] leading-relaxed">
                {project.myContribution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFA25B] mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E07A43]" />
                <span>Engineered Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#16110E] border border-[#E07A43]/15 text-xs text-[#E6DCD2]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] mt-1.5 shrink-0 shadow-[0_0_6px_#E07A43]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="p-4 rounded-2xl bg-[#19130F] border border-[#E07A43]/30">
              <h5 className="text-xs font-mono text-[#FFA25B] uppercase tracking-wider mb-1.5 font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#E07A43]" />
                <span>Architecture &amp; Pipeline Notes</span>
              </h5>
              <p className="text-xs text-[#E6DCD2] leading-relaxed">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A89F91] mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-xl bg-[#18120F] border border-[#E07A43]/20 text-xs font-mono text-[#E6DCD2]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-6 mt-6 border-t border-[#E07A43]/15 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#18120F] hover:bg-[#221914] border border-[#E07A43]/25 text-[#FAF6F0] text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                <GithubIcon className="w-4 h-4 text-[#FFA25B]" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl btn-copper text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-[#8E8275] hover:text-[#FAF6F0] transition-colors cursor-pointer"
          >
            Close Window [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
