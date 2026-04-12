import { forwardRef } from "react";
import { styles } from "../styles";

const LOGO = "/logo512.png";

const Hero = forwardRef(({ sectionAnim }, ref) => (
  <section id="home" ref={ref} className="hero" style={styles.hero}>
    <div style={styles.heroGrid} />
    <img src={LOGO} alt="" style={styles.watermark} />
    <div style={styles.heroGlow} />
    <div style={styles.heroGlow2} />
    <div style={{
      ...styles.heroContent,
      ...sectionAnim("home"),
      transition: "all 1s cubic-bezier(.16,1,.3,1)",
    }}>
      <div className="hero-badge" style={styles.heroBadge}>
        ⚡ Available for new projects
      </div>
      <h1 className="hero-title" style={styles.heroTitle}>
        Full-Stack<br />
        <span style={styles.heroAccent}>Software Design</span>
      </h1>
      <p className="hero-sub" style={styles.heroSub}>
        We architect, design & build digital products end-to-end —
        from concept to deployment. Clean code, bold design, reliable delivery.
      </p>
      <div className="hero-ctas" style={styles.heroCtas}>
        <a href="#contact" className="btn-primary" style={styles.btnPrimary}>
          Request a Service
        </a>
        <a href="#work" className="btn-secondary" style={styles.btnSecondary}>
          View Work
        </a>
      </div>
    </div>
    <div style={styles.scrollIndicator}>
      <div style={styles.scrollDot} />
    </div>
  </section>
));

export default Hero;