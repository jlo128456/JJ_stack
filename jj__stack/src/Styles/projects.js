/* ---------- Projects ---------- */
import {
  BG_CARD, TEXT_PRIMARY, TEXT_DIM, BORDER, FONT_HEADING,
} from "./theme";

export const projectStyles = {

  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20,
  },

  projectCard: {
    background: BG_CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    overflow: "hidden",
    transition: "all .3s",
  },

  projectThumb: {
    height: 180,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid",
  },

  projectLetter: {
    fontFamily: FONT_HEADING,
    fontSize: 64,
    fontWeight: 800,
    opacity: 0.6,
  },

  projectInfo: {
    padding: 20,
  },

  projectName: {
    fontFamily: FONT_HEADING,
    fontSize: 18,
    fontWeight: 700,
    color: TEXT_PRIMARY,
  },

  projectType: {
    fontSize: 13,
    color: TEXT_DIM,
    marginTop: 4,
    display: "block",
  },
};
