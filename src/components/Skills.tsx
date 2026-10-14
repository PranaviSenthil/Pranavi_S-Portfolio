import React, { useState } from 'react';
import { Cpu, Terminal, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { skillCategories, SkillCategory, SkillItem } from '../data/skills';
import { TiltCard } from './TiltCard';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    ...skillCategories.map((c: SkillCategory) => c.title),
  ];

  const filteredCategories =
    activeFilter === 'All'
      ? skillCategories
      : skillCategories.filter((cat: SkillCategory) => cat.title === activeFilter);

  const designAndOtherSkills = [
    'UI/UX Design',
    'Problem Solving',
    'Teamwork',
    'Creativity',
    'Communication',
    'System Architecture',
    'Agile Collaboration',
  ];

  return (
    <section id="skills" className="py-28 relative z-10">
      {/* Subtle Volcanic Horizon Warm Rim Glow */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#E07A43]/10 via-[#C8652D]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header matching 02. SKILLS Indicator */}
        <div className="max-w-3xl mb-14">
          <div className="section-tag mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] shadow-[0_0_6px_#E07A43]" />
            <span>02. SKILLS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0] tracking-tight leading-tight">
            Tools I Play With.{' '}
            <span className="text-gradient-copper">
              Technical Arsenal.
            </span>
          </h2>
          <p className="text-base text-[#A89F91] mt-3 font-sans leading-relaxed">
            Languages, frameworks, and intelligent tools I’m currently learning and using to build, design, and create robust systems.
          </p>
        </div>

        {/* Filter Pills matching reference aesthetic */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filterOptions.map((cat: string) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
                  isActive
                    ? 'btn-copper shadow-[0_0_18px_rgba(224,122,67,0.35)]'
                    : 'bg-[#140F0C] border border-[#E07A43]/20 text-[#A89F91] hover:text-[#FAF6F0] hover:border-[#E07A43]/50 hover:bg-[#1A130F]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group: SkillCategory) => (
            <TiltCard
              key={group.id}
              className="copper-card rounded-3xl p-7 border border-[#E07A43]/20 bg-[#120E0C] flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl font-bold text-[#FAF6F0]">
                    {group.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#FFA25B] font-bold px-2.5 py-0.5 rounded-full bg-[#1C1410] border border-[#E07A43]/30">
                    {group.skills.length} TOOLS
                  </span>
                </div>

                <p className="text-xs text-[#A89F91] mb-6 font-sans">
                  {group.description}
                </p>

                {/* Skill Nodes List */}
                <div className="space-y-3">
                  {group.skills.map((skill: SkillItem) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-[#16110E] border border-[#E07A43]/15 hover:border-[#E07A43]/45 hover:bg-[#1E1612] transition-all group/node"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-[#FAF6F0] group-hover/node:text-[#FFA25B] transition-colors font-mono">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${
                            skill.level === 'Comfortable With'
                              ? 'bg-[#E07A43]/20 text-[#FFA25B] border-[#E07A43]/35'
                              : skill.level === 'Working Knowledge'
                              ? 'bg-[#C8652D]/20 text-[#E0A880] border-[#C8652D]/35'
                              : 'bg-[#8B3A0F]/20 text-[#D89B75] border-[#8B3A0F]/35'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {skill.description && (
                        <p className="text-[11px] text-[#A89F91] font-sans truncate">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Design & Other Skills Section matching Panel 3 */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#120E0C] border border-[#E07A43]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h4 className="font-serif text-lg font-bold text-[#FAF6F0]">
              Design &amp; Other Skills
            </h4>
            <span className="text-xs font-mono text-[#E07A43]">
              INTERDISCIPLINARY COGNITION
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {designAndOtherSkills.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full bg-[#18120F] border border-[#E07A43]/25 text-[#E6DCD2] text-xs font-medium hover:border-[#E07A43]/60 hover:text-[#FFA25B] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom Tagline matching Reference Image Panel 3: Learn -> Build -> Grow */}
          <div className="flex items-center justify-center gap-3 pt-6 mt-6 border-t border-[#E07A43]/15 text-xs sm:text-sm font-mono text-[#A89F91]">
            <span className="text-[#FFA25B] font-bold">Learn</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E07A43]" />
            <span className="text-[#FAF6F0] font-bold">Build</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E07A43]" />
            <span className="text-[#E07A43] font-bold">Grow</span>
          </div>
        </div>
      </div>
    </section>
  );
};
