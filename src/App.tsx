import React, { useState } from 'react';
import { FreshCanvasBackground } from './components/FreshCanvasBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070605] text-[#F5EFE6] flex flex-col selection:bg-[#E07A43]/30 selection:text-[#FFA25B] font-sans antialiased relative overflow-hidden">
      {/* Interactive Floating Embers & Volumetric Copper Light Background */}
      <FreshCanvasBackground />

      {/* Sticky Header Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Architectural Sections */}
      <main className="flex-grow relative z-10">
        {/* Section 1: Hero & 3D Interactive Spatial Glass Viewport */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Section 2: Biographical Dossier */}
        <About />

        {/* Section 3: Technical Capability Matrix */}
        <Skills />

        {/* Section 4: Engineering Projects & System Modals */}
        <Projects />

        {/* Section 5: Experience & Industry Record */}
        <Experience />

        {/* Section 6: Honors, Hackathons & Accolades */}
        <Achievements />

        {/* Section 7: Technical Certifications Ledger */}
        <Certifications />

        {/* Section 8: Lab Dispatch & Active Research */}
        <CurrentlyBuilding />

        {/* Section 9: Curriculum Vitae Dossier */}
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Section 10: Direct Communication Console */}
        <Contact />
      </main>

      {/* Section 11: Architectural Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
