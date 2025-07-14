import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <>
      <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
        <Header />
        <main role="main" className="text-text-light dark:text-text-dark">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Main;
