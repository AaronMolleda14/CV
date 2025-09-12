import Image from "next/image";
import KnowledgeButton from "@/components/KnowledgeButton";
import styles from "@/styles/SideBar.module.css";

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.imageContainer}>
        <Image src="/FotoPerfil.jpg" alt="Foto de perfil" width={200} height={200} className={styles.profileImage} />
      </div>
      <h2 className={styles.name}>Aaron Molleda</h2>
      <nav className={styles.navLinks}>
        <KnowledgeButton label="Desarrollo Web" href="/desarrollo-web" />
        <KnowledgeButton label="Machine Learning" href="/machine-learning" />
        <KnowledgeButton label="Programación" href="/programacion" />
        <KnowledgeButton label="Redes" href="/redes" />
        <KnowledgeButton label="Bases de Datos" href="/bases-de-datos" />
        <KnowledgeButton label="Volver al Inicio" href="/" />
      </nav>
      <div className={styles.contactInfo}>
        <p>📞 +52 55 7559 3433</p>
        <p>✉️ aaronmolleda14@gmail.com</p>
      </div>
    </aside>
  );
}
