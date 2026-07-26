import { forwardRef } from "react";
import { styles } from "../styles";
import { designTemplates } from "../data";

/* ─── mini "browser window" that re-renders per selected template ─── */
const TemplatePreview = ({ t }) => {
  const base = {
    background: t.bg,
    color: t.text,
    fontFamily: t.font,
    minHeight: 340,
    padding: "36px 32px",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    transition: "background .3s ease, color .3s ease",
  };

  const navRow = (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ fontWeight: 800, fontSize: 15 }}>Brand</div>
      <div style={{ display: "flex", gap: 18, fontSize: 12, opacity: 0.8 }}>
        <span>Home</span><span>Services</span><span>Work</span><span>Contact</span>
      </div>
    </div>
  );

  const cta = (
    <div
      style={{
        display: "inline-block",
        background: t.accent,
        color: t.id === "creative" ? "#7b2ff7" : t.bg.startsWith("#fff") || t.id === "corporate" || t.id === "minimal" ? "#fff" : t.bg,
        padding: "10px 22px",
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 700,
        width: "fit-content",
      }}
    >
      Get Started
    </div>
  );

  /* layout variants keep the same content but reshuffle it,
     so each template actually *feels* structurally different */
  if (t.layout === "split") {
    return (
      <div style={base}>
        {navRow}
        <div style={{ display: "flex", gap: 24, alignItems: "center", flex: 1 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 26, fontWeight: 800, marginBottom: 10, lineHeight: 1.2 }}>
              Build something bold.
            </div>
            <div style={{ fontSize: 13, color: t.muted, marginBottom: 18 }}>
              A striking dark layout with a single vivid accent.
            </div>
            {cta}
          </div>
          <div style={{ flex: 1, height: 140, background: t.surface, borderRadius: 12 }} />
        </div>
      </div>
    );
  }

  if (t.layout === "grid") {
    return (
      <div style={base}>
        {navRow}
        <div style={{ textAlign: "center", padding: "8px 0 4px" }}>
          <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>Trusted, structured design.</div>
          <div style={{ fontSize: 13, color: t.muted, marginBottom: 16 }}>Everything organised, nothing out of place.</div>
          <div style={{ margin: "0 auto" }}>{cta}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, flex: 1 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ background: t.surface, borderRadius: 10, border: "1px solid #00000010" }} />
          ))}
        </div>
      </div>
    );
  }

  if (t.layout === "asymmetric") {
    return (
      <div style={base}>
        {navRow}
        <div style={{ display: "flex", gap: 20, flex: 1 }}>
          <div style={{ flex: 1.3, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
            <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.15 }}>Playful. Creative. Yours.</div>
            <div style={{ fontSize: 13, color: t.muted }}>Gradients & shapes that stand out from the crowd.</div>
            {cta}
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: t.surface, borderRadius: "50%", aspectRatio: "1/1" }} />
            <div style={{ background: t.surface, borderRadius: 12, flex: 1 }} />
          </div>
        </div>
      </div>
    );
  }

  /* default: "centered" / minimal */
  return (
    <div style={base}>
      {navRow}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 14 }}>
        <div style={{ fontSize: 28, fontWeight: 800 }}>Simple. Clear. Focused.</div>
        <div style={{ fontSize: 13, color: t.muted, maxWidth: 320 }}>
          A calm, minimal starting point with room for your content to breathe.
        </div>
        {cta}
      </div>
    </div>
  );
};

const DesignPicker = forwardRef(({ sectionAnim, selectedId, onSelect }, ref) => {
  const selected = designTemplates.find((t) => t.id === selectedId) || designTemplates[0];

  return (
    <section
      id="designs"
      ref={ref}
      className="section"
      style={{
        ...styles.section,
        ...sectionAnim("designs"),
        transition: "all .8s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div style={styles.container}>
        <div style={styles.sectionLabel}>△ START WITH A LOOK</div>
        <h2 className="section-title" style={styles.sectionTitle}>
          Pick a Starting Design
        </h2>

        <div style={styles.designPickerRow}>
          <select
            value={selectedId}
            onChange={(e) => onSelect(e.target.value)}
            style={styles.designSelect}
          >
            {designTemplates.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
          <span style={styles.designTagline}>{selected.tagline}</span>
        </div>

        <div style={styles.designPreviewFrame}>
          <div style={styles.designBrowserBar}>
            <span style={{ ...styles.designBrowserDot, background: "#ff5f57" }} />
            <span style={{ ...styles.designBrowserDot, background: "#febc2e" }} />
            <span style={{ ...styles.designBrowserDot, background: "#28c840" }} />
          </div>
          <TemplatePreview t={selected} />
        </div>

        <div className="design-thumbs-row" style={styles.designThumbsRow}>
          {designTemplates.map((t) => (
            <div
              key={t.id}
              onClick={() => onSelect(t.id)}
              style={{
                ...styles.designThumbCard,
                ...(t.id === selectedId ? styles.designThumbCardActive : {}),
              }}
            >
              <div style={{ borderRadius: 8, overflow: "hidden", pointerEvents: "none" }}>
                <div style={{ transform: "scale(1)", transformOrigin: "top left" }}>
                  <div style={{ height: 90, overflow: "hidden" }}>
                    <div style={{ transform: "scale(0.42)", transformOrigin: "top left", width: 238 }}>
                      <TemplatePreview t={t} />
                    </div>
                  </div>
                </div>
              </div>
              <div style={styles.designThumbLabel}>{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default DesignPicker;
