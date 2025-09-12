"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Header.module.css";

interface HeaderProps {
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

export default function Header({ onMenuToggle, isMenuOpen }: HeaderProps) {
  return (
    <header className={styles.header}>
      <button 
        className={styles.menuButton}
        onClick={onMenuToggle}
        aria-label="Toggle menu"
      >
        <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <h1 className={styles.title}>Aaron Molleda</h1>
    </header>
  );
}
