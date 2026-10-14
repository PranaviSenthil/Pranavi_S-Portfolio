import React from 'react';
import { Trophy, Bug, Lightbulb, Users, Calendar, CheckCircle2, Award, Star, Infinity, Quote } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import { TiltCard } from './TiltCard';

export const Achievements: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    Hackathon: <Trophy className="w-5 h-5 text-[#E07A43]" />,
    Competition: <Star className="w-5 h-5 text-[#FFA25B]" />,
    Ideathon: <Lightbulb className="w-5 h-5 text-[#E07A43]" />,
    Leadership: <Users className="w-5 h-5 text-[#FFA25B]" />,
  };

  return (
    <section id="achievements" className="py-28 relative z-10">
      {/* Volcanic Horizon Warm Rim Glow */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#E07A43]/10 via-[#C8652D]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header matching 05. ACCOLADES Indicator */}
        <div className="max-w-3xl mb-16">
          <div className="section-tag mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] shadow-[0_0_6px_#E07A43]" />
            <span>05. ACCOLADES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0] tracking-tight leading-tight">
            Moments That Moved Me.{' '}
            <span className="text-gradient-copper">
              Podium Recognition.
            </span>
          </h2>
          <p className="text-base text-[#A89F91] mt-3 font-sans leading-relaxed">
            Moments where high-pressure problem solving, speed, and algorithmic rigor delivered standout podium results.
          </p>
        </div>

        {/* Accolade Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item) => (
            <TiltCard
              key={item.id}
              className={`copper-card rounded-3xl p-7 sm:p-9 border relative overflow-hidden flex flex-col justify-between bg-[#120E0C] ${
                item.position.includes('First') || item.position.includes('1st')
                  ? 'border-[#E07A43]/40 shadow-[0_8px_32px_rgba(224,122,67,0.15)] ring-1 ring-[#E07A43]/20'
                  : 'border-[#E07A43]/20'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#18120F] border border-[#E07A43]/30 flex items-center justify-center shadow-[0_0_15px_rgba(224,122,67,0.2)]">
                    {categoryIcons[item.category] || <Award className="w-5 h-5 text-[#E07A43]" />}
                  </div>

                  <span className="text-xs font-mono text-[#A89F91] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E07A43]" />
                    <span>{item.date}</span>
                  </span>
                </div>

                {/* Position & Title in Serif */}
                <div className="mb-3">
                  <span
                    className={`text-xs font-mono uppercase tracking-wider font-bold block mb-1 ${
                      item.position.includes('First') || item.position.includes('1st')
                        ? 'text-[#FFA25B]'
                        : 'text-[#E07A43]'
                    }`}
                  >
                    {item.position}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#FAF6F0] leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs font-mono text-[#A89F91] mb-4 pb-3 border-b border-[#E07A43]/15">
                  {item.event} &bull; {item.organization}
                </p>

                <p className="text-sm text-[#A89F91] leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E6DCD2]">
                      <CheckCircle2 className="w-4 h-4 text-[#E07A43] shrink-0 mt-0.5 shadow-[0_0_6px_rgba(224,122,67,0.4)]" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {item.projectAssociated && (
                <div className="pt-4 border-t border-[#E07A43]/15 text-xs text-[#A89F91] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#FFA25B]" />
                  <span>
                    Linked project:{' '}
                    <strong className="text-[#FAF6F0]">{item.projectAssociated}</strong>
                  </span>
                </div>
              )}
            </TiltCard>
          ))}
        </div>

        {/* More Milestones Counter Row matching Reference Image Panel 6 */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#120E0C] border border-[#E07A43]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <h4 className="font-serif text-lg font-bold text-[#FAF6F0] mb-6 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#E07A43]" />
            <span>More Milestones</span>
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#18120F] border border-[#E07A43]/20 text-center">
              <Trophy className="w-5 h-5 text-[#E07A43] mx-auto mb-2" />
              <span className="font-serif text-2xl font-bold text-[#FAF6F0] block">1</span>
              <span className="text-[11px] font-mono text-[#A89F91]">Hackathon Win</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#18120F] border border-[#E07A43]/20 text-center">
              <Award className="w-5 h-5 text-[#FFA25B] mx-auto mb-2" />
              <span className="font-serif text-2xl font-bold text-[#FAF6F0] block">3+</span>
              <span className="text-[11px] font-mono text-[#A89F91]">Certifications</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#18120F] border border-[#E07A43]/20 text-center">
              <Star className="w-5 h-5 text-[#E07A43] mx-auto mb-2" />
              <span className="font-serif text-2xl font-bold text-[#FAF6F0] block">2+</span>
              <span className="text-[11px] font-mono text-[#A89F91]">Competitions</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#18120F] border border-[#E07A43]/20 text-center">
              <Infinity className="w-5 h-5 text-[#FFA25B] mx-auto mb-2" />
              <span className="font-serif text-2xl font-bold text-[#FAF6F0] block">&infin;</span>
              <span className="text-[11px] font-mono text-[#A89F91]">Learning</span>
            </div>
          </div>
        </div>

        {/* Philosophical Quote Callout matching reference panel */}
        <div className="mt-8 p-5 rounded-2xl bg-[#140F0C] border-l-4 border-l-[#E07A43] border border-[#E07A43]/20 flex items-center gap-3">
          <Quote className="w-5 h-5 text-[#E07A43] shrink-0 opacity-80" />
          <p className="font-serif italic text-sm text-[#E6DCD2]">
            &ldquo;Grateful for every opportunity.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
