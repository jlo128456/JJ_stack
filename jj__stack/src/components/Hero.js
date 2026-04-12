import { forwardRef } from "react";
import { styles } from "../styles";

const LOGO = "/logo512.png";

const Hero = forwardRef(({ sectionAnim }, ref) => (
  <section id="home" ref={ref} style={styles.hero}>
    <div style={styles.heroGrid} />
    <img src={LOGO} alt="" style={styles.watermark} />
    <div style={styles.heroGlow} />
    <div style={styles.heroGlow2} />
    <div style={{
      ...styles.heroContent,
      ...sectionAnim("home"),
      transition: "all 1s cubic-bezier(.16,1,.3,1)",
    }}>
      <div style={styles.heroBadge}>⚡ Available for new projects</div>
      <h1 style={styles.heroTitle}>
        Full-Stack<br />
        <span style={styles.heroAccent}>Software Design</span>
      </h1>
      <p style={styles.heroSub}>
        We architect, design & build digital products end-to-end —
        from concept to deployment. Clean code, bold design, reliable delivery.
      </p>
      <div style={styles.heroCtas}>
        <a href="#contact" style={styles.btnPrimary}>Request a Service</a>
        <a href="#work" style={styles.btnSecondary}>View Work</a>
      </div>
    </div>
    <div style={styles.scrollIndicator}>
      <div style={styles.scrollDot} />
    </div>
  </section>
));

export default Hero;