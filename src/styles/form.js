/* ---------- Contact Form & Footer ---------- */
import {
  BG_DARK, BG_CARD, TEXT_PRIMARY, TEXT_DIM, BORDER, FONT_BODY,
} from "./theme";

export const formStyles = {

  formWrap: {
    maxWidth: 680,
    margin: "0 auto",
    background: BG_CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 20,
    padding: 40,
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",
  },

  label: {
    fontSize: 13,
    color: TEXT_DIM,
    marginBottom: 8,
    fontWeight: 500,
    letterSpacing: 0.5,
  },

  input: {
    background: BG_DARK,
    border: "1px solid #ffffff10",
    borderRadius: 10,
    padding: "12px 16px",
    color: TEXT_PRIMARY,
    fontSize: 14,
    fontFamily: FONT_BODY,
    transition: "all .2s",
    width: "100%",
  },

  successMsg: {
    textAlign: "center",
    padding: "60px 20px",
    maxWidth: 480,
    margin: "0 auto",
  },
};

export const footerStyles = {

  footer: {
    borderTop: `1px solid ${BORDER}`,
    padding: "32px 24px",
  },

  footerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
  },
};
