/* ---------- Services ---------- */
import {
  GOLD, BG_CARD, TEXT_PRIMARY, TEXT_SUBTLE, BORDER, FONT_HEADING,
} from "./theme";

export const servicesStyles = {

  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 20,
  },

  serviceCard: {
    background: BG_CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: 32,
    transition: "all .3s",
  },

  serviceIcon: {
    fontSize: 28,
    color: GOLD,
    display: "block",
    marginBottom: 16,
  },

  serviceTitle: {
    fontFamily: FONT_HEADING,
    fontSize: 18,
    fontWeight: 700,
    color: TEXT_PRIMARY,
    marginBottom: 8,
  },

  serviceDesc: {
    fontSize: 14,
    color: TEXT_SUBTLE,
    lineHeight: 1.7,
  },
};
