import Image from "next/image";
import KnowledgeButton from "@/components/KnowledgeButton";
import styles from "@/styles/SideBar.module.css";

interface SideBarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function SideBar({ isOpen = true, onClose }: SideBarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}></div>
      )}
      
      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <div className={styles.imageContainer}>
          <Image src="/FotoPerfil.jpg" alt="Foto de perfil" width={200} height={200} className={styles.profileImage} />
        </div>
        <h2 className={styles.name}>Aaron Molleda</h2>
        <nav className={styles.navLinks}>
          <KnowledgeButton label="Desarrollo Web" href="/desarrollo-web" onClick={onClose} />
          <KnowledgeButton label="Programación" href="/programacion" onClick={onClose} />
          <KnowledgeButton label="Machine Learning" href="/machine-learning" onClick={onClose} />
          <KnowledgeButton label="Redes" href="/redes" onClick={onClose} />
          <KnowledgeButton label="Bases de Datos" href="/bases-de-datos" onClick={onClose} />
          <KnowledgeButton label="Volver al Inicio" href="/" onClick={onClose} />
        </nav>
        <div className={styles.contactInfo}>
          <p>📞 +52 55 7559 3433</p>
          <p>✉️ aaronmolleda14@gmail.com</p>
        </div>
      </aside>
    </>
  );
}
