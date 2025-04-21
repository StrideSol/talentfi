import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  Search, 
  Menu, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from "lucide-react";

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    title: "Services",
    href: "/#hire-smarter"
  },
  {
    title: "Roles We Source",
    href: "/#roles-we-source"
  },
  {
    title: "Pricing",
    href: "/#pricing"
  },
  {
    title: "About",
    href: "/#about"
  },
  { 
    title: "Contact", 
    href: "/contact" 
  },
];

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#0047FF] text-white py-2 px-4 md:px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm hidden md:block mr-8">
            Your trusted <span className="text-[#FF9500] font-bold">employment partner</span> in South Africa — hire, pay, and manage talent with full compliance
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:underline">
              Get a Quote
            </a>
            <Link href="/admin/login" className="hover:underline">
              Admin
            </Link>
            <div className="flex space-x-2">
              <a href="#" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <div className="h-10 w-48 bg-white flex items-center cursor-pointer">
                  <span className="text-[#0047FF] font-bold text-3xl">talent</span>
                  <span className="text-[#FF9500] font-bold text-3xl">fi</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item, index) => (
                item.title === "Contact" ? (
                  <Link key={index} href={item.href}>
                    <div className="font-semibold hover:text-[#0047FF] cursor-pointer">{item.title}</div>
                  </Link>
                ) : (
                  <a key={index} href={item.href || "#"} className="font-semibold hover:text-[#0047FF] cursor-pointer">
                    {item.title}
                  </a>
                )
              ))}
            </div>

            {/* Search and Mobile Menu */}
            <div className="flex items-center">
              <IconButton 
                onClick={() => setIsSearchOpen(!isSearchOpen)} 
                className="text-[#2d2d2d] p-2 hover:text-[#0047FF]"
                aria-label="Search"
              >
                <Search size={20} />
              </IconButton>
              <Sheet>
                <SheetTrigger asChild>
                  <IconButton 
                    className="text-[#2d2d2d] p-2 hover:text-[#0047FF] lg:hidden"
                    aria-label="Menu"
                  >
                    <Menu size={20} />
                  </IconButton>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-6 py-4">
                    {navItems.map((item, index) => (
                      item.title === "Contact" ? (
                        <Link 
                          key={index} 
                          href={item.href}
                        >
                          <div className="font-bold hover:text-[#0047FF] cursor-pointer">
                            {item.title}
                          </div>
                        </Link>
                      ) : (
                        <a 
                          key={index} 
                          href={item.href || "#"} 
                          className="font-bold hover:text-[#0047FF] cursor-pointer"
                        >
                          {item.title}
                        </a>
                      )
                    ))}
                    <div className="mt-4 space-y-2">
                      <Button className="w-full bg-[#0047FF] hover:bg-[#0035C8]">
                        Get a Quote
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-[#FF9500] text-[#FF9500]"
                        onClick={() => setLocation("/admin/login")}
                      >
                        Admin Login
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Search Overlay (conditionally rendered) */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-95 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Search</h2>
              <IconButton onClick={() => setIsSearchOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </IconButton>
            </div>
            <div className="relative">
              <input
                type="text"
                className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0047FF]"
                placeholder="Search for South African employment services and compliance guides..."
                autoFocus
              />
              <Button className="absolute right-1 top-1 bg-[#0047FF] hover:bg-[#0035C8]">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}