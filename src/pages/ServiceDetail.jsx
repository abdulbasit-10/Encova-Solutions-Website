import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import siteConfig from '../config/siteConfig';
import AboutHeroImage from '../assets/serviceDetail/AboutHero.png';
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
    <div className="bg-white pt-25 ">
      {/* Hero Section */}
      <section className="bg-white">
        <div
          className="absolute inset-0 h-99 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-2">
             <div className='flex gap-6 items-center justify-center '>
               <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                {service.firstname} 
              </span>
              <span className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 mb-6'>{service.secondname}</span>
             </div>
              <p className="text-lg text-center max-w-3xl text-gray-700 mb-8">
                {service.description}
              </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Key Features"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {service.features.map((feature, index) => (
              <Card key={index} className="flex justify-start items-start space-x-4 p-6 hover:shadow-lg transition-shadow  bg-gray-50! border-2 border-gray-200 shadow-sm">
                <div className="">
                  <img src={featur} alt={featur} />
                </div>
                <div className="flex-1">
                  {/* <h3 className="text-lg font-semibold text-gray-500 mb-2">{feature}</h3> */}
                  <p className="text-gray-900 text-base font-normal">
                     {feature} 
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            // subtitle="Tech Stack"
            title="Technologies We Use"
            centered
          />

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-2 bg-[#FFFFFF] hover:bg-gray-100 hover:text-gray-600 border-2 border-gray-300 rounded-lg hover:border-gray-500 text-gray-500 font-medium transition-colors cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Related Projects"
            centered
          />

          {relatedProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {relatedProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden p-0 group cursor-pointer border-gray-200 hover:border-none border-2 shadow-2xl">
                    <div className="h-48 flex items-center justify-center relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block text-base uppercase mb-2 font-normal text-gray-500 origin-left transition-all duration-300 group-hover:px-3 group-hover:py-1 group-hover:bg-gray-200 group-hover:border group-hover:border-gray-300 group-hover:rounded-full group-hover:scale-x-110">
                        {siteConfig.services.find(s => s.id === project.category)?.name}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-700 text-sm mb-4">{project.description}</p>
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

              <div className="text-center mt-12">
                <Button to="/portfolio">View All Projects</Button>
              </div>
            </>
          ) : (
            <div className="text-center mt-12">
              <p className="text-gray-500 text-lg">No Projects Yet</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Benefits You'll Get"
            centered
          />

          <div className="flex justify-center items-center flex-wrap gap-8 mt-12">
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
              <Card key={index} className="group flex flex-col gap-3 justify-center items-center w-65 text-center px-6 py-10 hover:shadow-lg transition-shadow border-2 border-gray-200 shadow-sm">
                <div className="pb-5 flex items-center justify-center rounded-xl p-4 transition-all duration-200 group-hover:bg-gray-500 ">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                  />
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                  <h3 className="text-xl font-bold text-gray-700 mb-2  transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 font-normal group-hover:text-gray-500 transition-colors">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#6B7280] to-[#4B5563]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Web Project?
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Let's discuss your requirements and create a powerful {service?.name?.toLowerCase() ?? 'service'} solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              to="/contact" 
              variant="secondary"
              size="large"
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

