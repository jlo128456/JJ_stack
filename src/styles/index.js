/* ============================================
   Styles Index - Combines all style modules
   ============================================ */

import { BG_DARK, TEXT_BODY, FONT_BODY } from "./theme";
import { navStyles } from "./nav";
import { heroStyles } from "./hero";
import { sharedStyles } from "./shared";
import { servicesStyles } from "./services";
import { projectStyles } from "./projects";
import { formStyles, footerStyles } from "./form";

export const styles = {

  /* Root */
  root: {
    background: BG_DARK,
    color: TEXT_BODY,
    minHeight: "100vh",
    fontFamily: FONT_BODY,
    overflowX: "hidden",
  },

  /* Merge all sections */
  ...navStyles,
  ...heroStyles,
  ...sharedStyles,
  ...servicesStyles,
  ...projectStyles,
  ...formStyles,
  ...footerStyles,
};
