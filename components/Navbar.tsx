"use client"

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O mně", href: "#about" },
    { name: "Služby", href: "#services" },
    { name: "Reference", href: "#testimonials" },
    { name: "Proces", href: "#process" },
    { name: "Kontakt", href: "#booking" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/5 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-display px-6 text-2xl font-semibold text-[#29303d]">
              Marie Horáková
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#737b8c] hover:text-[#2a6f69] transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <motion.a
            href="#booking"
              className="bg-[#2a6f69] py-2 px-4 rounded-xl text-white hover:bg-[#2a6f69]/90
              shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", duration: 0.1 }}
              >
                Rezervovat konzultaci
              </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 px-6"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden min-h-screen min-w-screen pt-10 py-4 border-t border-border backdrop-blur-lg">
            <div className="flex flex-col items-center text-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black text-xl hover:text-primary transition-colors duration-200 font-semibold py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a className="
              bg-[#2a6f69] text-[#edf8f7] shadow-lg py-4 mt-8 w-50 rounded-xl text-center
             " 
             href="#booking"
             onClick={() => setIsMobileMenuOpen(false)}>
                Rezervovat konzultaci
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
