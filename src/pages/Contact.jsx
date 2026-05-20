import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import siteConfig from '../config/siteConfig';
import AboutHeroImage from '../assets/aboutAssets/AboutHero.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
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

        // Formspree expects specific field names
        formDataToSend.append('name', formData.fullName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
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
            phone: '',
            message: ''
          });
          // Reset success message after 5 seconds
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
    <div className="bg-white pt-5">


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
              Get In <span className="text-gray-600">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-900 leading-relaxed px-2">
              Have a project in mind? Let's discuss how we can help bring your ideas to life
            </p>
          </div>
        </div>
      </section>



      {/* Contact Form & Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex items-center justify-center'>
            <div className="text-center max-w-5xl mx-auto mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
                Let's Build Something Great Together
              </h1>

              <p className="text-sm sm:text-base text-gray-700 max-w-md sm:max-w-xl md:max-w-2xl mx-auto text-center px-4 mb-4">
                Ready to start your project? Get in touch with us today and let's discuss how we can help bring your vision to life.
              </p>

            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Contact Form */}
            <div>
              {/* <SectionTitle 
                subtitle="Send us a message"
                title="Contact Form"
              /> */}

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                  <p className="text-green-400 font-medium">
                    Success: Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              {errors.submit && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
                  <p className="text-red-400 font-medium">
                    {errors.submit}
                  </p>
                </div>
              )}




              <form onSubmit={handleSubmit} className="space-y-5 border border-gray-300 rounded-2xl p-5 sm:p-6 shadow-xl bg-white">
                <h1 className='text-2xl font-bold'>Send us a message</h1>
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
                    className={`w-full px-4 py-2.5 bg-white border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:border-gray-500 transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
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
                    className={`w-full px-4 py-2.5 bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:border-gray-500 transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-white border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:border-gray-500 transition-colors`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-white border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:border-gray-500 transition-colors resize-none`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="medium"
                  className="w-full bg-gray-700 text-white hover:bg-gray-600 cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              {/* <SectionTitle 
                subtitle="Contact Information"
                title="Reach Out To Us"
              /> */}

              <div className="space-y-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Get in touch</h2>
                  <p className='text-gray-600 font-normal text-base'>We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.</p>
                </div>
                <Card className="flex items-start space-x-3 border-none p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-gray-800 transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </Card>

                <Card className="flex items-start space-x-3 border-none p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">Phone</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-600 hover:text-gray-800 transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </Card>

                <Card className="flex items-start space-x-3 border-none p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">{siteConfig.contact.address}</p>
                    <a
                      href={siteConfig.contact.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 text-sm mt-2 inline-block"
                    >
                      View on Map -&gt;
                    </a>
                  </div>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Follow us</h4>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 p-2.5 rounded-lg transition-colors duration-200 hover:bg-gray-500 group"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-200 group-hover:brightness-0 group-hover:invert">
                      <path d="M13.26 6.62976C14.5787 6.62976 15.8435 7.15363 16.776 8.08614C17.7085 9.01864 18.2323 10.2834 18.2323 11.6021V17.4032H14.9174V11.6021C14.9174 11.1626 14.7428 10.741 14.432 10.4301C14.1211 10.1193 13.6996 9.94468 13.26 9.94468C12.8204 9.94468 12.3988 10.1193 12.088 10.4301C11.7771 10.741 11.6025 11.1626 11.6025 11.6021V17.4032H8.2876V11.6021C8.2876 10.2834 8.81147 9.01864 9.74397 8.08614C10.6765 7.15363 11.9412 6.62976 13.26 6.62976Z" stroke="#374151" stroke-width="1.65746" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.97214 7.4585H1.65723V17.4032H4.97214V7.4585Z" stroke="#374151" stroke-width="1.65746" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.31469 4.97227C4.23007 4.97227 4.97214 4.2302 4.97214 3.31481C4.97214 2.39942 4.23007 1.65735 3.31469 1.65735C2.3993 1.65735 1.65723 2.39942 1.65723 3.31481C1.65723 4.2302 2.3993 4.97227 3.31469 4.97227Z" stroke="#374151" stroke-width="1.65746" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </a>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 p-2.5 rounded-lg transition-colors duration-200 hover:bg-gray-500 group"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-200 group-hover:brightness-0 group-hover:invert">
                      <path d="M18.2318 3.31484C18.2318 3.31484 17.6517 5.05517 16.5744 6.13252C17.9003 14.4198 8.7843 20.4695 1.65723 15.7458C3.48043 15.8287 5.30364 15.2485 6.6296 14.0883C2.48596 12.8452 0.414133 7.95573 2.48596 4.14357C4.30916 6.29827 7.12684 7.54136 9.94452 7.45849C9.19866 3.97783 13.2594 1.98888 15.7456 4.30932C16.6572 4.30932 18.2318 3.31484 18.2318 3.31484Z" stroke="#374151" stroke-width="1.65746" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 p-2.5 rounded-lg transition-colors duration-200 hover:bg-gray-500 group"
                  >

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-200 group-hover:brightness-0 group-hover:invert">
                      <path d="M11.364 18.333V10.76h2.542l.381-2.951h-2.923V5.925c0-.854.237-1.436 1.462-1.436h1.562V1.85a20.9 20.9 0 0 0-2.276-.117c-2.252 0-3.794 1.375-3.794 3.898v2.178H5.77v2.951h2.548v7.573h3.046Z" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </a>
                </div>
              </div>
{/* 
              <div className="bg-[#6B7280] rounded-2xl shadow-lg p-8 border-2  border-gray-500 mt-6">
                <h3 className="text-xl font-bold text-white mb-4">Ready to get started?</h3>
                <p className="text-white mb-6">
                  Schedule a free consultation to discuss your project <br />
                  requirements.
                </p>
                <Button to="/contact" variant="primary" className="w-full sm:w-auto bg-white !text-gray-700 hover:bg-gray-100 text-xl">
                  Book a Call
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <div>
      </div>
    </div>
  );
};

export default Contact;
