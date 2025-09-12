import ResponsiveLayout from "@/components/ResponsiveLayout";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import styles from "@/styles/Pages.module.css";
import localStyles from "./page.module.css";

export default function Programacion() {
  return (
    <ResponsiveLayout>
      <SectionTitle title="Programación y Desarrollo de Software" />
      <section className={styles.contentSection}>
          
        <div className={styles.cardsContainer}>
          <Card title="Java, C#" className={localStyles.mainCard}>
            <ul className={styles.list}>
              <li>Desarrollo de aplicaciones de escritorio.</li>
              <li>Programación orientada a objetos.</li>
              <li>Creación de interfaces gráficas.</li>
              <li>Conexión a bases de datos SQL.</li>
              <li>Uso de Visual Studio 2022 y Apache NetBeans.</li>
            </ul>
          </Card>

          <Card title="JavaScript y TypeScript" className={localStyles.mainCard}>
            <ul className={styles.list}>
              <li>Desarrollo de aplicaciones web con React y Next.js.</li>
              <li>Desarrollo y consumo de APIs REST.</li>
              <li>Autenticación y manejo de sesiones.</li>
              <li>Interfaces gráficas responsivas.</li>
              <li>Conexión a bases de datos NoSQL.</li>
            </ul>
          </Card>

          <Card title="Python" className={localStyles.mainCard}>
            <ul className={styles.list}>
              <li>Creación de redes neuronales.</li>
              <li>Desarrollo de modelos de regresión y clasificación.</li>
              <li>Automatización de tareas.</li>
              <li>Análisis y procesamiento de datos.</li>
              <li>Creación de interfaces gráficas simples.</li>
            </ul>
          </Card>

          <Card title="C++" className={localStyles.mainCard}>
            <ul className={styles.list}>
              <li>Programación de sistemas embebidos.</li>
              <li>Familiaridad con Arduino IDE y librerías.</li>
              <li>Automatización de tareas básicas con hardware.</li>
              <li>
                  Programación de tarjetas como:
                  <ul className={styles.subList}>
                      <li>Arduino</li>
                      <li>Raspberry Pi</li>
                      <li>ESP32</li>
                  </ul>
              </li>
            </ul>
          </Card>
        </div>

      </section>
    </ResponsiveLayout>
  );
}
