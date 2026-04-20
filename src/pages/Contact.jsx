import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import siteConfig from '../config/siteConfig';
import AboutHeroImage from '../assets/aboutAssets/AboutHero.png';
import twitter from '../assets/contactAssests/twitter.svg';
import linkedin from '../assets/contactAssests/linkedin.svg';
import github from '../assets/contactAssests/github.svg';

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      `Project timelines vary based on scope and complexity. A typical web application takes 3-6 
      months, while mobile apps range from 4-8 months. We provide detailed timelines during the
       discovery phase.`,
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, we offer comprehensive support and maintenance packages including bug fixes, updates, performance monitoring, and feature enhancements.",
  },
  {
    question: "What is your pricing model?",
    answer:
      `We offer flexible pricing models including fixed-price projects, time & materials, and 
      dedicated team arrangements. Pricing depends on project scope, timeline, and resource requirements.`,
  },
  {
    question: "Can you work with our existing team?",
    answer:
      `Absolutely! We can augment your existing team with our experts or work collaboratively on
       specific project components.`,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_FILE_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/png',
    'image/jpg'
  ];

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

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        newErrors.file = 'File size must be less than 5MB';
      }
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        newErrors.file = 'File type not supported. Please upload PDF, DOC, DOCX, JPG, or PNG files';
      }
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

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Clear file error when user selects a new file
      if (errors.file) {
        setErrors(prev => ({
          ...prev,
          file: ''
        }));
      }
    }
  };

  const removeFile = () => {
    setFile(null);
    // Reset the file input
    const fileInput = document.getElementById('file');
    if (fileInput) fileInput.value = '';
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

        // Note: File uploads are not included as they require a paid Formspree plan
        // If you have a file attached, it will be mentioned in the message
        if (file) {
          formDataToSend.set('message',
            `${formData.message}\n\n[Note: User attempted to attach file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)]`
          );
        }

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
          setFile(null);
          // Reset the file input
          const fileInput = document.getElementById('file');
          if (fileInput) fileInput.value = '';

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
      <section className="relative py-20 bg-gray-100 ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-2 lg:py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get In <span className="text-gray-600">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed px-2">
              Have a project in mind? Let's discuss how we can help bring your ideas to life
            </p>
          </div>
        </div>
      </section>



      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex items-center justify-center'>
            <div className="text-center max-w-5xl mx-auto mb-12 ">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center">
                Let's Build Something Great Together
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md sm:max-w-xl md:max-w-2xl mx-auto text-center px-4 mb-4">
                Ready to start your project? Get in touch with us today and let's discuss how we can help bring your vision to life.
              </p>

            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div>
              {/* <SectionTitle 
                subtitle="Send us a message"
                title="Contact Form"
              /> */}

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                  <p className="text-green-400 font-medium">
                    ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
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




              <form onSubmit={handleSubmit} className="space-y-8 space-x-6 border border-gray-300 rounded-2xl p-8 shadow-2xl bg-white">
                <h1 className='text-3xl font-bold'>Send us a message</h1>
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
                    className={`w-full px-4 py-3 bg-white border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:border-gray-500 transition-colors`}
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
                    className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:border-gray-500 transition-colors`}
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
                    className={`w-full px-4 py-3 bg-white border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:border-gray-500 transition-colors`}
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
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-900 focus:outline-none focus:border-gray-500 transition-colors resize-none`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* File Upload */}
                {/* <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                    Attach File (Optional)
                  </label>
                  <p className="text-xs text-gray-600 mb-2">
                    Upload CV, Resume, or relevant documents (PDF, DOC, DOCX, JPG, PNG - Max 5MB)
                  </p>
                  <p className="text-xs text-yellow-600 mb-2">
                    Note: File name will be included in your message. For actual file delivery, please send via email.
                  </p>
                  
                  {!file ? (
                    <div className="relative">
                      <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="hidden"
                      />
                      <label
                        htmlFor="file"
                        className={`w-full px-4 py-3 bg-white border ${errors.file ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-600 hover:border-gray-500 transition-colors cursor-pointer flex items-center justify-center space-x-2`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span>Click to upload file</span>
                      </label>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg">
                      <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <svg className="w-5 h-5 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-900 text-sm truncate">{file.name}</p>
                          <p className="text-gray-600 text-xs">{(file.size / 1024).toFixed(2)} KB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="ml-2 text-red-400 hover:text-red-300 transition-colors flex-shrink-0"
                        aria-label="Remove file"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                  
                  {errors.file && (
                    <p className="mt-1 text-sm text-red-400">{errors.file}</p>
                  )}
                </div> */}

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
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

              <div className="space-y-6 mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
                  <p className='text-gray-600 font-normal text-lg'>We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.</p>
                </div>
                <Card className="flex items-start space-x-4 border-none">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                <Card className="flex items-start space-x-4 border-none">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                <Card className="flex items-start space-x-4 border-none">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      View on Map →
                    </a>
                  </div>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Follow us</h4>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-500 group"
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
                    className="border-2 border-gray-300 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-500 group"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-200 group-hover:brightness-0 group-hover:invert">
                      <path d="M18.2318 3.31484C18.2318 3.31484 17.6517 5.05517 16.5744 6.13252C17.9003 14.4198 8.7843 20.4695 1.65723 15.7458C3.48043 15.8287 5.30364 15.2485 6.6296 14.0883C2.48596 12.8452 0.414133 7.95573 2.48596 4.14357C4.30916 6.29827 7.12684 7.54136 9.94452 7.45849C9.19866 3.97783 13.2594 1.98888 15.7456 4.30932C16.6572 4.30932 18.2318 3.31484 18.2318 3.31484Z" stroke="#374151" stroke-width="1.65746" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </a>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-500 group"
                  >

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-200 group-hover:brightness-0 group-hover:invert">
                      <g clip-path="url(#clip0_289_3726)">
                        <path d="M12.4307 18.2319V14.917C12.546 13.8789 12.2484 12.837 11.602 12.0165C14.0882 12.0165 16.5744 10.359 16.5744 7.45845C16.6407 6.42254 16.3506 5.4032 15.7457 4.5579C15.9777 3.60486 15.9777 2.61039 15.7457 1.65735C15.7457 1.65735 14.9169 1.65735 13.2595 2.90044C11.0716 2.48608 8.81748 2.48608 6.62963 2.90044C4.97217 1.65735 4.14345 1.65735 4.14345 1.65735C3.89483 2.61039 3.89483 3.60486 4.14345 4.5579C3.54003 5.39979 3.24715 6.42485 3.31472 7.45845C3.31472 10.359 5.8009 12.0165 8.28709 12.0165C7.96389 12.4225 7.72356 12.8866 7.58267 13.3839C7.44179 13.8811 7.40035 14.4032 7.45836 14.917V18.2319" stroke="#374151" stroke-width="1.65746" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.45833 14.9171C3.72076 16.5746 3.31469 13.2596 1.65723 13.2596" stroke="#374151" stroke-width="1.65746" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_289_3726">
                          <rect width="19.8895" height="19.8895" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                  </a>
                </div>
              </div>


              {/* Office Hours */}
              {/* <Card className="mt-8">
                <h3 className="text-gray-900 font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-900">Closed</span>
                  </div>
                </div>
              </Card> */}


              <div className="bg-[#6B7280] rounded-2xl shadow-lg p-8 border-2  border-gray-500 mt-6">
                <h3 className="text-xl font-bold text-white mb-4">Ready to get started?</h3>
                <p className="text-white mb-6">
                  Schedule a free consultation to discuss your project <br />
                  requirements.
                </p>
                <Button to="/contact" variant="primary" className="w-full sm:w-auto bg-white !text-gray-700 hover:bg-gray-100 text-xl">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      {/* <section className="h-96 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-400">Map integration placeholder</p>
            <p className="text-gray-500 text-sm mt-2">{siteConfig.contact.address}</p>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-white ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Find answers to common questions about working with Encova Solutions.
            </p>
          </div>

          {/* FAQ items */}
          <div className="space-y-4 sm:space-y-6 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-lg bg-gray-50 border border-gray-200"
              >
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm sm:text-base text-gray-700" style={{ whiteSpace: 'pre-line' }}>{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Contact link */}
          <div className="text-center mt-8 sm:mt-10 text-gray-600 px-2">
            <p className="text-sm sm:text-base">Still have questions?</p>
            <a
              href="/contact"
              className="inline-flex items-center mt-2 text-gray-600 font-normal hover:underline text-sm sm:text-base flex  items-center justify-center gap-1 "
            >
              Contact our team <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-gray-800 transition-colors">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </a>
          </div>
        </div>
      </section>

      <div>
        <div className=''>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.677390836361!2d71.54286077517469!3d34.00081932044483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917bf1e05455d%3A0x9bb0d74b7b5d5600!2sDeans%20Shopping%20Mall%20(Deans%20Trade%20Center%20Peshawar)!5e0!3m2!1sen!2s!4v1770201743852!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />

        </div>
      </div>
    </div>
  );
};

export default Contact;

