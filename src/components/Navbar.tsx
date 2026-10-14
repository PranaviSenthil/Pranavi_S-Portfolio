import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sparkles } from 'lucide-react';
import { personalData } from '../data/personal';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Accolades', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Lab', href: '#building' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', ...navLinks.map((link) => link.href.substring(1)), 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0706]/90 backdrop-blur-xl border-b border-[#E07A43]/15 shadow-[0_8px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo matching Reference Image */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="group flex items-center gap-3 focus:outline-none shrink-0"
          aria-label="Pranavi S Home"
        >
          {/* Subtle copper monogram seal */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#E07A43] to-[#C8652D] p-[1px] shadow-[0_0_15px_rgba(224,122,67,0.3)] group-hover:shadow-[0_0_22px_rgba(224,122,67,0.5)] transition-all">
            <div className="w-full h-full bg-[#120E0C] rounded-[11px] flex items-center justify-center">
              <span className="font-serif text-sm font-bold text-[#E07A43] tracking-wider">
                PS
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold text-[#FAF6F0] tracking-wide group-hover:text-[#FFA25B] transition-colors flex items-center gap-1.5">
              <span>{personalData.name.toUpperCase()}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] shadow-[0_0_8px_#E07A43]" />
            </span>
            <span className="hidden sm:inline-block text-[10px] text-[#A89F91] font-mono tracking-wider">
              CS &amp; DESIGN &bull; SKCET
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links matching Reference Image Pills */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#120E0C]/85 border border-[#E07A43]/20 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all relative ${
                  isActive
                    ? 'text-white bg-[#E07A43]/20 border border-[#E07A43]/40 font-semibold shadow-[0_0_15px_rgba(224,122,67,0.2)]'
                    : 'text-[#A89F91] hover:text-[#FAF6F0] hover:bg-[#1C1613]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-[#E07A43] rounded-full shadow-[0_0_6px_#E07A43]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="text-xs font-semibold px-4 py-2 rounded-full border border-[#E07A43]/25 bg-[#140F0C]/80 text-[#E6DCD2] hover:text-white hover:border-[#E07A43]/50 hover:bg-[#1F1713] transition-all flex items-center gap-1.5 active:scale-95 shadow-sm"
            id="nav-resume-btn"
          >
            <FileText className="w-3.5 h-3.5 text-[#E07A43]" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="text-xs font-semibold px-4.5 py-2 rounded-full bg-gradient-to-r from-[#E07A43] to-[#C8652D] hover:from-[#FFA25B] hover:to-[#E07A43] text-white transition-all inline-flex items-center gap-1.5 shadow-[0_0_20px_rgba(224,122,67,0.35)] hover:shadow-[0_0_28px_rgba(224,122,67,0.5)] active:scale-95"
          >
            <span>Let’s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-xl border border-[#E07A43]/25 bg-[#140F0C] text-[#E6DCD2] hover:text-white hover:border-[#E07A43]/50"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pt-4 pb-6 bg-[#0E0A08]/95 border-b border-[#E07A43]/20 backdrop-blur-2xl shadow-2xl">
          <nav className="flex flex-col gap-1 mb-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'text-[#FFA25B] bg-[#E07A43]/15 font-semibold border-l-2 border-[#E07A43]'
                      : 'text-[#A89F91] hover:text-[#FAF6F0] hover:bg-[#18120F]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] shadow-[0_0_6px_#E07A43]" />}
                </a>
              );
            })}
          </nav>

          <div className="flex flex-col gap-2.5 pt-3 border-t border-[#E07A43]/15">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className="w-full py-2.5 text-xs font-semibold text-center border border-[#E07A43]/25 rounded-xl text-[#FAF6F0] bg-[#140F0C] hover:bg-[#1D1612] flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#E07A43]" />
              <span>Download Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="w-full py-2.5 text-xs font-semibold text-center rounded-xl bg-gradient-to-r from-[#E07A43] to-[#C8652D] text-white hover:from-[#FFA25B] hover:to-[#E07A43] shadow-md"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
