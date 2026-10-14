import React from 'react';
import { ArrowDown, FileText, Trophy, Cpu, Code2, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/personal';
import { NeuralPlexus3D } from './NeuralPlexus3D';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 sm:pt-36 pb-20 flex items-center justify-center overflow-hidden z-10"
    >
      {/* Cinematic Volcanic Horizon Warm Rim Light at bottom of Hero matching reference */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#E07A43]/15 via-[#C8652D]/5 to-transparent pointer-events-none" />

      {/* FULL-BLEED 3D NEURAL CONSTELLATION - FLOATING FREELY WITHOUT ANY BOX */}
      {/* Spans the entire hero section with smooth left-fade mask so text on the left is in pristine dark space */}
      <div className="absolute inset-0 w-full h-full z-10 overflow-hidden pointer-events-auto [mask-image:linear-gradient(to_right,transparent_0%,transparent_38%,black_52%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_38%,black_52%,black_100%)]">
        <NeuralPlexus3D />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-20 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-14rem)]">
          {/* Left Column: Headline & Intro Content (7 cols) - Interactive & Protected */}
          <div className="lg:col-span-7 flex flex-col justify-center pointer-events-auto relative z-20">
            {/* Soft dark backing ensuring 100% crystal-clear typography contrast */}
            <div className="absolute -inset-x-8 -inset-y-12 bg-gradient-to-r from-[#070605] via-[#070605]/95 via-70% to-transparent pointer-events-none -z-10 blur-xl" />

            {/* Small Salutation & Subtitle matching Reference image */}
            <div className="mb-2">
              <span className="text-sm font-sans text-[#A89F91] tracking-wide block mb-1">
                Hi, I’m
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#FAF6F0] tracking-tight leading-none mb-3">
                {personalData.name.toUpperCase()}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-[#FFA25B] mb-5 tracking-wide">
                <span>Computer Science &amp; Design Engineering</span>
                <span className="text-[#A89F91]">&bull;</span>
                <span className="text-[#A89F91]">SKCET | III CSD</span>
              </div>
            </div>

            {/* Main Statement in High-Contrast Editorial Serif */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FAF6F0] tracking-tight leading-[1.25] mb-5">
              Turning complex algorithms into{' '}
              <span className="text-gradient-copper">
                tangible software
              </span>{' '}
              that impacts people.
            </h2>

            {/* Bio text */}
            <p className="text-sm sm:text-base text-[#A89F91] font-sans leading-relaxed max-w-2xl mb-8">
              I’m <strong className="text-[#FAF6F0] font-semibold">{personalData.name}</strong>, a developer and builder bridging computer vision, speech intelligence, and full-stack software. From 30-hour hackathon-winning architectures to industrial telemetry systems, I build fast, test rigorously, and build for impact.
            </p>

            {/* Action Buttons matching reference image pill design */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3.5 rounded-full btn-copper font-semibold text-sm flex items-center gap-2 active:scale-95 cursor-pointer"
                id="hero-explore-btn"
              >
                <span>Explore Interactive Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce text-white" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-full btn-copper-outline font-semibold text-sm flex items-center gap-2 active:scale-95 cursor-pointer"
                id="hero-resume-btn"
              >
                <FileText className="w-4 h-4 text-[#E07A43]" />
                <span>View Resume</span>
              </button>

              {/* Social links */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#140F0C] border border-[#E07A43]/25 text-[#A89F91] hover:text-[#FAF6F0] hover:border-[#E07A43]/60 hover:bg-[#1F1713] transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#140F0C] border border-[#E07A43]/25 text-[#A89F91] hover:text-[#FFA25B] hover:border-[#E07A43]/60 hover:bg-[#1F1713] transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics & Highlights Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E07A43]/15 max-w-xl">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#E07A43] mb-1">
                  <Trophy className="w-4 h-4" />
                  <span className="font-serif font-bold text-xl text-[#FAF6F0]">1st Prize</span>
                </div>
                <span className="text-xs text-[#A89F91] font-sans">Kongu 30-Hr Hackathon</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#FFA25B] mb-1">
                  <Cpu className="w-4 h-4" />
                  <span className="font-serif font-bold text-xl text-[#FAF6F0]">9+ Systems</span>
                </div>
                <span className="text-xs text-[#A89F91] font-sans">CV, Speech &amp; Full-Stack</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#E07A43] mb-1">
                  <Code2 className="w-4 h-4" />
                  <span className="font-serif font-bold text-xl text-[#FAF6F0]">2028</span>
                </div>
                <span className="text-xs text-[#A89F91] font-sans">SKCET Graduation</span>
              </div>
            </div>

            {/* Bottom Accent: Keywords & Scroll to explore indicator matching reference */}
            <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#E07A43]/10 max-w-xl text-[11px] font-mono text-[#8E8275]">
              <div className="flex items-center gap-3">
                <span className="text-[#FFA25B]">Build</span>
                <span>/</span>
                <span className="text-[#FAF6F0]">Design</span>
                <span>/</span>
                <span className="text-[#E07A43]">Code</span>
                <span>/</span>
                <span className="text-[#FFA25B]">Create</span>
              </div>

              <div className="flex items-center gap-2 text-[#A89F91]">
                <span>SCROLL TO EXPLORE</span>
                <ArrowDown className="w-3 h-3 text-[#E07A43] animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Column: Open spatial area where the 3D neural constellation shines through freely */}
          <div className="lg:col-span-5 hidden lg:block pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
