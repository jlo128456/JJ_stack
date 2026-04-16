import { forwardRef } from "react";
import { styles } from "../styles";
import { services } from "../data";

const Services = forwardRef(({ sectionAnim }, ref) => (
  <section
    id="services"
    ref={ref}
    className="section"
    style={{
      ...styles.section,
      ...sectionAnim("services"),
      transition: "all .8s cubic-bezier(.16,1,.3,1)",
    }}
  >
    <div style={styles.container}>
      <div style={{styles.sectionLabel, fontSize: '1.5rem'}}>◈ WHAT WE DO</div>
            <div className="services-grid" style={styles.servicesGrid}>
        {services.map((s, i) => (
          <div key={s.id} style={{ ...styles.serviceCard, animationDelay: `${i * 0.1}s` }}>
            <span style={styles.serviceIcon}>{s.icon}</span>
            <h3 style={styles.serviceTitle}>{s.title}</h3>
            <p style={styles.serviceDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

export default Services;