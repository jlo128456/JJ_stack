/* ---------- Buttons, Scroll, Shared Sections ---------- */
import {
  GOLD, BG_DARK, TEXT_BODY, TEXT_PRIMARY, FONT_HEADING,
} from "./theme";

export const sharedStyles = {

  /* Buttons */
  btnPrimary: {
    background: GOLD,
    color: BG_DARK,
    padding: "14px 32px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 15,
    fontFamily: FONT_HEADING,
    display: "inline-block",
    animation: "glowPulse 3s infinite",
  },

  btnSecondary: {
    background: "transparent",
    color: TEXT_BODY,
    padding: "14px 32px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 15,
    fontFamily: FONT_HEADING,
    border: "1px solid #ffffff15",
    display: "inline-block",
  },

  /* Scroll Indicator */
  scrollIndicator: {
    position: "absolute",
    bottom: 32,
    left: "50%",
    transform: "translateX(-50%)",
    width: 24,
    height: 40,
    border: "2px solid #ffffff20",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    paddingTop: 8,
  },

  scrollDot: {
    width: 4,
    height: 8,
    background: GOLD,
    borderRadius: 4,
    animation: "float 2s ease-in-out infinite",
  },

  /* Section Wrappers */
  section: {
    padding: "100px 24px",
  },

  container: {
    maxWidth: 1100,
    margin: "0 auto",
  },

  sectionLabel: {
    fontFamily: FONT_HEADING,
    fontSize: 12,
    color: GOLD,
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 12,
  },

  sectionTitle: {
    fontFamily: FONT_HEADING,
    fontSize: "clamp(32px, 5vw, 52px)",
    fontWeight: 800,
    color: TEXT_PRIMARY,
    letterSpacing: -1,
    marginBottom: 48,
  },
};
