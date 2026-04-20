import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import siteConfig from '../config/siteConfig';
import AboutHeroImage from '../assets/aboutAssets/AboutHero.png';
import fun from "../assets/careerAssets/fun.svg";
import growth from "../assets/careerAssets/growth.svg";
import health from "../assets/careerAssets/health.svg";
import learning from "../assets/careerAssets/learning.svg";
import remote from "../assets/careerAssets/remote.svg";
import salary from "../assets/careerAssets/salary.svg";
import team from "../assets/careerAssets/team.svg";
import worklife from "../assets/careerAssets/worklife.svg";
import innovation from "../assets/careerAssets/innovation.svg";
import excellence from "../assets/careerAssets/excellence.svg";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const benefits = [
    {
      icon: salary,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses and equity options.'
    },
    {
      icon: learning,
      title: 'Learning & Development',
      description: 'Annual learning budget for courses, conferences, & professional certificates.'
    },
    {
      icon: health ,
      title: 'Health Benefits',
      description: 'Comprehensive health insurance, dental, vision, and mental health support programs.'
    },
    {
      icon: worklife,
      title: 'Work-Life Balance',
      description: 'Generous PTO, paid holidays, and a culture that respects your personal time.'
    },
    {
      icon: remote,
      title: 'Remote Flexibility',
      description: 'Work from anywhere with our remote-first culture and flexible working hours.'
    },
    {
      icon: growth,
      title: 'Career Growth',
      description: 'Clear career paths, mentorship programs, and opportunities for advancement.'
    },
    {
      icon: fun,
      title: 'Fun Environment',
      description: 'Enjoy a vibrant workplace with team events, game rooms, and a culture that celebrates success.'
    },
    {
      icon: team,
      title: 'Great Team',
      description: 'Work alongside talented professionals who are passionate, supportive, and collaborative.'
    }
  ];

  return (
    <div className="bg-white pt-3.5">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-2 lg:py-7">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-gray-600">Team</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed px-2">
              Build your career with a team that values innovation, collaboration, and your professional growth. We're always looking for talented individuals to join our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Why Work With Us"
            subtitle="We offer more than just a job – we provide a platform for growth, learning, and making a real impact.  "
            centered
          />

          <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-70 w-60 p-6 border-2 border-gray-300 hover:border-gray-400 rounded-2xl hover:shadow-md transition-shadow  group cursor-pointer bg-[#F9FAFB]!">
                <div className="mb-4 inline-block bg-[#FFFFFF] p-3 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280]">
                  <img src={benefit.icon} alt={benefit.title} className="transition-all duration-200 group-hover:brightness-0 group-hover:invert" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Values"
            centered
          />
          <div>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
              The principles that guide our culture and define who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: 'Innovation First',
                description: 'We encourage creative thinking and new ideas. Your voice matters and your innovations are celebrated.',
                icon: innovation
              },
              {
                title: 'Work-Life Balance',
                description: "We believe in teamwork, open communication, and supporting each other's growth.",
                icon: team
              },
              {
                title: 'Excellence',
                description: 'We set high standards and strive for excellence in everything we do.',
                icon: excellence
              },
              {
                title : 'Work-Life Balance',
                description: 'We value your well-being and believe in maintaining a healthy work-life balance.',
                icon: worklife
              }
            ].map((item, index) => (
              <Card key={index} className="w-70 flex flex-col justify-center items-center text-center p-6 group cursor-pointer">
                <div className="mb-6 inline-block bg-[#F9FAFB] p-4 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280]">
                  <img src={item.icon} alt={item.title} className="transition-all duration-200 group-hover:brightness-0 group-hover:invert" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Open Positions"
            subtitle="Join Us"
            centered
          />

          <div className="grid grid-cols-1 gap-6 mt-12 max-w-5xl mx-auto">
            {siteConfig.careers.map((job) => (
              <Card 
                key={job.id} 
                className="hover:border-gray-400 transition-all cursor-pointer p-6 border-2 border-gray-300"
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        job.type === 'Full-time' 
                          ? 'bg-gray-200 text-gray-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.experience}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        {job.stack}
                      </span>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  <button className="mt-4 md:mt-0 md:ml-6 flex items-center text-gray-700 font-medium">
                    {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                    <svg 
                      className={`w-5 h-5 ml-2 transition-transform ${selectedJob === job.id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Expanded Details */}
                {selectedJob === job.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements:</h4>
                    <ul className="space-y-2 mb-6">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <svg className="w-5 h-5 mr-2 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                    <button 
                     className='text-white bg-gray-700 hover:bg-gray-600 focus:ring-gray-200 shadow-lg px-6 py-3 text-base rounded-lg font-semibold'
                    onClick={() => window.location.href = '/contact'}>
                      Apply Now
                    </button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="How to Apply"
            title="Application Process"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '1',
                title: 'Apply Online',
                description: 'Submit your application through our contact form or email',
                icon: '📝'
              },
              {
                step: '2',
                title: 'Initial Screening',
                description: 'Our HR team reviews your application and reaches out',
                icon: '👀'
              },
              {
                step: '3',
                title: 'Technical Interview',
                description: 'Meet with our technical team to discuss your skills',
                icon: '💻'
              },
              {
                step: '4',
                title: 'Join the Team',
                description: 'Receive offer and start your journey with us',
                icon: '🎉'
              }
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#6B7280] to-[#4B5563]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Don't See the Perfect Role?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8">
            We're always interested in meeting talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button 
            to="/contact" 
            variant="secondary"
            size="large"
            className="bg-white text-gray-700 hover:bg-gray-100"
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;

