import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, MapPin } from 'lucide-react';
import { personalData } from '../data/personal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { TiltCard } from './TiltCard';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-28 relative z-10">
      {/* Volcanic Horizon Warm Rim Glow */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#E07A43]/10 via-[#C8652D]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Info & Copy Email (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="section-tag mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] shadow-[0_0_6px_#E07A43]" />
                <span>DIRECT COMMUNICATION PORTAL</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#FAF6F0] tracking-tight mb-4 leading-tight">
                Let’s build something{' '}
                <span className="text-gradient-copper">
                  exceptional together.
                </span>
              </h2>

              <p className="text-base text-[#A89F91] font-sans leading-relaxed mb-8">
                I’m always open to discussing new engineering projects, hackathon collaborations, AI/ML research, or prospective internships.
              </p>

              {/* Direct Email Copy Card in Obsidian & Copper */}
              <div className="p-5 rounded-2xl bg-[#120E0C] border border-[#E07A43]/20 mb-8 flex items-center justify-between gap-3 shadow-sm">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#1C1410] border border-[#E07A43]/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#E07A43]" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-[#A89F91] block">Direct Inquiries</span>
                    <span className="text-sm font-semibold text-[#FAF6F0] truncate block font-mono">
                      {personalData.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-xl bg-[#18120F] hover:bg-[#221814] border border-[#E07A43]/25 text-[#E6DCD2] hover:text-[#FAF6F0] text-xs font-mono flex items-center gap-1.5 transition-all shrink-0 active:scale-95 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#FFA25B]" />
                      <span className="text-[#FFA25B] font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#E07A43]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Status */}
              <div className="space-y-3 text-xs font-mono text-[#A89F91]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E07A43]" />
                  <span>{personalData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E07A43] shadow-[0_0_8px_#E07A43] animate-pulse" />
                  <span className="text-[#FFA25B] font-semibold">Open to Summer 2026 / 2027 Opportunities</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 mt-8 border-t border-[#E07A43]/15 flex items-center gap-3">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-[#120E0C] border border-[#E07A43]/20 text-[#A89F91] hover:text-[#FAF6F0] hover:border-[#E07A43]/60 hover:bg-[#1C1410] transition-all shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-[#120E0C] border border-[#E07A43]/20 text-[#A89F91] hover:text-[#FFA25B] hover:border-[#E07A43]/60 hover:bg-[#1C1410] transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-3 rounded-2xl bg-[#120E0C] border border-[#E07A43]/20 text-[#A89F91] hover:text-[#FFA25B] hover:border-[#E07A43]/60 hover:bg-[#1C1410] transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <TiltCard className="copper-card rounded-3xl p-8 sm:p-10 border border-[#E07A43]/20 bg-[#120E0C]">
              <h3 className="font-serif text-2xl font-bold text-[#FAF6F0] mb-6">
                Transmit a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-mono font-semibold text-[#A89F91] block mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#16110E] border border-[#E07A43]/20 text-[#FAF6F0] placeholder-[#7A7065] text-sm focus:outline-none focus:border-[#E07A43] focus:ring-2 focus:ring-[#E07A43]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-semibold text-[#A89F91] block mb-2">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#16110E] border border-[#E07A43]/20 text-[#FAF6F0] placeholder-[#7A7065] text-sm focus:outline-none focus:border-[#E07A43] focus:ring-2 focus:ring-[#E07A43]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-semibold text-[#A89F91] block mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry, Hackathon, or Internship"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#16110E] border border-[#E07A43]/20 text-[#FAF6F0] placeholder-[#7A7065] text-sm focus:outline-none focus:border-[#E07A43] focus:ring-2 focus:ring-[#E07A43]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-semibold text-[#A89F91] block mb-2">
                    MESSAGE CONTENT *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hello Pranavi, I came across your computer vision and AI portfolio..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#16110E] border border-[#E07A43]/20 text-[#FAF6F0] placeholder-[#7A7065] text-sm focus:outline-none focus:border-[#E07A43] focus:ring-2 focus:ring-[#E07A43]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full btn-copper text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
