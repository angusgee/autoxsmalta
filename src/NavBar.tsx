import React from "react";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

const NavBar: React.FC = () => (
  <header className="fixed top-0 z-50 h-16 w-screen bg-base-dark/90 backdrop-blur flex items-center px-6">
    <img src="/logo-autoxs.png" alt="AutoXS Malta" className="h-12 max-h-12 w-auto object-contain" />

    <nav className="ml-auto flex gap-10">
      {links.map((l) => (
        <a key={l.name} href={l.href} className="text-gray-100 font-medium hover:text-accent-400">
          {l.name}
        </a>
      ))}
    </nav>
  </header>
);

export default NavBar;