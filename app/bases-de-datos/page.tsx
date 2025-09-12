import ResponsiveLayout from "@/components/ResponsiveLayout";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import styles from "@/styles/Pages.module.css";
import localStyles from "./page.module.css";

export default function BasesDatos() {
  return (
    <ResponsiveLayout>
      <SectionTitle title="Bases de Datos" />
      <section className={styles.contentSection}>
          
        <div className={styles.cardsContainer}>
        <Card title="Conocimientos Técnicos" className={localStyles.mainCard}>
              <ul className={styles.list}>
                  <li>SQL Server Management Studio para administrar BD.</li>
                  <li>Operaciones SQL para inserción, modificación, consulta y eliminación de registros.</li>
                  <li>Implementación básica de disparadores (triggers) para automatización de tareas.</li>
                  <li>Desarrollo de procedimientos almacenados (stored procedures).</li>
              </ul>
          </Card>

          <Card title="Consultas" className={localStyles.mainCard}>
              <ul className={styles.list}>
                  <li>
                      Elaboración de consultas simples y avanzadas con:
                      <ul className={styles.subList}>
                          <li>Cláusulas WHERE, ORDER BY, GROUP BY</li>
                          <li>Funciones agregadas (SUM, AVG, etc.)</li>
                          <li>Uniones (JOINs) entre múltiples tablas</li>
                      </ul>
                  </li>
              </ul>  
          </Card>
        </div>

      </section>
    </ResponsiveLayout>
  );
}
