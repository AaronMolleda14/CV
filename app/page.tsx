"use client";

import Image from "next/image";
import KnowledgeButton from "../components/KnowledgeButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.profileSection}>
        <Image
          src="/FotoPerfil.jpg"
          alt="Foto de perfil"
          width={180}
          height={180}
          className={styles.profileImage}
        />
        <h1 className={styles.name}>Aaron Molleda</h1>
        <p className={styles.welcome}>Bienvenido a mi CV</p>
        <div className={styles.buttonGroup}>
          <KnowledgeButton label="Desarrollo Web" href="/desarrollo-web" />
          <KnowledgeButton label="Programación" href="/programacion" />
          <KnowledgeButton label="Machine Learning" href="/machine-learning" />
          <KnowledgeButton label="Redes" href="/redes" />
          <KnowledgeButton label="Bases de Datos" href="/bases-de-datos" />
        </div>
      </div>
    </div>
  );
}
