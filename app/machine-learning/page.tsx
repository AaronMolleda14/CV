import ResponsiveLayout from "@/components/ResponsiveLayout";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import styles from "@/styles/Pages.module.css";
import localStyles from "./page.module.css";

export default function MachineLearning() {
  return (
    <ResponsiveLayout>
      <SectionTitle title="Machine Learning" />
      <section className={styles.contentSection}>
          
        <div className={styles.cardsContainer}>
          <Card title="Conocimientos Técnicos" className={localStyles.mainCard}>
            <ul className={styles.list}>
              <li>Comprensión del funcionamiento y estructura de un perceptrón.</li>
              <li>Conocimientos de fundamentos de redes neruonales artificiales.</li>
              <li>Desarrollo de modelos de regresión para predicción de valores a partir de datos tabulares.</li>
              <li>Desarrollo de modelos de clasificación para reconocimiento y categorizacion de objetos en imagenes.</li>
              <li>Programación en Python.</li>
              <li>
                  Experiencia en el uso de bibliotecas, tales como: 
                  <ul className={styles.subList}>
                      <li>scikit-learn</li>
                      <li>TensorFlow</li>
                      <li>Keras</li>
                      <li>NumPy</li>
                      <li>Pandas</li>
                      <li>Matplotlib</li>
                  </ul>
              </li>

            </ul>
          </Card>
        </div>

      </section>
    </ResponsiveLayout>
  );
}
