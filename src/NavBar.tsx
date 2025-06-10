import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Using react-icons for menu icons

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 z-50 h-16 w-screen bg-base-dark/90 backdrop-blur flex items-center justify-between px-4 sm:px-6">
        <img src="/logo-autoxs.png" alt="AutoXS Malta" className="h-10 sm:h-12 max-h-12 w-auto object-contain" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-auto gap-8 lg:gap-10">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="text-neutral-200 font-medium hover:text-accent-400 transition-colors">
              {l.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-md text-neutral-200 hover:text-accent-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-200"
          >
            {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`
          md:hidden fixed top-16 left-0 right-0 bg-neutral-900/95 backdrop-blur py-4 shadow-lg z-40
          transform transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
        `}
      >
        <nav className="flex flex-col items-center gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-neutral-200 font-bold hover:text-accent-400 py-2 w-full text-center transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {l.name}
            </a>
          ))}
        </nav>
      </div>
    </>  );
};

export default NavBar;