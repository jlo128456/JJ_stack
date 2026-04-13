import { forwardRef } from "react";
import { styles } from "../styles";
import { projects } from "../data";

/* ─── mockup type resolved from project name ─── */
const MOCKUP = {
  "Web app":          "desktop-mobile",  // screenshot on monitor + phone
  "Prefect Agencies": "desktop",         // screenshot on monitor only
  "JJ Stack":         "icon",            // image contained inside monitor
};

/* ─── shared frame wrapper ─── */
const frameWrap = {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  gap: 10,
  height: "100%",
  padding: "0 0 18px",
  background: "#111",
};

/* ─── monitor ─── */
const Monitor = ({ src, alt, iconMode = false, width = 130 }) => (
  <div style={{ width }}>
    {/* shell */}
    <div style={{ background: "#444", borderRadius: "6px 6px 0 0", padding: "5px 5px 0" }}>
      {/* screen */}
      <div
        style={{
          aspectRatio: "4/3",
          borderRadius: "3px 3px 0 0",
          overflow: "hidden",
          background: iconMode ? "#e8f0fe" : "#1a78c2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width:       iconMode ? "78%" : "100%",
            height:      iconMode ? "78%" : "100%",
            objectFit:   iconMode ? "contain" : "cover",
            objectPosition: "top center",
          }}
        />
      </div>
    </div>
    {/* stand */}
    <div style={{ width: 32, height: 12, background: "#555", margin: "0 auto" }} />
    {/* base */}
    <div style={{ width: 56, height: 5, background: "#555", borderRadius: "0 0 3px 3px", margin: "0 auto" }} />
  </div>
);

/* ─── phone ─── */
const Phone = ({ src, alt }) => (
  <div
    style={{
      width: 52,
      background: "#3a3a3a",
      borderRadius: 8,
      padding: "5px 4px",
      marginBottom: 4,
    }}
  >
    {/* notch */}
    <div style={{ width: 18, height: 4, background: "#555", borderRadius: 2, margin: "0 auto 4px" }} />
    {/* screen */}
    <div style={{ aspectRatio: "9/16", borderRadius: 4, overflow: "hidden", background: "#1a78c2" }}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
      />
    </div>
    {/* home button */}
    <div style={{ width: 14, height: 14, background: "#555", borderRadius: "50%", margin: "4px auto 0" }} />
  </div>
);

/* ─── thumb renderer ─── */
const ProjectThumb = ({ project }) => {
  const { image, name } = project;
  const mockup = MOCKUP[name];

  if (mockup === "desktop-mobile") {
    return (
      <div style={frameWrap}>
        <Monitor src={image} alt={name} />
        <Phone   src={image} alt={`${name} mobile`} />
      </div>
    );
  }

  if (mockup === "desktop") {
    return (
      <div style={frameWrap}>
        <Monitor src={image} alt={name} width={160} />
      </div>
    );
  }

  if (mockup === "icon") {
    return (
      <div style={frameWrap}>
        <Monitor src={image} alt={name} width={150} iconMode />
      </div>
    );
  }

  /* fallback — plain image or first-letter tile */
  return (
    <div
      style={{
        ...styles.projectThumb,
        background: image ? "#000" : "linear-gradient(135deg,#c9a22715,#c9a22705)",
        borderColor: "#c9a22720",
        overflow: "hidden",
        padding: 0,
      }}
    >
      {image ? (
        <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <span style={{ ...styles.projectLetter, color: "#c9a227" }}>{name[0]}</span>
      )}
    </div>
  );
};

/* ─── main section ─── */
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
              {/* thumb */}
              <div
                style={{
                  ...styles.projectThumb,
                  padding: 0,
                  overflow: "hidden",
                  background: "#111",
                  borderColor: "#c9a22720",
                }}
              >
                <ProjectThumb project={p} />
              </div>

              {/* meta */}
              <div style={styles.projectInfo}>
                <h3 style={styles.projectName}>{p.name}</h3>
                <span style={styles.projectType}>{p.type}</span>
              </div>
            </div>
          );

          /* wrap in <a> only when url looks like a real external link */
          const isExternalUrl = p.url?.startsWith("http");
          return isExternalUrl ? (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
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