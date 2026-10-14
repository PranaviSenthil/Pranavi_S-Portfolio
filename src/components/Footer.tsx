import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { personalData } from '../data/personal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills & Tools', href: '#skills' },
    { name: 'Selected Works', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Accolades', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Lab Dispatch', href: '#building' },
    { name: 'Get in Touch', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#0A0706] border-t border-[#E07A43]/20 pt-16 pb-12 z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E07A43]/15">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#E07A43] to-[#C8652D] p-[1px] shadow-[0_0_15px_rgba(224,122,67,0.3)]">
                <div className="w-full h-full bg-[#120E0C] rounded-[11px] flex items-center justify-center">
                  <span className="font-serif text-sm font-bold text-[#E07A43]">
                    PS
                  </span>
                </div>
              </div>

              <span className="font-serif text-xl font-bold text-[#FAF6F0] tracking-tight">
                {personalData.name.toUpperCase()}
              </span>
            </div>

            <p className="text-sm text-[#A89F91] font-sans leading-relaxed max-w-sm mb-4">
              {personalData.degree} student at {personalData.collegeShort}, building intelligent perception systems, interactive speech technologies, and high-impact software.
            </p>

            <p className="text-xs text-[#8E8275] font-mono">
              Coimbatore, Tamil Nadu &bull; Class of {personalData.expectedGraduation}
            </p>
          </div>

          {/* Quick Directory (4 cols) */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFA25B] mb-4 block">
              PORTFOLIO DIRECTORY
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#A89F91] hover:text-[#FFA25B] hover:translate-x-0.5 transition-all py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E6DCD2] mb-4 block">
                CONNECTIVITY
              </span>
              <div className="flex items-center gap-2 mb-6">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#140F0C] border border-[#E07A43]/20 text-[#A89F91] hover:text-[#FAF6F0] hover:border-[#E07A43]/50 hover:bg-[#1C1410] transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#140F0C] border border-[#E07A43]/20 text-[#A89F91] hover:text-[#FFA25B] hover:border-[#E07A43]/50 hover:bg-[#1C1410] transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-2.5 rounded-xl bg-[#140F0C] border border-[#E07A43]/20 text-[#A89F91] hover:text-[#FFA25B] hover:border-[#E07A43]/50 hover:bg-[#1C1410] transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#A89F91] hover:text-[#FFA25B] transition-colors py-1 group cursor-pointer"
              >
                <span>RETURN TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-[#E07A43]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E8275]">
          <p>&copy; 2026 {personalData.name}. Handcrafted with React, Three.js &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] shadow-[0_0_8px_#E07A43]" />
            <span className="text-[#FFA25B] font-semibold">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
