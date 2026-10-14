import React from 'react';
import { FileText, Download, Eye, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/personal';
import { TiltCard } from './TiltCard';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalData.resumeUrl;
    link.download = 'Pranavi_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-28 relative z-10">
      {/* Volcanic Horizon Warm Rim Glow */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#E07A43]/10 via-[#C8652D]/3 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <TiltCard className="copper-card rounded-3xl p-8 sm:p-12 border border-[#E07A43]/20 bg-[#120E0C] relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="section-tag mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] shadow-[0_0_6px_#E07A43]" />
              <span>CURRICULUM VITAE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF6F0] tracking-tight mb-3">
              Ready for high-impact{' '}
              <span className="text-gradient-copper">
                internships &amp; engineering roles.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#A89F91] font-sans leading-relaxed mb-6">
              Review my structured coursework, hackathon victories, technical capabilities, and project record in a clean, one-page printable PDF format.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A89F91]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E07A43]" />
                <span className="text-[#E6DCD2]">Updated September 2026</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFA25B]" />
                <span className="text-[#E6DCD2]">Single-Page Format</span>
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3.5 w-full sm:w-auto shrink-0">
            <button
              onClick={handleDownload}
              className="px-7 py-3.5 rounded-full btn-copper font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onOpenResumeModal}
              className="px-7 py-3.5 rounded-full btn-copper-outline font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#E07A43]" />
              <span>Preview in Browser</span>
            </button>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};
