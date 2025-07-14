import React from "react";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark py-6 border-t border-secondary-light dark:border-secondary-dark"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Gulam Ashraf. All rights reserved.
        </p>

        {/* Social / Extra Links (optional) */}
        <div className="flex space-x-4 text-sm">
          <a
            href="https://github.com/ashraf-g"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gulam-ashraf-99633227b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
