import React, { useEffect } from 'react';
import { X, Download, FileText } from 'lucide-react';
import { personalData } from '../data/personal';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalData.resumeUrl;
    link.download = 'Pranavi_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#070605]/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Window in Luxury Obsidian & Copper */}
      <div className="relative w-full max-w-4xl h-[85vh] rounded-3xl bg-[#110D0B] border border-[#E07A43]/30 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.95)] z-10 my-6 flex flex-col animate-in zoom-in-95 duration-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E07A43]/15 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1C1410] border border-[#E07A43]/30 flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#E07A43]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#FAF6F0]">
                Curriculum Vitae Preview
              </h3>
              <p className="text-xs font-mono text-[#A89F91]">
                {personalData.name} &bull; {personalData.degree} &bull; SKCET
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-full btn-copper text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full border border-[#E07A43]/25 bg-[#18120F] text-[#A89F91] hover:text-[#FAF6F0] hover:border-[#E07A43]/60 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF / Document Embed Viewport */}
        <div className="flex-1 w-full bg-[#0B0806] rounded-2xl border border-[#E07A43]/20 overflow-hidden relative flex items-center justify-center">
          <iframe
            src={`${personalData.resumeUrl}#view=FitH`}
            title="Resume Document Preview"
            className="w-full h-full border-none"
          />

          {/* Fallback overlay in case PDF path is placeholder */}
          <div className="absolute inset-0 bg-[#110D0B]/95 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center pointer-events-none">
            <div className="w-14 h-14 rounded-2xl bg-[#1C1410] border border-[#E07A43]/30 flex items-center justify-center mb-4 text-[#E07A43] shadow-[0_0_20px_rgba(224,122,67,0.25)]">
              <FileText className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#FAF6F0] mb-2">
              {personalData.name} &mdash; Official Resume
            </h4>
            <p className="text-sm text-[#A89F91] max-w-md mb-6 font-sans">
              B.Tech in Computer Science &amp; Design &bull; Sri Krishna College of Engineering and Technology, Coimbatore (Class of 2028).
            </p>
            <div className="pointer-events-auto">
              <button
                onClick={handleDownload}
                className="px-6 py-3 rounded-full btn-copper text-white font-bold text-sm hover:shadow-[0_0_25px_rgba(224,122,67,0.4)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
