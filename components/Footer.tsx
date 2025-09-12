import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.title}>Estudios</h3>
          <div className={styles.content}>
            <p className={styles.school}>Tecnológico de Estudios Superiores de Ecatepec</p>
            <p className={styles.degree}>Ingeniería Informática</p>
            <p className={styles.year}>2021 - En curso</p>
          </div>
        </div>
        
        <div className={styles.column}>
          <h3 className={styles.title}>Idiomas</h3>
          <div className={styles.content}>
            <div className={styles.language}>
              <span className={styles.languageName}>Español</span>
              <span className={styles.level}>Nativo</span>
            </div>
            <div className={styles.language}>
              <span className={styles.languageName}>Inglés</span>
              <span className={styles.level}>B2 Intermedio Alto</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
