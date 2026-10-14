import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Quote } from 'lucide-react';
import { experiencesData, ExperienceItem } from '../data/experience';
import { TiltCard } from './TiltCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 relative z-10">
      {/* Subtle Volcanic Horizon Warm Rim Glow at base */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#E07A43]/10 via-[#C8652D]/3 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header matching 04. EXPERIENCE Indicator */}
        <div className="max-w-3xl mb-16">
          <div className="section-tag mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] shadow-[0_0_6px_#E07A43]" />
            <span>04. EXPERIENCE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0] tracking-tight leading-tight">
            The Journey So Far.{' '}
            <span className="text-gradient-copper">
              Professional Record.
            </span>
          </h2>
          <p className="text-base text-[#A89F91] mt-3 font-sans leading-relaxed">
            Real-world software engineering, applied machine learning, and collaborative production delivery.
          </p>
        </div>

        {/* Timeline List matching Reference Image */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E07A43]/35 space-y-12">
          {experiencesData.map((exp: ExperienceItem) => (
            <div key={exp.id} className="relative">
              {/* Glowing Copper Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-[#E07A43] border-4 border-[#070605] shadow-[0_0_12px_#E07A43]" />

              <TiltCard className="copper-card rounded-3xl p-7 sm:p-9 border border-[#E07A43]/20 bg-[#120E0C]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono text-[#FFA25B] font-bold uppercase tracking-wider block mb-1">
                      {exp.type}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#FAF6F0]">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-[#E6DCD2]">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-[#A89F91] gap-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#E07A43]" />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E07A43]" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#A89F91] font-sans leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Deliverables Checklist with Copper Highlights */}
                <div className="space-y-2.5 mb-6">
                  {exp.responsibilities.map((deliv: string, i: number) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E6DCD2] font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#E07A43] shrink-0 mt-0.5 shadow-[0_0_6px_rgba(224,122,67,0.4)]" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E07A43]/15">
                  {exp.skills.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#18120F] text-[#E0A880] border border-[#E07A43]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Bottom Philosophical Quote matching Reference Panel 5 */}
        <div className="mt-14 p-5 rounded-2xl bg-[#140F0C] border-l-4 border-l-[#E07A43] border border-[#E07A43]/20 flex items-center gap-3">
          <Quote className="w-5 h-5 text-[#E07A43] shrink-0 opacity-80" />
          <p className="font-serif italic text-sm text-[#E6DCD2]">
            &ldquo;Every experience added a new layer to my journey.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
