import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About me" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact me" },
  ];

  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-['K2D'] text-2xl font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
            LOGO
          </div>

          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              const textColor = index === 0 ? "text-white" : "text-gray-400";
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${textColor} hover:text-orange-500 transition`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-block bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition text-center"
          >
            Hire Me
          </a>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <IoClose /> : <HiMenu />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-black border-t border-gray-800">
          {navItems.map((item, index) => {
            const textColor = index === 0 ? "text-white" : "text-gray-400";
            return (
              <a
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 ${textColor} hover:bg-gray-900 hover:text-orange-500 rounded transition`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href="#contact"
            className="block bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
