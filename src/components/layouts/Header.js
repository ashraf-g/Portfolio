import React, { useState, useEffect } from "react";
import ThemeToggle from "../ThemeToggle";
import Logo from "../../assets/images/nav-logo.png";
import Resume from "../../assets/GulamAshraf.pdf";

const sections = ["home", "about", "projects", "contact"];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const offsetHeight = section.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark border-b border-secondary-light dark:border-secondary-dark sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Ashraf Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="font-burtons text-xl text-primary-light dark:text-secondary-dark">
            Gulam Ashraf
          </span>
        </div>

        {/* Navigation */}
        <nav aria-label="Primary Navigation">
          <ul className="flex space-x-6">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleScrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? "text-primary-light dark:text-secondary-dark font-semibold"
                      : "hover:text-primary-light dark:hover:text-secondary-light"
                  }`}
                  aria-current={activeSection === section ? "page" : undefined}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions: Theme Toggle + Resume */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a
            href={Resume}
            download
            rel="noopener noreferrer"
            className="bg-primary-light dark:bg-secondary-dark text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-200 shadow-md"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
