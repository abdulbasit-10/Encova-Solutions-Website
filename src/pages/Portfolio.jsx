import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import siteConfig from '../config/siteConfig';
import AboutHeroImage from '../assets/aboutAssets/AboutHero.png';

const Portfolio = () => {
  const PROJECTS_PER_PAGE = 3;
  const PROJECT_DESCRIPTION_PREVIEW_LENGTH = 155;

  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedProjectIds, setExpandedProjectIds] = useState({});

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    // { id: 'app', name: 'Mobile Development' },
    { id: 'uiux', name: 'UI/UX Designing' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'saas', name: 'SaaS Solutions' },
    // { id: 'cloud', name: 'Cloud & DevOps' },
    // { id: 'graphics', name: 'Graphic Design' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? siteConfig.portfolio 
    : siteConfig.portfolio.filter(p => p.category === activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const visibleProjects = filteredProjects.slice(
    currentPage * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE
  );
  const hasMultiplePages = totalPages > 1;
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  const toggleProjectDescription = (projectId) => {
    setExpandedProjectIds((current) => ({
      ...current,
      [projectId]: !current[projectId],
    }));
  };

  const handleFilterChange = (categoryId) => {
    setActiveFilter(categoryId);
    setCurrentPage(0);
    setExpandedProjectIds({});
  };

  const getProjectDescriptionPreview = (description) => {
    const cleanDescription = description.trim().replace(/\s+/g, ' ');

    if (cleanDescription.length <= PROJECT_DESCRIPTION_PREVIEW_LENGTH) {
      return cleanDescription;
    }

    return `${cleanDescription.slice(0, PROJECT_DESCRIPTION_PREVIEW_LENGTH).trim()}...`;
  };

  return (
    <div className="bg-white pt-3">
      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 md:py-20 lg:py-20 xl:py-23 bg-gray-100">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat pointer-events-none select-none"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Our <span className="text-gray-600">Portfolio</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-900 leading-relaxed px-2">
              Explore our recent projects and see how we've helped businesses transform their digital presence and achieve measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-gray-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleProjects.map((project) => {
                const service = siteConfig.services.find(s => s.id === project.category);
                const isExpanded = expandedProjectIds[project.id];
                const cleanDescription = project.description.trim();
                const isLongDescription =
                  cleanDescription.replace(/\s+/g, ' ').length >
                  PROJECT_DESCRIPTION_PREVIEW_LENGTH;
                const displayedDescription = isExpanded
                  ? cleanDescription
                  : getProjectDescriptionPreview(cleanDescription);

                return (
                  <Card
                    key={project.id}
                    className="overflow-hidden p-0 group transition-transform duration-300 hover:scale-[1.03] hover:z-10 border-2 border-gray-300 pb-2"
                  >
                    <div className="h-48 overflow-hidden bg-gray-50">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="block h-full w-full object-cover object-center border-b border-gray-300"
                      />
                      {/* <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6">
                        <h3 className="text-2xl font-bold text-white mb-3 text-center">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm text-center">
                          Click to view details
                        </p>
                      </div> */}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block
        text-sm 
        uppercase 
        mb-2 
        font-normal 
        text-gray-500
        origin-left
        transition-all
        duration-300
        group-hover:bg-gray-200
        group-hover:rounded-full">
                          {service?.name}
                        </span>
                        {/* <span className="text-2xl">{service?.icon}</span> */}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2 leading-relaxed whitespace-pre-line">
                        {displayedDescription}
                      </p>
                      {isLongDescription && (
                        <button
                          type="button"
                          onClick={() => toggleProjectDescription(project.id)}
                          className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {isExpanded ? 'View Less' : 'View More'}
                        </button>
                      )}
                      {/* <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div> */}
                    </div>
                  </Card>
                );
                })}
              </div>

              {hasMultiplePages && (
                <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((page) => Math.max(page - 1, 0))}
                    disabled={isFirstPage}
                    className="px-6 py-3 rounded-lg cursor-pointer font-medium bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-300 disabled:hover:text-gray-700"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages - 1))}
                    disabled={isLastPage}
                    className="px-6 py-3 rounded-lg cursor-pointer font-medium bg-gray-700 text-white hover:bg-gray-800 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-gray-700"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Impact"
            centered
          />
          <div>
            <p className='text-center text-xl'>Real numbers that showcase the value we deliver to our clients.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
            {[
              { number: '150+', label: 'Total Projects' },
              { number: '100+', label: 'Happy Clients' },
              { number: '98%', label: 'Success Rate' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <Card key={index} className="text-center w-52 p-4 sm:p-5 bg-white border-2 border-gray-300 hover:border-gray-400 rounded-2xl hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-gray-500 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Tech Stack"
            title="Technologies We Master"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                category: 'Frontend',
                technologies: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript']
              },
              {
                category: 'Backend',
                technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis']
              },
              {
                category: 'Mobile & AI',
                technologies: ['React Native', 'Flutter', 'TensorFlow', 'PyTorch', 'OpenAI']
              }
            ].map((group, index) => (
              <Card key={index}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-[#6B7280] to-[#4B5563]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Let's Create Your Success Story
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8">
            Ready to start your project and join our portfolio of successful clients?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-white text-gray-700 hover:bg-gray-200 transition-all duration-200"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border-2 border-white text-white hover:text-gray-500 hover:bg-gray-200 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

