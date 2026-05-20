import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import siteConfig from '../config/siteConfig';
import AboutHeroImage from '../assets/aboutAssets/AboutHero.png';
import featur from "../assets/serviceDetail/feature.svg";
import expert from "../assets/serviceDetail/expert.svg";
import quality from "../assets/serviceDetail/quality.svg";
import delivery from "../assets/serviceDetail/delivery.svg";
import support from "../assets/serviceDetail/support.svg";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = siteConfig.services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="bg-white min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Button to="/services">Back to Services</Button>
        </div>
      </div>
    );
  }

  const relatedProjects = siteConfig.portfolio.filter(p => p.category === serviceId);

  return (
    <div className="bg-white pt-3">
      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 md:py-20 lg:py-20 xl:py-23 bg-gray-100">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat pointer-events-none select-none"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {service.firstname} <span className="text-gray-600">{service.secondname}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-900 leading-relaxed px-2">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Key Features"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
            {service.features.map((feature, index) => (
              <Card key={index} className="flex justify-start items-start space-x-3 p-4 hover:shadow-lg transition-shadow bg-gray-50! border-2 border-gray-200 shadow-sm">
                <div>
                  <img src={featur} alt="" className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  {/* <h3 className="text-lg font-semibold text-gray-500 mb-2">{feature}</h3> */}
                  <p className="text-gray-900 text-sm font-normal">
                     {feature} 
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            // subtitle="Tech Stack"
            title="Technologies We Use"
            centered
          />

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[#FFFFFF] hover:bg-gray-100 hover:text-gray-600 border-2 border-gray-300 rounded-lg hover:border-gray-500 text-gray-500 text-sm font-medium transition-colors cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Related Projects"
            centered
          />

          {relatedProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {relatedProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden p-0 group cursor-pointer border-gray-200 border-2 shadow-2xl transition-transform duration-300 hover:scale-[1.03] hover:z-10">
                    <div className="h-48 flex items-center justify-center relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <div className="inline-block text-sm uppercase mb-2 font-normal text-gray-500 origin-left transition-all duration-300 group-hover:bg-gray-200 group-hover:rounded-full">
                        {siteConfig.services.find(s => s.id === project.category)?.name}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-700 text-sm mb-4">
                        {project.description.trim().replace(/\s+/g, ' ').slice(0, 155)}
                        {project.description.trim().replace(/\s+/g, ' ').length > 155 ? '...' : ''}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-400 text-gray-600 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button to="/portfolio">View All Projects</Button>
              </div>
            </>
          ) : (
            <div className="text-center mt-8">
              <p className="text-gray-500 text-lg">No Projects Yet</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Benefits You'll Get"
            centered
          />

          <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-6 mt-8">
            {[
              {
                title: 'Expert Team',
                description: 'Work with experienced professionals who are experts in their field.',
                icon: expert
              },
              {
                title: 'Quality Assured',
                description: 'Rigorous testing and quality control ensure flawless deliverables.',
                icon: quality
              },
              {
                title: 'On-Time Delivery',
                description: 'Rigorous testing and quality control ensure flawless deliverables.',
                icon: delivery
              },
              {
                title: 'Ongoing Support',
                description: 'Continuous support and maintenance after project completion.',
                icon: support
              }
            ].map((benefit, index) => (
              //add the group hover effect to the card
              <Card key={index} className="group flex flex-col gap-2 justify-center items-center w-64 text-center p-4 sm:p-5 hover:shadow-lg transition-shadow border-2 border-gray-200 shadow-sm">
                <div className="flex items-center justify-center rounded-xl p-2 transition-all duration-200 group-hover:bg-gray-500">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-9 h-9 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                  />
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                  <h3 className="text-base font-bold text-gray-700 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm font-normal group-hover:text-gray-500 transition-colors">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-[#6B7280] to-[#4B5563]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto mb-6 sm:mb-8">
            Let's discuss your requirements and create a powerful {service?.name?.toLowerCase() ?? 'service'} solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              to="/contact" 
              variant="secondary"
              size="medium"
              className="bg-white text-gray-600 hover:bg-gray-100! hover:text-gray-600!"
            > 
              Get in Touch
            </Button>
            {/* <Button 
              to="/services" 
              variant="outline"
              size="large"
              className="border-white text-white bg-white hover:bg-gray-500 hover:text-white"
            >
              View All Services
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
