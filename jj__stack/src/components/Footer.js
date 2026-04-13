import { styles } from "../styles";

const LOGO = "/logo512.png";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="footer-inner" style={styles.footerInner}>
        <img src={LOGO} alt="JJ Stak" style={styles.logoImg} />
        <p style={{
          color: "#4a5568",
          fontFamily: "DM Sans, sans-serif",
          fontSize: 14,
        }}>
          © 2025 JJ Stack. Crafting software with precision.
        </p>
      </div>
    </footer>
  );
}

export default Footer;