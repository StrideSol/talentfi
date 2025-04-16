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
            <h3 className="text-xl font-bold mb-4">About Global EOR</h3>
            <p className="text-gray-300 mb-4">
              Global EOR is a leading provider of Employer of Record services helping businesses hire and manage employees internationally with full compliance.
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

          {/* Explore Countries */}
          <div>
            <h3 className="text-xl font-bold mb-4">Explore Countries</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">United Kingdom</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Australia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Germany</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Singapore</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Canada</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">View All Countries</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3" />
                <span>100 Global Tower<br />London, UK W1A 1AA</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <a href="mailto:info@globaleor.com" className="hover:text-white">info@globaleor.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <a href="tel:+442045123456" className="hover:text-white">+44 204 512 3456</a>
              </li>
            </ul>
            <Button className="mt-4 inline-block bg-[#FF9500] hover:bg-opacity-90 text-white py-2 px-6 rounded-md font-semibold">
              Get a Quote
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Global EOR Solutions Ltd. All rights reserved.</p>
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
