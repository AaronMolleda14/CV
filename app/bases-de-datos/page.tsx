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
        <Card title="Bases de Datos SQL" className={localStyles.mainCard}>
              <ul className={styles.list}>
                  <li>Uso de SQL Server y MySQL.</li>
                  <li>SQL Server Management Studio y phpMyAdmin para administrar BD.</li>
                  <li>Operaciones SQL para inserción, modificación, consulta y eliminación de registros.</li>
                  <li>Cláusulas WHERE, ORDER BY, GROUP BY.</li>
                  <li>Funciones agregadas (SUM, AVG, etc.).</li>
                  <li>Uniones (JOINs) entre múltiples tablas.</li>
              </ul>
          </Card>

          <Card title="Bases de Datos NoSQL" className={localStyles.mainCard}>
              <ul className={styles.list}>
                  <li>Uso de PostgreSQL MongoDB y Firebase para almacenar y gestionar datos.</li>
                  <li>Creación de modelos, tablas, colecciones y documentos.</li>
                  <li>Implementación de índices para optimización de consultas.</li>
                  <li>Conexión de bases de datos a aplicaciones web.</li>
              </ul>
          </Card>
        </div>

      </section>
    </ResponsiveLayout>
  );
}
