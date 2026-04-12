import { styles } from "../styles";

const navItems = ["Home", "Services", "Work", "Contact"];
const LOGO = "/logo512.png";

function Navbar({ scrollY }) {
  return (
    <nav style={{
      ...styles.nav,
      backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
      background: scrollY > 50 ? "#07090dcc" : "transparent",
    }}>
      <div style={styles.navInner}>
        <img src={LOGO} alt="JJ Stak" style={styles.logoImg} />
        <div style={styles.navLinks}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={styles.navLink}>
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" style={styles.navCta}>Start a Project</a>
      </div>
    </nav>
  );
}

export default Navbar;