import React from "react";
import styles from "@/styles/Card.module.css";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className }: CardProps) {
  return (
    <div className={`${styles.card} ${className ? className : ""}`}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <hr className={styles.cardDivider} />
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}
