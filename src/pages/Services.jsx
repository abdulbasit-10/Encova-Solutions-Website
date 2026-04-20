import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import siteConfig from '../config/siteConfig';
import  expertise from '../assets/serviceAssets/expertise2.svg';
import modern from '../assets/serviceAssets/modern2.svg';
import custom from '../assets/serviceAssets/custom2.svg';
import result from '../assets/serviceAssets/result2.svg';
import AboutHeroImage from '../assets/serviceDetail/AboutHero.png';

const Services = () => {
  return ( 
    <div className="bg-white pt-3 ">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat pointer-events-none select-none"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-2 lg:py-17">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gray-700">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed px-2">
              Comprehensive IT solutions tailored to transform your business and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => (
              <Link key={service.id} to={`/services/${service.id}`}>
                <Card className="h-full group cursor-pointer hover:scale-102 transition-transform duration-300 p-8 border-2 border-gray-300 hover:border-gray-400">
                  <div className="mb-6 inline-block bg-[#F9FAFB] p-4 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280] group-hover:scale-110 transform">
                    <img src={service.icon} alt={service.name} className="transition-all duration-200 group-hover:brightness-0 group-hover:invert" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                  
                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-gray-700 font-medium group-hover:translate-x-2 transition-transform">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="How We Deliver Excellence"
            subtitle="Our Approach" 
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your needs, goals, and challenges to create a tailored solution.'
              },
              {
                step: '02',
                title: 'Development',
                description: 'Our expert team builds your solution using cutting-edge technologies and best practices.'
              },
              {
                step: '03',
                title: 'Delivery',
                description: 'We ensure smooth deployment and provide ongoing support for continued success.'
              }
            ].map((item, index) => (
              <Card key={index} className=" relative overflow-hidden group cursor-pointer p-6 border-2 border-transparent hover:border-gray-200 bg-white">
                  <div className='flex items-center justify-between relative pb-4 mb-4 '>
                    <div className="text-4xl font-bold text-gray-700 mb-4 inline-block bg-[#F9FAFB] p-3 rounded-full transition-all duration-200 group-hover:bg-[#6B7280] group-hover:text-white">
                  {item.step} </div>
                <div className="absolute top-0 right-0 text-8xl font-bold text-gray-200">{item.step}</div>
                  </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Why Choose Us"
            title="The Encova Advantage"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: expertise,
                title: 'Proven Expertise',
                description: 'Years of experience delivering successful projects across diverse industries.'
              },
              {
                icon: modern,
                title: 'Modern Technology',
                description: 'We use the latest tools and frameworks to build cutting-edge solutions.'
              },
              {
                icon: custom,
                title: 'Custom Solutions',
                description: 'Tailored approaches designed to meet your unique business needs.'
              },
              {
                icon: result,
                title: 'Results Driven',
                description: 'Focused on delivering measurable outcomes that achieve your business goals.'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center group cursor-pointer p-6 border-2 border-gray-300  hover:border-gray-200 bg-white">
                <div className="mb-4 inline-block bg-gray-100 p-4 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280]">
                  <img src={item.icon} alt={item.title} className="text-gray-400 transition-all duration-200 group-hover:brightness-0 group-hover:invert " />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#6B7280] to-[#4B5563]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8">
            Ready to transform your business with our expert services?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              to="/contact" 
              variant="secondary"
              size="large"
              className="bg-white  text-gray-700 hover:bg-gray-200! hover:text-gray-700! transition-colors"
            >
              Get in Touch
            </Button>
            <Button 
              to="/portfolio" 
              variant="outline"
              size="large"
              className="text-white bg-transparent!  hover:text-gray-700 hover:bg-gray-200!  transition-colors"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

