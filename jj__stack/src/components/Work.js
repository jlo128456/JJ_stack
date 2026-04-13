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
        {projects.map((p) => {
          const card = (
            <div style={styles.projectCard}>
              <div style={{
                ...styles.projectThumb,
                background: p.image ? "#000" : `linear-gradient(135deg, #c9a22715, #c9a22705)`,
                borderColor: "#c9a22720",
                overflow: "hidden",
                padding: 0,
              }}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span style={{ ...styles.projectLetter, color: "#c9a227" }}>
                    {p.name[0]}
                  </span>
                )}
              </div>
              <div style={styles.projectInfo}>
                <h3 style={styles.projectName}>{p.name}</h3>
                <span style={styles.projectType}>{p.type}</span>
              </div>
            </div>
          );

          return p.url ? (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              {card}
            </a>
          ) : (
            <div key={p.name}>{card}</div>
          );
        })}
      </div>
    </div>
  </section>
));

export default Work;