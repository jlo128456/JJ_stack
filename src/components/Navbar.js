import { useState } from "react";
import { styles } from "../styles";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Designs", id: "designs" },
  { label: "Reviews", id: "reviews" },
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" }
];

function Navbar({ activeSection, onSectionChange, scrollY }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId);
    setMenuOpen(false);
  };

  return (
    <nav style={{
      ...styles.nav,
      backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
      background: scrollY > 50 ? "#07090dcc" : "transparent",
    }}>
      <div className="nav-inner" style={{
        ...styles.navInner,
        justifyContent: "center",
        position: "relative",
      }}>

        {/* Centered Links */}
        <div className="nav-links" style={{
          display: "flex",
          gap: 40,
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                ...styles.navLink,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color: activeSection === item.id ? "#c9a227" : "#fff",
                transition: "color 0.3s ease",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA - right side */}
        <button
          onClick={() => handleNavClick("contact")}
          className="nav-cta-desktop"
          style={{
            ...styles.navCta,
            position: "absolute",
            right: 24,
            border: "none",
            cursor: "pointer",
          }}
        >
          Start a Project
        </button>

        {/* Hamburger */}
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
            position: "absolute",
            right: 16,
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
          top: 0, left: 0, right: 0, bottom: 0,
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
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                color: activeSection === item.id ? "#c9a227" : "#fff",
                textDecoration: "none",
                fontSize: 24,
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            style={{
              ...styles.navCta,
              marginTop: 16,
              fontSize: 16,
              padding: "14px 32px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;