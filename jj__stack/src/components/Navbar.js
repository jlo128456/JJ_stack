import { useState } from "react";
import { styles } from "../styles";

const navItems = ["Home", "Services", "Work", "Contact"];
const LOGO = "/logo512.png";

function Navbar({ scrollY }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      ...styles.nav,
      backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
      background: scrollY > 50 ? "#07090dcc" : "transparent",
    }}>
      <div className="nav-inner" style={styles.navInner}>
        

        {/* Desktop Links */}
        <div className="nav-links" style={styles.navLinks}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={styles.navLink}>
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta-desktop" style={styles.navCta}>
          Start a Project
        </a>

        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            zIndex: 200,
          }}
        >
          <span style={{
            width: 24, height: 2, background: "#c9a227",
            transition: "all .3s",
            transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
          }} />
          <span style={{
            width: 24, height: 2, background: "#c9a227",
            transition: "all .3s",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            width: 24, height: 2, background: "#c9a227",
            transition: "all .3s",
            transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
          }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#07090df0",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          zIndex: 150,
        }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: 24,
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{ ...styles.navCta, marginTop: 16, fontSize: 16, padding: "14px 32px" }}
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;