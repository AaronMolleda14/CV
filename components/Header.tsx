import Image from "next/image";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Aaron Molleda</h1>
    </header>
  );
}
