"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import styles from "@/styles/Pages.module.css";

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export default function ResponsiveLayout({ children, showSidebar = true }: ResponsiveLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.layout}>
      {showSidebar && (
        <SideBar 
          isOpen={isMobile ? isMenuOpen : true} 
          onClose={closeMenu}
        />
      )}

      <main className={styles.mainContent}>
        <Header 
          onMenuToggle={toggleMenu} 
          isMenuOpen={isMenuOpen}
        />
        
        {children}
        
        <Footer />
      </main>
    </div>
  );
}
