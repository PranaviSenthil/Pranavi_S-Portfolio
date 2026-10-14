import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, Code } from 'lucide-react';
import { projectsData, Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'AI & Computer Vision',
    'Industrial AI & Systems',
    'Full-Stack & Web',
    'Mobile & Automation',
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.categoryGroup === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query)) ||
        project.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-28 relative z-10">
      {/* Subtle Volcanic Horizon Warm Rim Glow */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#E07A43]/10 via-[#C8652D]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header with 03. PROJECTS Indicator matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="section-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A43] shadow-[0_0_6px_#E07A43]" />
              <span>03. PROJECTS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF6F0] tracking-tight leading-tight">
              Ideas into Real Solutions.{' '}
              <span className="text-gradient-copper">
                Selected Work.
              </span>
            </h2>
            <p className="text-base text-[#A89F91] mt-3 font-sans leading-relaxed">
              A collection of projects that showcase my learning, creativity, and problem-solving through computer vision pipelines, speech intelligence, and industrial diagnostic systems.
            </p>
          </div>

          {/* Search Box in Dark Obsidian Glass */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A89F91]" />
            <input
              type="text"
              placeholder="Search algorithms, tech, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#120E0C] border border-[#E07A43]/25 text-[#FAF6F0] placeholder-[#7A7065] text-sm focus:outline-none focus:border-[#E07A43] focus:ring-2 focus:ring-[#E07A43]/20 transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Category Pills matching reference image */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-2">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? projectsData.length
                : projectsData.filter((p) => p.categoryGroup === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 active:scale-95 cursor-pointer ${
                  isActive
                    ? 'btn-copper shadow-[0_0_18px_rgba(224,122,67,0.35)]'
                    : 'bg-[#140F0C] border border-[#E07A43]/20 text-[#A89F91] hover:text-[#FAF6F0] hover:border-[#E07A43]/50 hover:bg-[#1A130F]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                    isActive ? 'bg-[#0E0A08] text-[#FFA25B] font-bold' : 'bg-[#1D1612] text-[#A89F91]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenModal={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-3xl border border-dashed border-[#E07A43]/25 bg-[#120E0C]/60">
            <Code className="w-8 h-8 text-[#E07A43] mx-auto mb-3" />
            <p className="text-[#A89F91] font-medium">No projects match your current filter.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-mono text-[#FFA25B] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
