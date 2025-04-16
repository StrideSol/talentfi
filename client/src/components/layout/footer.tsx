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
            <h3 className="text-xl font-bold mb-4">About Yaqeen</h3>
            <p className="text-gray-300 mb-4">
              Yaqeen Institute for Islamic Research is a research institute that aims to address the most pressing questions facing Muslims today.
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
              <li><a href="#" className="text-gray-300 hover:text-white">Our Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Publications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Media</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Explore Topics */}
          <div>
            <h3 className="text-xl font-bold mb-4">Explore Topics</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Faith</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Society</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">History</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Spirituality</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Education</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">View All Topics</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3" />
                <span>3000 Custer Road, Suite 270<br />Plano, TX 75075</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <a href="mailto:info@yaqeeninstitute.org" className="hover:text-white">info@yaqeeninstitute.org</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <a href="tel:+1234567890" className="hover:text-white">(123) 456-7890</a>
              </li>
            </ul>
            <Button className="mt-4 inline-block bg-[#00b0b9] hover:bg-opacity-90 text-white py-2 px-6 rounded-md font-semibold">
              Donate Now
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Yaqeen Institute for Islamic Research. All rights reserved.</p>
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
