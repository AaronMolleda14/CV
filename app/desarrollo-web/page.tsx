import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import styles from "@/styles/Pages.module.css";
import localStyles from "./page.module.css";
import Link from "next/link";

export default function DesarrolloWeb() {
  return (
    <div className={styles.layout}>
      <SideBar />

      <main className={styles.mainContent}>
        <Header />

        <SectionTitle title="Desarrollo Web" />
        <section className={styles.contentSection}>

          <div className={styles.cardsContainer}>
            <Card title="Frontend" className={localStyles.cards}>
              <ul className={styles.list}>
                <li>Desarrollo en Next.js y React</li>
                <li>HTML, CSS, JavaScript, TypeScript</li>
                <li>Componentes Funcionales y Hooks</li>
                <li>Estado Global con Context API</li>
                <li>Rutas Dinámicas y Estáticas</li>
                <li>Consumo de APIs</li>
              </ul>
            </Card>

            <Card title="Backend" className={localStyles.cards}>
              <ul className={styles.list}>
                <li>Node.js, Express</li>
                <li>Bases de Datos NoSQL</li>
                <li>MongoDB, Firebase</li>
                <li>Desarrollo de APIs</li>
                <li>Autenticación y Autorización JWT</li>
                <li>Despliegue en Vercel</li>
              </ul>
            </Card>

            <Card title="Herramientas" className={localStyles.toolsCard}>
              <ul className={styles.list}>
                <li>Visual Studio Code</li>
                <li>Cursor</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Atlas MongoDB</li>
                <li>Firebase</li>
                <li>Postman</li>
              </ul>
            </Card>
          </div>
          
        </section>

        <Footer />
      </main>
    </div>
  );
}
