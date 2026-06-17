/* ---------- Navigation ---------- */
import {
  BG_DARK, GOLD, TEXT_MUTED, BORDER, FONT_HEADING,
} from "./theme";

export const navStyles = {

  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "all .3s",
    borderBottom: `1px solid ${BORDER}`,
  },

  navInner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoImg: {
    height: 44,
    width: "auto",
  },

  navLinks: {
    display: "flex",
    gap: 32,
  },

  navLink: {
    color: TEXT_MUTED,
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0.5,
  },

  navCta: {
    background: GOLD,
    color: BG_DARK,
    padding: "10px 22px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 14,
    fontFamily: FONT_HEADING,
  },
};
