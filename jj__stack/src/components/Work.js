import { forwardRef } from "react";
import { styles } from "../styles";
import { projects } from "../data";

const Work = forwardRef(({ sectionAnim }, ref) => (
  <section
    id="work"
    ref={ref}
    className="section"
    style={{
      ...styles.section,
      ...sectionAnim("work"),
      transition: "all .8s cubic-bezier(.16,1,.3,1)",
    }}
  >
    <div style={styles.container}>
      <div style={styles.sectionLabel}>△ SELECTED WORK</div>
      <h2 className="section-title" style={styles.sectionTitle}>
        Recent Projects
      </h2>
      <div className="projects-grid" style={styles.projectsGrid}>
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div style={styles.projectCard}>
              <div style={{
                ...styles.projectThumb,
                background: `linear-gradient(135deg, ${p.color}15, ${p.color}05)`,
                borderColor: `${p.color}20`,
              }}>
                <span style={{ ...styles.projectLetter, color: p.color }}>
                  {p.name[0]}
                </span>
              </div>
              <div style={styles.projectInfo}>
                <h3 style={styles.projectName}>{p.name}</h3>
                <span style={styles.projectType}>{p.type}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
));

export default Work;