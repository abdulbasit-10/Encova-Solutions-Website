import React from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../config/siteConfig';
import encova from '../../public/encova.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F9FAFB] text-gray-700 border-t-3 border-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4 ">
              <div className=" flex items-center justify-center">
                <img src={encova} alt="encova" className='' />
              </div>
              <span className="text-xl font-bold text-gray-500">Encova Solutions</span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Building scalable digital solutions for modern businesses. Transform your ideas into reality with our expert team.
            </p>
            <div className="flex gap-3 ">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-gray-500 group"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                >
                  <path d="M3.72905 7.87305H3.31469C2.53335 7.87305 2.14269 7.87305 1.89995 8.11577C1.65723 8.35852 1.65723 8.74918 1.65723 9.53051V16.5747C1.65723 17.356 1.65723 17.7467 1.89995 17.9894C2.14269 18.2322 2.53335 18.2322 3.31469 18.2322H3.72905C4.51038 18.2322 4.90105 18.2322 5.14378 17.9894C5.38651 17.7467 5.38651 17.356 5.38651 16.5747V9.53051C5.38651 8.74918 5.38651 8.35852 5.14378 8.11577C4.90105 7.87305 4.51038 7.87305 3.72905 7.87305Z" stroke="#111827" stroke-width="1.24309" />
                  <path d="M5.38651 3.52187C5.38651 4.55168 4.55168 5.38651 3.52187 5.38651C2.49206 5.38651 1.65723 4.55168 1.65723 3.52187C1.65723 2.49206 2.49206 1.65723 3.52187 1.65723C4.55168 1.65723 5.38651 2.49206 5.38651 3.52187Z" stroke="#111827" stroke-width="1.24309" />
                  <path d="M10.215 7.87305H9.53051C8.74918 7.87305 8.35852 7.87305 8.11577 8.11577C7.87305 8.35852 7.87305 8.74918 7.87305 9.53051V16.5747C7.87305 17.356 7.87305 17.7467 8.11577 17.9894C8.35852 18.2322 8.74918 18.2322 9.53051 18.2322H9.94487C10.7262 18.2322 11.1169 18.2322 11.3596 17.9894C11.6023 17.7467 11.6023 17.356 11.6023 16.5747L11.6024 13.6742C11.6024 12.3012 12.04 11.188 13.3326 11.188C13.9789 11.188 14.5029 11.7446 14.5029 12.4311V16.1604C14.5029 16.9417 14.5029 17.3324 14.7456 17.5751C14.9883 17.8179 15.379 17.8179 16.1603 17.8179H16.5736C17.3548 17.8179 17.7454 17.8179 17.9881 17.5752C18.2308 17.3326 18.2309 16.942 18.2311 16.1608L18.2322 11.6025C18.2322 9.54294 16.2734 7.87325 14.3345 7.87325C13.2307 7.87325 12.246 8.41429 11.6024 9.26034C11.6023 8.73816 11.6023 8.47711 11.489 8.28327C11.4171 8.1605 11.3148 8.05829 11.1921 7.98648C10.9983 7.87305 10.7372 7.87305 10.215 7.87305Z" stroke="#111827" stroke-width="1.24309" stroke-linejoin="round" />
                </svg>

              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-gray-500 group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-gray-700 transition-colors duration-200 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-gray-500 group"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.12296 8.56328C4.31267 8.56328 4.14355 8.72231 4.14355 9.48408V10.8653C4.14355 11.6272 4.31267 11.7861 5.12296 11.7861H7.08177V17.311C7.08177 18.0728 7.25088 18.2318 8.06118 18.2318H10.02C10.8303 18.2318 10.9994 18.0728 10.9994 17.311V11.7861H13.1988C13.8134 11.7861 13.9718 11.6738 14.1406 11.1183L14.5603 9.73709C14.8495 8.78546 14.6713 8.56328 13.6186 8.56328H10.9994V6.26128C10.9994 5.75273 11.4379 5.34046 11.9788 5.34046H14.7664C15.5766 5.34046 15.7458 5.18147 15.7458 4.41966V2.57804C15.7458 1.81622 15.5766 1.65723 14.7664 1.65723H11.9788C9.27422 1.65723 7.08177 3.71853 7.08177 6.26128V8.56328H5.12296Z" stroke="#111827" stroke-width="1.24309" stroke-linejoin="round" />
                </svg>

              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div  className='px-0 md:px-14 lg:px-16'>
            <h3 className="text-base font-semibold text-gray-900 mb-4 hover:underline">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-base hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors text- hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors text-base hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-gray-900 transition-colors text-base hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4 hover:underline">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web" className="text-gray-600 hover:text-gray-900 transition-colors text-base hover:underline">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/app" className="text-gray-600 hover:text-gray-900 transition-colors text-base hover:underline">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services/uiux" className="text-gray-600 hover:text-gray-900 transition-colors text-base hover:underline">
                  UI/UX Design
                </Link>
              </li>
              {/* <li>
                <Link to="/services/saas" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Cloud & DevOps
                </Link>
              </li> */}
              <li>
                <Link to="/services/ai" className="text-gray-600 hover:text-gray-900 transition-colors text-base hover:underline">
                  Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4 hover:underline">Contact Us</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2 ">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-700 hover:text-gray-900 transition-colors text-base font-normal">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-700 hover:text-gray-900 transition-colors text-base font-normal">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
               <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.8335 15C4.30939 15.3431 3.3335 15.8703 3.3335 16.4614C3.3335 17.4953 6.31826 18.3333 10.0002 18.3333C13.6821 18.3333 16.6668 17.4953 16.6668 16.4614C16.6668 15.8703 15.6909 15.3431 14.1668 15" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12.0832 7.49984C12.0832 8.65042 11.1504 9.58317 9.99984 9.58317C8.84925 9.58317 7.9165 8.65042 7.9165 7.49984C7.9165 6.34925 8.84925 5.4165 9.99984 5.4165C11.1504 5.4165 12.0832 6.34925 12.0832 7.49984Z" stroke="#141B34" stroke-width="1.5"/>
<path d="M11.0477 14.5778C10.7666 14.8485 10.3909 14.9998 10 14.9998C9.609 14.9998 9.23334 14.8485 8.95225 14.5778C6.37842 12.0838 2.92916 9.29775 4.61126 5.25295C5.52075 3.06594 7.70395 1.6665 10 1.6665C12.296 1.6665 14.4792 3.06595 15.3887 5.25295C17.0687 9.29267 13.6278 12.0924 11.0477 14.5778Z" stroke="#141B34" stroke-width="1.5"/>
</svg>

                <span className="text-gray-700 text-base font-normal">{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Encova Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

