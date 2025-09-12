import ResponsiveLayout from "@/components/ResponsiveLayout";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import styles from "@/styles/Pages.module.css";
import localStyles from "./page.module.css";

export default function Redes() {
  return (
    <ResponsiveLayout>
      <SectionTitle title="Redes de Computadoras" />
      <section className={styles.contentSection}>
          
        <div className={styles.cardsContainer}>
          <Card title="Conocimientos Técnicos" className={localStyles.mainCard}>
            <ul className={styles.list}>
              <li>Simulación de redes LAN con direccionamiento IPv4.</li>
              <li>Configuración de enrutamiento estático y dinámico.</li>
              <li>Segmentación de redes mediante subnetting y VLSM.</li>
              <li>Armado de cables de conexión directa y cruzada.</li>
              <li>Conexión y configuración de switches y routers Cisco por consola.</li>
              <li>
                  Familiaridad de múltiples comandos de configuración, tales como: 
                  <ul className={styles.subList}>
                      <li>enable</li>
                      <li>configure terminal</li>
                      <li>interface</li>
                      <li>ip address</li>
                      <li>no shutdown</li>
                      <li>show running-config</li>
                  </ul>
              </li>

            </ul>
          </Card>

          <Card title="Herramientas y Tecnologías" className={localStyles.toolsCard}>
            <ul className={styles.list}>
              <li>Cisco Packet Tracer</li>
              <li>Tera Term</li>
              <li>IPv4, Subnetting, VLSM</li>
              <li>Enrutamiento estático y dinámico</li>
              <li>Protocolos DHCP y TCP</li>
            </ul>
          </Card>
        </div>

      </section>
    </ResponsiveLayout>
  );
}
