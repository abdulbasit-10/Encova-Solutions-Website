import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import TestimonialCarousel from '../components/TestimonialCarousel';
import siteConfig from '../config/siteConfig';
import video from "../assets/homeAssets/backgroundVideo.mp4";
import contact from "../assets/homeAssets/contact.svg"
import arrow from "../assets/homeAssets/arrow.svg";
import explore from "../assets/homeAssets/explore.svg"
import expert from "../assets/homeAssets/expert.svg";
import fast from "../assets/homeAssets/fast.svg";
import qa from "../assets/homeAssets/qa.svg";
import support from "../assets/homeAssets/support.svg";
import email from '../assets/contactAssests/email.svg';
import phone from '../assets/contactAssests/phone.svg';
import location from '../assets/contactAssests/location.svg';
import github from '../assets/contactAssests/github.svg';
import linkedin from '../assets/contactAssests/linkedin.svg';
import twitter from '../assets/contactAssests/twitter.svg';
import message from '../assets/contactAssests/message.svg';



const Home = () => {
  const words = ['Solution','Experiences', 'Excellence', 'Innovation'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="bg-white py-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-8 flex flex-col justify-center items-center">
       <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900 leading-tight ">
  <span className="block">
    Transforming Ideas Into
  </span>

  <span className="mt-2 flex items-center  gap-3 border-gray-200 px-4 py-2 text-gray-500">
    {/* Fixed word */}
    <span>Digital</span>

    {/* Changing word only */}
    <span className="relative inline-block  text-left">
      <span className="animate-word-rotate inline-block">
        {words[currentWordIndex]}
      </span>
    </span>
  </span>
</h1>



            
            <p className="text-xl md:text-3xl text-gray-900 max-w-5xl mx-auto">
             A leading IT company delivering scalable web, mobile, UI/UX, AI, and design services for modern businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                to="/contact" 
                variant="primary" 
                size="large"
                className='gap-2 flex justify-center items-center bg-gray-600! hover:bg-gray-700!'
              >
                <img src={contact} alt={contact} />
                Contact Us
                <img src={arrow} alt={arrow} />
              </Button>
              <Button 
                to="/services" 
                variant="outline" 
                size="large"
                className=" hover:text-white border-none flex justify-center items-center gap-2"
              >
                <img src={explore} alt={explore} className="group-hover:brightness-0 group-hover:invert transition-all hover:text-white" />
                Explore Services
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div> */}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Services"
            centered
          />

          <div className='flex justify-center items-center'>
            <p className='w-138 text-center'>
              Comprehensive technology solutions to help your business innovate, scale, and succeed in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {siteConfig.services.slice(0, 6).map((service) => (
              <Link key={service.id} to={`/services/${service.id}`}>
                <Card className="h-full group cursor-pointer p-6 border-gray-200 hover:border-gray-500 border-2">
                  <div className="mb-4 inline-block bg-[#F9FAFB] p-4 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280]">
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-gray-500 font-medium text-xl">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="primary" size="large">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Encova Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Features */}
            <div className="space-y-6">
              {[
                {
                  icon: expert,
                  title: 'Expert Team',
                  description: 'Skilled professionals with years of industry experience'
                },
                {
                  icon: fast,
                  title: 'Fast Delivery',
                  description: 'Efficient processes ensure timely project completion'
                },
                {
                  icon: qa,
                  title: 'Quality Assured',
                  description: 'Rigorous testing and quality control standards'
                },
                {
                  icon: support,
                  title: '24/7 Support',
                  description: 'Dedicated support team always ready to help'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-10">
                  <div className=" p-4 bg-gray-500 text-white rounded-lg flex items-center justify-center">
                    <img src={item.icon} alt={item.title} className="" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Track Record Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#6B7280] text-center mb-8">
                Our Track Record
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    number: '150+',
                    label: 'Projects Delivered',
                    sublabel: 'Successfully completed'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    number: '5+',
                    label: 'Years Experience',
                    sublabel: 'In the industry'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    number: '50+',
                    label: 'Global Clients',
                    sublabel: 'Across 20 countries'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    ),
                    number: '98%',
                    label: 'Client Satisfaction',
                    sublabel: 'And growing'
                  }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <SectionTitle 
            title="Featured Projects"
            subtitle={"Real projects, real results. See how we've helped businesses transform their digital presence."}
            centered
          /> */}

<div>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
  <p className="text-gray-600 max-w-2xl mx-auto text-center">Real projects, real results. See how we've helped businesses transform their <br /> digital presence.</p>
</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
            {siteConfig.portfolio.slice(0, 3).map((project) => (
              <Card key={project.id} className="overflow-hidden p-0 group cursor-pointer border-gray-200 hover:border-none border-2 shadow-2xl">
                <div className="h-48 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 "
                  />
                  {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="primary">View Details</Button>
                  </div> */}
                </div>
                <div className="p-6">
                  <div className="inline-block
        text-base 
        uppercase 
        mb-2 
        font-normal 
        text-gray-500
        origin-left
        transition-all
        duration-300
        group-hover:px-3
        group-hover:py-1
        group-hover:bg-gray-200
        group-hover:border
        group-hover:border-gray-300
        group-hover:rounded-full
        group-hover:scale-x-110">
                    {siteConfig.services.find(s => s.id === project.category)?.name}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                  {/* <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-400 text-gray-600 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div> */}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/portfolio" variant="primary" size="large" className='flex items-center justify-center gap-2'>
              View All Projects   <img src={arrow} alt={arrow}  className='w-6 h-6'/>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="What Our Clients Say"
            centered
          />
          <div className='flex justify-center items-center flex-col gap-10 text-[#374151] mb-8'>
            <p className='w-80 md:w-120 text-center'>
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
            <h3 className="text-sm font-semibold tracking-wider">TRUSTED BY LEADING COMPANIES</h3>
          </div>

          <div className="flex justify-center items-center gap-30 mb-18 flex-wrap">
            {['TC', 'IL', 'DF', 'C9', 'NG', 'DW'].map((logo, index) => (
              <div 
                key={index} 
                className="w-20 h-20 flex items-center justify-center bg-white border-2 border-gray-200 rounded-xl text-gray-500 font-semibold hover:border-gray-400 transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gray-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Let's discuss how we can help bring your ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              to="/contact" 
              variant="secondary" 
              size="large"
              // className="bg-white text-[#a3cef1] hover:bg-gray-100"
            >
              Get Started Today
            </Button>
            <Button 
              to="/portfolio" 
              variant="outline" 
              size="large"
              className="border-white text-white hover:bg-blue-300 hover:text-blue-600"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Get in touch with us today and let's discuss how we can help bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactFormSection />

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
                <p className="text-gray-700 mb-8">
                  We're here to answer any questions you may have about our services. <br />Reach out to us and we'll respond as soon as we can.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#6B7280] p-3 rounded-lg hover:bg-gray-600">
                      <img src={email} alt="Email" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@encovasolutions.com" className="text-gray-600 hover:text-gray-900">
                        info@encovasolutions.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#6B7280] p-3 rounded-lg hover:bg-gray-600">
                      <img src={phone} alt="Phone" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+12345678890" className="text-gray-600 hover:text-gray-900">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#6B7280] p-3 rounded-lg hover:bg-gray-600">
                      <img src={location} alt="Office" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
                      <p className="text-gray-600">
                        123 Tech Street, Suite 400<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Follow us</h4>
                  <div className="flex gap-4">
                    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gray-500 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                      <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                    </a>
                    <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="bg-gray-500 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                      <img src={twitter} alt="Twitter" className="w-5 h-5" />
                    </a>
                    <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="bg-gray-500 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                      <img src={github} alt="GitHub" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Ready to get started card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2  border-gray-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
                <p className="text-gray-700 mb-6">
                  Schedule a free consultation to discuss your project <br />
                  requirements.
                </p>
                <Button to="/contact" variant="primary" className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Form Component
const ContactFormSection = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.fullName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('company', formData.company);
        formDataToSend.append('message', formData.message);

        const response = await fetch('https://formspree.io/f/xbdrdnrd', {
          method: 'POST',
          body: formDataToSend,
          headers: {
            'Accept': 'application/json'
          }
        });

        const responseData = await response.json();

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({
            fullName: '',
            email: '',
            company: '',
            message: ''
          });
          
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        } else {
          const errorMessage = responseData.errors 
            ? Object.values(responseData.errors).flat().join(', ')
            : responseData.error || 'Form submission failed';
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ submit: error.message || 'Failed to send message. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-500">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 font-medium">
            ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      )}

      {errors.submit && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 font-medium">
            {errors.submit}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors`}
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors`}
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company / Project
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-3 bg-white border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors resize-none`}
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          {!isSubmitting && (
            <img src={message} alt="Send" className="w-5 h-5" />
          )}
        </button>
      </form>
    </div>
  );
};

export default Home;

