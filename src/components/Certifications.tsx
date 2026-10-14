import React from 'react';
import { ExternalLink, Calendar, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { certificationsData, Certification } from '../data/certifications';
import { TiltCard } from './TiltCard';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-28 relative z-10 overflow-hidden">
      {/* Volcanic / Celestial Horizon Arc Glow matching Reference Panel 7 */}
      <div className="absolute -bottom-24 inset-x-0 h-72 bg-gradient-to-t from-[#E07A43]/18 via-[#C8652D]/5 to-transparent pointer-events-none rounded-t-[100%]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header matching 06. CERTIFICATIONS Indicator */}
        <div className="max-w-3xl mb-16">
          <div className="section-tag mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] shadow-[0_0_6px_#E07A43]" />
            <span>06. CERTIFICATIONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0] tracking-tight leading-tight">
            Credentials That Build Trust.{' '}
            <span className="text-gradient-copper">
              Verified Specializations.
            </span>
          </h2>
          <p className="text-base text-[#A89F91] mt-3 font-sans leading-relaxed">
            Certified in key areas to strengthen my skills, validate rigorous foundations, and keep growing.
          </p>
        </div>

        {/* Certifications Grid matching Reference 4-Card / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert: Certification) => (
            <TiltCard
              key={cert.id}
              className="copper-card rounded-3xl p-7 border border-[#E07A43]/20 bg-[#120E0C] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#1C1410] border border-[#E07A43]/35 text-[#FFA25B] font-medium flex items-center gap-1.5 shadow-[0_0_10px_rgba(224,122,67,0.15)]">
                    <CheckCircle2 className="w-3 h-3 text-[#E07A43]" />
                    <span>VERIFIED</span>
                  </span>

                  <span className="text-xs font-mono text-[#A89F91] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E07A43]" />
                    <span>{cert.issueDate}</span>
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#FAF6F0] mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-bold text-[#FFA25B] font-mono mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-[#A89F91] font-sans leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills Learned */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-[#18120F] border border-[#E07A43]/20 text-[#E6DCD2]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link matching "View Certificate ->" */}
              <div className="pt-4 border-t border-[#E07A43]/15 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-[#8E8275] truncate max-w-[180px]">
                  ID: {cert.credentialId}
                </span>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#FFA25B] hover:text-white transition-colors cursor-pointer"
                >
                  <span>View Certificate</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E07A43]" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom Celestial Arc Statement matching Reference Image Panel 7 */}
        <div className="mt-16 text-center pt-8 border-t border-[#E07A43]/15">
          <div className="w-12 h-[2px] bg-[#E07A43] mx-auto mb-4 rounded-full shadow-[0_0_8px_#E07A43]" />
          <p className="font-serif text-xl sm:text-2xl font-bold text-[#FAF6F0] tracking-wide">
            Verified Skills. <span className="text-gradient-copper">Real Learning.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
