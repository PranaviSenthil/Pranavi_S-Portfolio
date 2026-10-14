import React from 'react';
import { Radio, Sparkles, Terminal, Code2, FolderGit2, Cpu, Wrench, Quote } from 'lucide-react';
import { currentlyBuildingData, CurrentlyBuildingItem } from '../data/currentlyBuilding';
import { TiltCard } from './TiltCard';

export const CurrentlyBuilding: React.FC = () => {
  const labTools = [
    { name: 'GitHub Repositories', icon: <FolderGit2 className="w-4 h-4 text-[#E07A43]" /> },
    { name: 'VS Code IDE', icon: <Code2 className="w-4 h-4 text-[#FFA25B]" /> },
    { name: 'PowerShell Terminal', icon: <Terminal className="w-4 h-4 text-[#E07A43]" /> },
    { name: 'Antigravity IDE', icon: <Sparkles className="w-4 h-4 text-[#FFA25B]" /> },
    { name: 'Local AI (Ollama + Qwen)', icon: <Cpu className="w-4 h-4 text-[#E07A43]" /> },
  ];

  return (
    <section id="building" className="py-28 relative z-10">
      {/* Volcanic Horizon Warm Rim Glow */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#E07A43]/10 via-[#C8652D]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header matching 07. LAB Indicator */}
        <div className="max-w-3xl mb-14">
          <div className="section-tag mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] shadow-[0_0_6px_#E07A43]" />
            <span>07. LAB</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0] tracking-tight leading-tight">
            Where I Experiment.{' '}
            <span className="text-gradient-copper">
              Active Research.
            </span>
          </h2>
          <p className="text-base text-[#A89F91] mt-3 font-sans leading-relaxed">
            My space to build, break, learn and explore. A window into what’s currently on my local workstation — experiments, papers, and prototypes.
          </p>
        </div>

        {/* Lab Primary Tools Row matching Reference Image Panel 8 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-12">
          {labTools.map((tool) => (
            <div
              key={tool.name}
              className="p-4 rounded-2xl bg-[#120E0C] border border-[#E07A43]/20 flex items-center gap-3 hover:border-[#E07A43]/50 transition-all shadow-sm"
            >
              <div className="p-2 rounded-xl bg-[#1C1410] border border-[#E07A43]/25">
                {tool.icon}
              </div>
              <span className="text-xs font-mono font-medium text-[#FAF6F0] truncate">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Featured Terminal Mockup matching Panel 8 */}
        <div className="mb-12 p-6 rounded-3xl bg-[#0B0806] border border-[#E07A43]/25 shadow-2xl relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E07A43]/15 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E07A43]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFA25B]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#8B3A0F]/80" />
              <span className="text-[#A89F91] ml-2 text-[11px]">powershell // pranavi-local</span>
            </div>
            <span className="text-[#E07A43] text-[10px]">C:\Users\prana\&gt;</span>
          </div>

          {/* Terminal Command Sequence */}
          <div className="space-y-2 font-mono text-xs sm:text-sm">
            <p className="text-[#FAF6F0]">
              <span className="text-[#E07A43]">&gt;</span> Build
            </p>
            <p className="text-[#FAF6F0]">
              <span className="text-[#FFA25B]">&gt;</span> Test
            </p>
            <p className="text-[#FAF6F0]">
              <span className="text-[#E07A43]">&gt;</span> Deploy
            </p>
            <p className="text-[#FAF6F0] flex items-center gap-1.5">
              <span className="text-[#FFA25B]">&gt;</span> Repeat
              <span className="inline-block w-2 h-4 bg-[#E07A43] animate-pulse ml-1" />
            </p>
          </div>
        </div>

        {/* Experiment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentlyBuildingData.map((item: CurrentlyBuildingItem) => (
            <TiltCard
              key={item.id}
              className="copper-card rounded-3xl p-7 sm:p-9 border border-[#E07A43]/20 bg-[#120E0C] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-[#FFA25B] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#1C1410] border border-[#E07A43]/30 text-[#FFA25B] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] animate-ping" />
                    <span>Active Sprint</span>
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#FAF6F0] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#A89F91] font-sans leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Focus Areas */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.techFocus.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl bg-[#18120F] border border-[#E07A43]/20 text-xs font-mono text-[#E6DCD2]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Philosophical Quote Callout matching reference panel 8 */}
        <div className="mt-14 p-5 rounded-2xl bg-[#140F0C] border-l-4 border-l-[#E07A43] border border-[#E07A43]/20 flex items-center gap-3">
          <Quote className="w-5 h-5 text-[#E07A43] shrink-0 opacity-80" />
          <p className="font-serif italic text-sm text-[#E6DCD2]">
            &ldquo;Small experiments. Big possibilities.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
