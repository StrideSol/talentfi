import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  Search, 
  Menu, 
  ChevronDown, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from "lucide-react";

const navItems = [
  {
    title: "About",
    items: [
      { title: "Our Mission", href: "#" },
      { title: "Our Team", href: "#" },
      { title: "Careers", href: "#" },
    ],
  },
  {
    title: "Research",
    items: [
      { title: "Publications", href: "#" },
      { title: "Papers", href: "#" },
      { title: "Infographics", href: "#" },
    ],
  },
  {
    title: "Topics",
    items: [
      { title: "Faith", href: "#" },
      { title: "Society", href: "#" },
      { title: "History", href: "#" },
    ],
  },
  {
    title: "Education",
    items: [
      { title: "Courses", href: "#" },
      { title: "Webinars", href: "#" },
      { title: "Resources", href: "#" },
    ],
  },
  {
    title: "Media",
    items: [
      { title: "Podcast", href: "#" },
      { title: "Videos", href: "#" },
      { title: "Interviews", href: "#" },
    ],
  },
  { title: "Blog", href: "#" },
  { title: "Events", href: "#" },
];

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#0047FF] text-white py-2 px-4 md:px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm hidden md:block">
            Addressing the most pressing issues facing Muslims today
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:underline">
              Donate
            </a>
            <a href="#" className="hover:underline">
              Sign In
            </a>
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
                <a className="h-10 w-36 bg-white flex items-center">
                  <span className="text-[#0047FF] font-bold text-xl">YAQEEN</span>
                  <span className="text-[#2d2d2d] text-sm ml-1">INSTITUTE</span>
                </a>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item, index) => 
                item.items ? (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger className="font-semibold hover:text-[#0047FF] flex items-center">
                      {item.title} <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48">
                      {item.items.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild>
                          <Link href={subItem.href}>
                            <a className="block w-full px-4 py-2 text-sm hover:bg-[#f7f7f7]">
                              {subItem.title}
                            </a>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link key={index} href={item.href || "#"}>
                    <a className="font-semibold hover:text-[#0047FF]">{item.title}</a>
                  </Link>
                )
              )}
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
                    {navItems.map((item, index) => 
                      item.items ? (
                        <div key={index} className="space-y-3">
                          <h4 className="font-bold">{item.title}</h4>
                          <div className="pl-4 space-y-2">
                            {item.items.map((subItem, subIndex) => (
                              <Link key={subIndex} href={subItem.href}>
                                <a className="block text-sm hover:text-[#0047FF]">
                                  {subItem.title}
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link key={index} href={item.href || "#"}>
                          <a className="font-bold hover:text-[#0047FF]">{item.title}</a>
                        </Link>
                      )
                    )}
                    <div className="mt-4 space-y-2">
                      <Button className="w-full bg-[#0047FF] hover:bg-[#0035C8]">
                        Donate
                      </Button>
                      <Button variant="outline" className="w-full border-[#0047FF] text-[#0047FF]">
                        Sign In
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
                className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b0b9]"
                placeholder="Search for topics, articles, and research..."
                autoFocus
              />
              <Button className="absolute right-1 top-1 bg-[#00b0b9] hover:bg-[#00a0a8]">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
