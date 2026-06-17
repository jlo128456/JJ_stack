/* ---------- Hero ---------- */
import {
  GOLD, DARK_GOLD, TEXT_PRIMARY, TEXT_MUTED, FONT_HEADING,
} from "./theme";

export const heroStyles = {

  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "120px 24px 80px",
  },

  heroGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(#ffffff06 1px, transparent 1px), linear-gradient(90deg, #ffffff06 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    animation: "gridMove 20s linear infinite",
    opacity: 0.5,
  },

  watermark: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    maxWidth: 900,
    opacity: 0.12,
    pointerEvents: "none",
    zIndex: 0,
  },

  heroGlow: {
    position: "absolute",
    width: 600,
    height: 600,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${GOLD}15, transparent 70%)`,
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    pointerEvents: "none",
  },

  heroGlow2: {
    position: "absolute",
    width: 400,
    height: 400,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${DARK_GOLD}15, transparent 70%)`,
    bottom: "10%",
    right: "15%",
    pointerEvents: "none",
  },

  heroContent: {
    position: "relative",
    textAlign: "center",
    maxWidth: 800,
    zIndex: 1,
  },

  heroBadge: {
    display: "inline-block",
    background: `${GOLD}10`,
    border: `1px solid ${GOLD}25`,
    color: GOLD,
    padding: "8px 20px",
    borderRadius: 100,
    fontSize: 13,
    fontWeight: 500,
    marginBottom: 32,
    letterSpacing: 0.5,
  },

  heroTitle: {
    fontFamily: FONT_HEADING,
    fontSize: "clamp(42px, 7vw, 80px)",
    fontWeight: 800,
    color: TEXT_PRIMARY,
    lineHeight: 1.05,
    letterSpacing: -2,
  },

  heroAccent: {
    background: `linear-gradient(135deg, ${GOLD}, ${DARK_GOLD})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  heroSub: {
    fontSize: 18,
    color: TEXT_MUTED,
    maxWidth: 560,
    margin: "24px auto 0",
    lineHeight: 1.7,
    fontWeight: 300,
  },

  heroCtas: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    marginTop: 40,
    flexWrap: "wrap",
  },
};
