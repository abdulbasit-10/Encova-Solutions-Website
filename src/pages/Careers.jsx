import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
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
      <section className="relative py-10 sm:py-16 md:py-20 lg:py-20 xl:py-23 bg-gray-100">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Join Our <span className="text-gray-600">Team</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-900 leading-relaxed px-2">
              Build your career with a team that values innovation, collaboration, and your professional growth. We're always looking for talented individuals to join our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Why Work With Us"
            subtitle="We offer more than just a job – we provide a platform for growth, learning, and making a real impact.  "
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-3 sm:p-4 border-2 border-gray-300 hover:border-gray-400 rounded-2xl hover:shadow-md transition-shadow group cursor-pointer bg-[#F9FAFB]!">
                <div className="mb-3 inline-block bg-[#FFFFFF] p-2 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280]">
                  <img src={benefit.icon} alt={benefit.title} className="w-8 h-8 sm:w-9 sm:h-9 transition-all duration-200 group-hover:brightness-0 group-hover:invert" />
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-12 bg-gray-50">
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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
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
              <Card key={index} className="flex flex-col justify-center items-center text-center p-3 sm:p-4 group cursor-pointer border-2 border-gray-300">
                <div className="mb-3 inline-block bg-[#F9FAFB] p-2 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280]">
                  <img src={item.icon} alt={item.title} className="w-8 h-8 sm:w-9 sm:h-9 transition-all duration-200 group-hover:brightness-0 group-hover:invert" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="How to Apply"
            title="Application Process"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
            {[
              {
                step: '1',
                title: 'Apply Online',
                description: 'Submit your application through our contact form or email',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                )
              },
              {
                step: '2',
                title: 'Initial Screening',
                description: 'Our HR team reviews your application and reaches out',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12zm10 3a3 3 0 100-6 3 3 0 000 6z" />
                )
              },
              {
                step: '3',
                title: 'Technical Interview',
                description: 'Meet with our technical team to discuss your skills',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16v10H4V5zm-1 14h18M8 19l1.5-4h5L16 19" />
                )
              },
              {
                step: '4',
                title: 'Join the Team',
                description: 'Receive offer and start your journey with us',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2m7-10a4 4 0 100-8 4 4 0 000 8zm11 10v-2a4 4 0 00-3-3.87M17 3.13a4 4 0 010 7.75" />
                )
              }
            ].map((item) => (
              <div key={item.step} className="text-center relative border-2 border-gray-300 rounded-2xl bg-white p-4 sm:p-5">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <div className="w-11 h-11 bg-[#F9FAFB] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-[#6B7280] to-[#4B5563]">
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
            size="medium"
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

