import '../styles/Navbar.css'
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`header transition-all duration-300 ${scrolled ? "scrolled" : ""}`}
    >
      <div className="nav-inner flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        {/* Links */}
        <nav className="nav-links flex gap-8">
          {["work", "services", "network", "about", "contact"].map((section) => (
            <a
              key={section}
              onClick={() => handleScrollTo(section)}
              className="nav-link"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        {/* Name */}
        <div
          className="logo cursor-pointer"
          onClick={() => handleScrollTo("home")}
        >
          Abhishek Zatakiya
        </div>
      </div>
    </header>


  );
}
