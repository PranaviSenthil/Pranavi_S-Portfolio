import React from 'react';
import { GraduationCap, Award, Compass, Sparkles, Users, Code, Lightbulb, MapPin, Calendar, Quote } from 'lucide-react';
import { personalData } from '../data/personal';
import { TiltCard } from './TiltCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 relative z-10">
      {/* Subtle Volcanic Horizon Warm Rim Glow at section base matching reference */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#E07A43]/10 via-[#C8652D]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header with 01. ABOUT Indicator matching Reference */}
        <div className="max-w-3xl mb-16">
          <div className="section-tag mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] shadow-[0_0_6px_#E07A43]" />
            <span>01. ABOUT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0] tracking-tight leading-tight">
            Curious about complexity.{' '}
            <span className="text-gradient-copper">
              Driven by real-world utility.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A89F91] mt-4 leading-relaxed font-sans">
            I study how software thinks, perceives, and communicates — and how thoughtful engineering turns raw model weights into intuitive products.
          </p>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <TiltCard className="copper-card rounded-3xl p-7 sm:p-9 border border-[#E07A43]/20 bg-[#120E0C]">
              <h3 className="font-serif text-2xl font-bold text-[#FAF6F0] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#E07A43]" />
                <span>The Story &amp; Mindset</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#A89F91] font-sans leading-relaxed">
                <p>
                  I’m <strong className="text-[#FAF6F0] font-semibold">{personalData.name}</strong>, a B.Tech Computer Science &amp; Design student at Sri Krishna College of Engineering and Technology (SKCET) in Coimbatore, graduating in 2028.
                </p>
                <p>
                  My passion sits right where algorithmic intelligence meets human interaction. Rather than treating AI as a black box or a parlor trick, I focus on end-to-end practical utility: how a computer vision model detects perimeter breaches in milliseconds, how voice assistants handle contextual speech without friction, and how telemetry pipelines flag bearing anomalies before industrial machinery fails.
                </p>
                <p>
                  Whether leading development teams during high-stakes 30-hour hackathons, serving as the CSD Association Secretary, or developing full-stack web applications, I thrive in environments where speed, structure, and intellectual curiosity collide.
                </p>
              </div>

              {/* Core Pillars matching Reference Card Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-[#E07A43]/15">
                <div className="p-4 rounded-2xl bg-[#181310] border border-[#E07A43]/20 hover:border-[#E07A43]/50 transition-all">
                  <div className="flex items-center gap-2 text-[#E07A43] font-mono text-xs mb-1.5 font-bold">
                    <Code className="w-4 h-4" />
                    <span>Perception AI</span>
                  </div>
                  <p className="text-xs text-[#A89F91] leading-relaxed">OpenCV, stream analysis, object classification</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#181310] border border-[#E07A43]/20 hover:border-[#E07A43]/50 transition-all">
                  <div className="flex items-center gap-2 text-[#FFA25B] font-mono text-xs mb-1.5 font-bold">
                    <Lightbulb className="w-4 h-4" />
                    <span>Interaction</span>
                  </div>
                  <p className="text-xs text-[#A89F91] leading-relaxed">Voice synthesis, workflow automation, modern UI</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#181310] border border-[#E07A43]/20 hover:border-[#E07A43]/50 transition-all">
                  <div className="flex items-center gap-2 text-[#E07A43] font-mono text-xs mb-1.5 font-bold">
                    <Users className="w-4 h-4" />
                    <span>Leadership</span>
                  </div>
                  <p className="text-xs text-[#A89F91] leading-relaxed">CSD Secretary, event curation, peer mentoring</p>
                </div>
              </div>

              {/* Philosophy Quote Callout matching reference panel */}
              <div className="mt-6 p-4.5 rounded-2xl bg-gradient-to-r from-[#1E1712] to-[#140F0C] border-l-4 border-l-[#E07A43] border border-[#E07A43]/20 flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#E07A43] shrink-0 mt-0.5 opacity-80" />
                <p className="font-serif italic text-sm text-[#E6DCD2] leading-relaxed">
                  &ldquo;Technology is not just about code, it’s about people, ideas and impact.&rdquo;
                </p>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Key Credentials & Education (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Bento Card */}
            <TiltCard className="copper-card rounded-3xl p-7 border border-[#E07A43]/20 bg-[#120E0C] relative overflow-hidden">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1C1511] border border-[#E07A43]/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(224,122,67,0.2)]">
                  <GraduationCap className="w-6 h-6 text-[#E07A43]" />
                </div>

                <div>
                  <span className="text-[11px] font-mono text-[#FFA25B] font-bold uppercase tracking-wider block">
                    Undergraduate Degree
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#FAF6F0]">
                    {personalData.degree}
                  </h4>
                </div>
              </div>

              <p className="text-sm font-semibold text-[#E6DCD2] mb-2 font-sans">
                {personalData.college}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A89F91] pt-3 border-t border-[#E07A43]/15">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E07A43]" />
                  <span>Coimbatore, India</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#E07A43]" />
                  <span>Expected {personalData.expectedGraduation}</span>
                </span>
              </div>
            </TiltCard>

            {/* Department Leadership Card */}
            <TiltCard className="copper-card rounded-3xl p-7 border border-[#E07A43]/20 bg-[#120E0C] relative overflow-hidden">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1C1511] border border-[#E07A43]/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(224,122,67,0.2)]">
                  <Award className="w-6 h-6 text-[#FFA25B]" />
                </div>

                <div>
                  <span className="text-[11px] font-mono text-[#FFA25B] font-bold uppercase tracking-wider block">
                    Institutional Leadership
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#FAF6F0]">
                    Association Secretary
                  </h4>
                </div>
              </div>

              <p className="text-sm font-semibold text-[#E6DCD2] mb-3 font-sans">
                Department of Computer Science &amp; Design &bull; SKCET
              </p>

              <p className="text-xs text-[#A89F91] leading-relaxed font-sans">
                Elected to organize department technical symposiums, manage inter-college hackathon delegations, and coordinate peer learning initiatives.
              </p>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
