import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-12 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-kisan-green-dark mb-4">KisanSarthi</h3>
            <p className="text-gray-600 mb-4">
              Empowering farmers with smart fertilizer recommendations for better harvests and sustainable agriculture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-kisan-green-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-kisan-green-dark transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-kisan-green-dark transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-kisan-green-dark transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-kisan-green-dark transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-kisan-green-dark transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-kisan-green-dark transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-kisan-green-dark transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-kisan-green-dark transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-kisan-green-dark transition-colors">
                  Soil Analysis Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-kisan-green-dark transition-colors">
                  Fertilizer Database
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-kisan-green-dark transition-colors">
                  Crop Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-kisan-green-dark transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-kisan-green-dark transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-kisan-green-dark mr-2 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Agri Tower, Sector 18<br />
                  New Delhi, 110001
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-kisan-green-dark mr-2 flex-shrink-0" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-kisan-green-dark mr-2 flex-shrink-0" />
                <span className="text-gray-600">support@kisansarthi.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-200 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} KisanSarthi. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-kisan-green-dark transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-kisan-green-dark transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-kisan-green-dark transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;