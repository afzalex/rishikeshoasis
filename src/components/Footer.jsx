import React from 'react';
import { BUSINESS_INFO } from '../config/constants';
import { FaPhone, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{BUSINESS_INFO.name}</h3>
            <p className="text-sm leading-relaxed mb-4">
              {BUSINESS_INFO.description}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3 text-blue-400" />
                <a href={`tel:${BUSINESS_INFO.contact.phone.primary}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.contact.phone.primary}
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="w-5 h-5 mr-3 text-blue-400" />
                <a href={`https://wa.me/${BUSINESS_INFO.contact.phone.whatsapp.replace(/\s+/g, '')}`} 
                   className="hover:text-white transition-colors"
                   target="_blank" 
                   rel="noopener noreferrer">
                  {BUSINESS_INFO.contact.phone.whatsapp}
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 text-blue-400" />
                <a href={`mailto:${BUSINESS_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Location</h3>
            <address className="not-italic text-sm leading-relaxed">
              {BUSINESS_INFO.contact.address.line1}<br />
              {BUSINESS_INFO.contact.address.line2}<br />
              {BUSINESS_INFO.contact.address.city}, {BUSINESS_INFO.contact.address.state}<br />
              {BUSINESS_INFO.contact.address.country} - {BUSINESS_INFO.contact.address.pinCode}
            </address>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-center space-x-6">
            <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href={BUSINESS_INFO.social.twitter} target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 