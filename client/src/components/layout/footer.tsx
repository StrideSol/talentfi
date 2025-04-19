import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">About talentfi</h3>
            <p className="text-gray-300 mb-4">
              talentfi is South Africa's premier Employer of Record service helping international businesses hire and manage employees in South Africa with full compliance.
            </p>
            <div className="flex space-x-4 text-gray-300">
              <a href="#" className="hover:text-white" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-white" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="hover:text-white" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Our Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Global Compliance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Explore Regions */}
          <div>
            <h3 className="text-xl font-bold mb-4">Explore South Africa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Cape Town</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Johannesburg</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Durban</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Pretoria</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Port Elizabeth</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">View All Regions</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3" />
                <span>25 Sandton Drive<br />Sandton, Johannesburg 2196</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <a href="mailto:info@talentfi.co.za" className="hover:text-white">info@talentfi.co.za</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <a href="tel:+27112345678" className="hover:text-white">+27 11 234 5678</a>
              </li>
            </ul>
            <img 
              src="/images/talentfilogo.png" 
              alt="talentfi logo" 
              className="mt-4 h-24 w-auto"
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} talentfi (Pty) Ltd. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
