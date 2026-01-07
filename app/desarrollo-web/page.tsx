import ResponsiveLayout from "@/components/ResponsiveLayout";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import KnowledgeButton from "@/components/KnowledgeButton";
import styles from "@/styles/Pages.module.css";
import localStyles from "./page.module.css";

export default function DesarrolloWeb() {
  return (
    <ResponsiveLayout>
      <SectionTitle title="Desarrollo Web" />
      <section className={styles.contentSection}>

        <div className={styles.cardsContainer}>
          <Card title="Frontend" className={localStyles.cards}>
            <ul className={styles.list}>
              <li>Desarrollo en Next.js y React.</li>
              <li>HTML, CSS, JavaScript, TypeScript.</li>
              <li>Componentes Funcionales y Hooks.</li>
              <li>Estado Global con Context API.</li>
              <li>Rutas Dinámicas y Estáticas.</li>
              <li>Consumo de APIs.</li>
            </ul>
          </Card>

          <Card title="Backend" className={localStyles.cards}>
            <ul className={styles.list}>
              <li>Node.js, Express.</li>
              <li>Bases de Datos SQL y NoSQL.</li>
              <li>MongoDB, PostgreSQL, Firebase.</li>
              <li>Desarrollo de APIs.</li>
              <li>Autenticación y Autorización JWT.</li>
              <li>Despliegue en Vercel.</li>
            </ul>
          </Card>

          <Card title="Herramientas" className={localStyles.cards}>
            <ul className={styles.list}>
              <li>Visual Studio Code y Cursor.</li>
              <li>Git y GitHub.</li>
              <li>Atlas MongoDB.</li>
              <li>Supabase PostgreSQL.</li>
              <li>Firebase.</li>
              <li>Postman.</li>
            </ul>
          </Card>

          <Card title="Proyectos" className={localStyles.cards}>
            <div className={localStyles.buttonGroup}>
              <KnowledgeButton label="Sitio web de Gimnasio" href="https://gym-omega-two.vercel.app" />
              <KnowledgeButton label="Sitio web de Recetas" href="https://recipe-book-five-rho.vercel.app" />
              <KnowledgeButton label="E-Commerce" href="https://e-commerce-omega-eight-44.vercel.app" />
            </div>
          </Card>
        </div>
      </section>
    </ResponsiveLayout>
  );
}
