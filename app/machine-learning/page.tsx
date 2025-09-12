import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import styles from "@/styles/Pages.module.css";
import localStyles from "./page.module.css";
import Link from "next/link";

export default function MachineLearning() {
  return (
    <div className={styles.layout}>
      <SideBar />

      <main className={styles.mainContent}>
        <Header />

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

        <Footer />
      </main>
    </div>
  );
}
