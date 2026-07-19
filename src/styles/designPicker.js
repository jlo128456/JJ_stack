/* ---------- Design Picker ---------- */
import { GOLD, TEXT_BODY, TEXT_MUTED, BG_CARD, BORDER, FONT_HEADING, FONT_BODY } from "./theme";

export const designPickerStyles = {

  designPickerRow: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 32,
  },

  designSelect: {
    background: BG_CARD,
    color: TEXT_BODY,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    padding: "12px 16px",
    fontFamily: FONT_BODY,
    fontSize: 15,
    fontWeight: 500,
    cursor: "pointer",
    minWidth: 220,
  },

  designTagline: {
    color: TEXT_MUTED,
    fontSize: 14,
    fontFamily: FONT_BODY,
  },

  designPreviewFrame: {
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 30px 60px -20px #000000aa",
  },

  designBrowserBar: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 16px",
    background: "#1c1c22",
  },

  designBrowserDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
  },

  designThumbsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
    marginTop: 24,
  },

  designThumbCard: {
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: 4,
    cursor: "pointer",
    transition: "all .25s ease",
    background: BG_CARD,
  },

  designThumbCardActive: {
    borderColor: GOLD,
    boxShadow: "0 0 0 1px #c9a22750, 0 8px 24px -8px #c9a22740",
  },

  designThumbLabel: {
    fontFamily: FONT_HEADING,
    fontSize: 13,
    fontWeight: 700,
    color: "#fff",
    padding: "10px 4px 6px",
  },
};
